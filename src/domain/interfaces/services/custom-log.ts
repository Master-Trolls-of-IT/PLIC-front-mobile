import { LogsLevelEnum } from '~/domain/interfaces/enum/Logs-enum';

export type CustomLog = {
    level: LogsLevelEnum;
    message: string;
    details: string;
    source: string;
    date: string;
};
