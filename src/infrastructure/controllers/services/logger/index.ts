import { LogsLevelEnum } from '~/domain/interfaces/enum/Logs-enum';

class CustomLog {
    private level: LogsLevelEnum;
    private message: string;
    private date: string;
    constructor(level: LogsLevelEnum, message: string) {
        this.level = level;
        this.message = message;
        this.date = new Date().toISOString();
    }
}

export default CustomLog;
