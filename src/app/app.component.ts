import { Component } from '@angular/core';
import { TFundService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = this.tfunds.user;
  logo = this.tfunds.config['logo'];
  services: any;
  donations: any;
  denomination: any;
  constructor(
    private tfunds: TFundService
  ) {

  }
  ngOnInit() {
    this.services = this.tfunds.config['services'];
    this.donations = this.tfunds.config['donation']['amount'];
    this.denomination = this.tfunds.config['donation']['currency'];
  }
}
