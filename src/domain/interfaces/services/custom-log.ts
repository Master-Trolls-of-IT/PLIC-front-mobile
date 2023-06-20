import { LogsLevelEnum } from '~/domain/interfaces/enum/logs-enum';

export type CustomLog = {
    level: LogsLevelEnum;
    message: string;
    details: string;
    source: string;
    date: string;
};
