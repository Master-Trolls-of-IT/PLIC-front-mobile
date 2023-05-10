import { LogsLevelEnum } from '~/domain/interfaces/enum/Logs-enum';

class CustomLog {
    private level: LogsLevelEnum;
    private message: string;
    private details: string;
    private date: string;

    constructor(level: LogsLevelEnum, message: string, details: string) {
        this.level = level;
        this.message = message;
        this.details = details;
        this.date = new Date().toISOString();
    }
}

export default CustomLog;
