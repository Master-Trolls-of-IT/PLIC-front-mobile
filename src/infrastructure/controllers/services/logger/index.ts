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

    public sendLogsWithDelay(): void {
        // TODO : Sends Log to API via special endpoint
    }
    public sendLogs(): void {
        // TODO : Sends Log to API via special endpoint
    }

    private addLog(message: string, level: Level): void {
        const customLog = new CustomLog(level, message);
        this.logs.push(customLog);
    }
}
