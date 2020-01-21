import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LogEntry {
    username: string;
    status: string;
    dateTime: Date;

    constructor(username: string, status: string, dateTime: Date) {
        this.username = username;
        this.status = status;
        this.dateTime = dateTime;
    }
}
