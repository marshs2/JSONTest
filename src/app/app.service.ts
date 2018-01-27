import { Injectable } from '@angular/core';
import { AranidhiConfig } from '../api/aranidhi.config';
import { TodaroseConfig } from '../api/todarose.config';

@Injectable()
export class TFundService {
    user: string = "Aranidhi";
    config: object;

    constructor() {
        if (this.user === "Aranidhi") {
            this.config = AranidhiConfig.getConfig();
        } else if (this.user === "Todarose") {
            this.config = TodaroseConfig.getConfig();
        }
    }
    
}