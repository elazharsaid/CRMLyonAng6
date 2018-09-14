import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Prestation } from '../../shared/models/prestation-m';
import { FormGroup } from '@angular/forms';
import { PrestationService } from '../services/prestation.service';

@Component({
  selector: 'app-edit-presation',
  templateUrl: './edit-presation.component.html',
  styleUrls: ['./edit-presation.component.scss']
})
export class EditPresationComponent implements OnInit {

  public form: FormGroup;
  private prestationService: PrestationService;

  public presta: Prestation;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    this.activatedRoute.data.subscribe((data) => {
      console.log('to ho');
      // console.log(data);
      this.presta = data.prestation;
    });

  }
  public update(presta: Prestation): void {
    // const item = new Prestation(this.form.value);
    this.prestationService.update(presta).then(() => {
      this.router.navigate(['/prestaions']);
    });
    // console.log(this.newItem);
  }

}
