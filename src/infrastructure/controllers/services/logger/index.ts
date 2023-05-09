import APIService from '~/infrastructure/controllers/services/api';
import { Animated } from 'react-native';
import delay = Animated.delay;

enum Level {
    Info,
    Warn,
    Error
}

class CustomLog {
    private level: Level;
    private message: string;
    private date: string;
    constructor(level: Level, message: string) {
        this.level = level;
        this.message = message;
        this.date = new Date().toISOString();
    }
}

class CustomLogger {
    private logs: CustomLog[];
    constructor() {
        this.logs = [];
    }
    public log(message: string): void {
        this.addLog(message, Level.Info);
    }
    public warn(message: string): void {
        this.addLog(message, Level.Warn);
    }

    public error(message: string): void {
        this.addLog(message, Level.Error);
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

    private addLog(message: string, level: Level): void {
        const customLog = new CustomLog(level, message);
        this.logs.push(customLog);
    }
}
