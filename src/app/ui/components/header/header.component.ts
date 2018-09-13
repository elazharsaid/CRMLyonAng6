import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public title = 'crm';

  public open = false;

  constructor() { }

  ngOnInit() {
  }

  public toggle(): void {
    /*console.log('nav');*/
    this.open = !this.open;
  }

}
