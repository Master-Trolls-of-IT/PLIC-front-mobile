import { action, makeObservable, observable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import APIServices from '~/infrastructure/controllers/services/api';
import { LogsLevelEnum } from '~/domain/interfaces/enum/logs-enum';
import { CustomLog } from '~/domain/interfaces/services/custom-log';

class LogStore {
    logs: CustomLog[];
    discordWebhookURL: string;

    constructor(storageKey: string) {
        this.logs = [];
        this.discordWebhookURL = process.env.DISCORD_WEBHOOK_URL + '';

        makeObservable(
            this,
            {
                logs: observable,

                addLog: action,
                log: action,
                warn: action,
                error: action,
                resetStore: action
            },
            { autoBind: true }
        );

        void makePersistable(
            this,
            {
                name: storageKey,
                properties: ['logs'],
                storage: AsyncStorage
            },
            {}
        );
    }

    sendLogs = async (): Promise<void> => {
        if (this.logs.length !== 0) {
            await APIServices.POST('/logs', JSON.stringify(this.logs));
            this.resetStore();
        }
    };

    log = (source: string, message: string, details: string) => {
        this.addLog(source, LogsLevelEnum.Info, message, details);
    };

    warn = (source: string, message: string, details: string) => {
        this.addLog(source, LogsLevelEnum.Warn, message, details);
    };

    error = (source: string, message: string, details: string) => {
        this.addLog(source, LogsLevelEnum.Error, message, details);
    };

    resetStore = () => {
        this.logs = [];
    };

    addLog = (source: string, level: LogsLevelEnum, message: string, details: string) => {
        const date = new Date().toISOString();
        const customLog: CustomLog = { level, message, details, source, date };
        this.logs.push(customLog);
        if (level !== LogsLevelEnum.Info) {
            void this.sendDiscordNotification(this.discordWebhookURL, customLog);
        }
    };

    sendDiscordNotification = async (webhookUrl: string, customLog: CustomLog) => {
        try {
            const payload = {
                embeds: [
                    {
                        title: customLog.level,
                        fields: [
                            { name: 'Message', value: customLog.message },
                            { name: 'Details', value: customLog.details },
                            { name: 'Source', value: customLog.source },
                            { name: 'Date', value: customLog.date }
                        ]
                    }
                ]
            };
            await APIServices.POST(webhookUrl, payload, {}, true);
        } catch (error) {
            console.error('Failed to send Discord notification:', error);
        }
    };
}
export default LogStore;
