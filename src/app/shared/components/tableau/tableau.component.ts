import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tableau',
  templateUrl: './tableau.component.html',
  styleUrls: ['./tableau.component.scss']
})
export class TableauComponent implements OnInit {

  @Input() headers: string[];
  // @Input() lastRow: {route: string, libelle: string};


  constructor() {
    // console.log(this.headers);
  }

  ngOnInit() {
  }

  public dispalyForm(): void {
    /*console.log('nav');*/

  }

}
