import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class UtilsService {
    constructor() { }

    public log(message: string): void {
        console.log(`UtilsService: ${message}`);
    }
}