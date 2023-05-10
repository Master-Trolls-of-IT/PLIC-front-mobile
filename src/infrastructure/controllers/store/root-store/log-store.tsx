import { action, makeAutoObservable, makeObservable, observable } from 'mobx';
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

                addLog: action.bound,
                log: action.bound,
                warn: action.bound,
                error: action.bound
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
    public log(message: string, details: string): void {
        this.addLog(LogsLevelEnum.Info, message, details);
    }
    public warn(message: string, details: string): void {
        this.addLog(LogsLevelEnum.Warn, message, details);
    }

    public error(message: string, details: string): void {
        this.addLog(LogsLevelEnum.Error, message, details);
    }

    public sendLogsWithDelay(seconds: number): void {
        setTimeout(this.sendLogs, seconds * 1000);
    }
    public async sendLogs(): Promise<void> {
        const response = await APIService.POST('/logs', this.logs);
        if (response.status !== 200) {
            console.log(
                'SendLogs function returned code error %d\n message error : %s',
                response.status,
                response.message
            );
        }
    }

    public resetStore(): void {
        this.logs = [];
    }

    addLog(level: LogsLevelEnum, message: string, details: string): void {
        const customLog = new CustomLog(level, message, details);
        this.logs.push(customLog);
    }
}
export default LogStore;
