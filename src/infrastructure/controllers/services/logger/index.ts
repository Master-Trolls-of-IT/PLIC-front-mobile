import { LogsLevelEnum } from '~/domain/interfaces/enum/Logs-enum';

class CustomLog {
    private level: LogsLevelEnum;
    private message: string;
    private details: string;
    private source: string;
    private date: string;

    constructor(source: string, level: LogsLevelEnum, message: string, details: string) {
        this.level = level;
        this.message = message;
        this.details = details;
        this.source = source;
        this.date = new Date().toISOString();
    }
}

export default CustomLog;
