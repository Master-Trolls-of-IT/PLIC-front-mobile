import { action, makeAutoObservable, observable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomLog from '~/infrastructure/controllers/services/logger';
import APIService from '~/infrastructure/controllers/services/api';
import { LogsLevelEnum } from '~/domain/interfaces/enum/Logs-enum';

class LogStore {
    logs: CustomLog[] = [];

    constructor(storageKey: string) {
        makeAutoObservable(this, {
            logs: observable,

            log: action,
            warn: action,
            error: action
        });

        void makePersistable(
            this,
            {
                name: storageKey,
                properties: ['logs'],
                storage: AsyncStorage
            },
            { requiresObservable: true }
        );
    }
    public log(message: string): void {
        this.addLog(message, LogsLevelEnum.Info);
    }
    public warn(message: string): void {
        this.addLog(message, LogsLevelEnum.Warn);
    }

    public error(message: string): void {
        this.addLog(message, LogsLevelEnum.Error);
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

    private addLog(message: string, level: LogsLevelEnum): void {
        const customLog = new CustomLog(level, message);
        this.logs.push(customLog);
    }
}
export default LogStore;
