import { action, makeObservable, observable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomLog from '~/infrastructure/controllers/services/logger';
import APIService from '~/infrastructure/controllers/services/api';
import { LogsLevelEnum } from '~/domain/interfaces/enum/Logs-enum';

class LogStore {
    logs: CustomLog[];

    constructor(storageKey: string) {
        this.logs = [];
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
        const response = await APIService.POST('/logs', this.logs);
        if (response.status !== 200) {
            console.log(
                'SendLogs function returned code error %d\n message error : %s',
                response.status,
                response.message
            );
        } else {
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

    sendLogsWithDelay = (seconds: number) => {
        setTimeout(this.sendLogs, seconds * 1000);
    };

    addLog = (source: string, level: LogsLevelEnum, message: string, details: string) => {
        const customLog = new CustomLog(source, level, message, details);
        this.logs.push(customLog);
    };
}
export default LogStore;
