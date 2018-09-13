import { Component, OnInit } from '@angular/core';
import { Prestation } from '../../../shared/models/prestation-m';
import { PrestationService } from '../../services/prestation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-prestation',
  templateUrl: './add-prestation.component.html',
  styleUrls: ['./add-prestation.component.scss']
})
export class AddPrestationComponent implements OnInit {

  constructor(private prestationService: PrestationService, private router: Router) { }

  ngOnInit() {
  }

  public add(newItemPresta: Prestation): void {
    console.log(newItemPresta);
    this.prestationService.add(newItemPresta);
    this.router.navigate(['prestations']);
  }

}
