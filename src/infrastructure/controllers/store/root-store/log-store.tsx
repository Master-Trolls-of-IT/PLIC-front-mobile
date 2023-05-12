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
        //sends log to API every 10 seconds
        //setInterval(this.sendLogs, 10000);
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
            await APIService.POST('/logs', JSON.stringify(this.logs));
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
        const customLog = new CustomLog(source, level, message, details);
        this.logs.push(customLog);
    };
}
export default LogStore;
