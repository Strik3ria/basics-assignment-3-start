export class LogEntry {
    id: number;
    username: string;
    status: string;
    dateTime: Date;

    constructor(id: number, username: string, status: string, dateTime: Date) {
        this.id = id;
        this.username = username;
        this.status = status;
        this.dateTime = dateTime;
    }
}
