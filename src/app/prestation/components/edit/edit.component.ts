import { Component, OnInit, Input } from '@angular/core';
import { Prestation } from '../../../shared/models/prestation-m';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PrestationService } from '../../services/prestation.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  public form: FormGroup;
  private prestationService: PrestationService;

  @Input() presta: Prestation;

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
  }

  public edit(presta: Prestation): void {
    // this.router. recap
    this.router.navigate(['prestations/add']);
  }

  public  update(item: Prestation): Promise<any> {
    return ;
    // return this.http.patch('urlapi/prestations', item.id, presta);
  }
  public process(): void {
    const item = new Prestation(this.form.value);
    this.prestationService.update(item).then(() => {
      this.presta = item;
    });
    // console.log(this.newItem);
  }

  public isError(typePresta: string): boolean {
    return this.form.get(typePresta).invalid && this.form.get(typePresta).touched;
  }

}
