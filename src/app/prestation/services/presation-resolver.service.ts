import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, Resolve } from '@angular/router';
import { PrestationService } from './prestation.service';
import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PresationResolverService implements Resolve<any> {

  // private prestationService: PrestationService;

  constructor(private prestationService: PrestationService, private router: Router) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const id = route.paramMap.get('id');

    return this.prestationService.getPrestation(id).pipe(
      take(1),
      map(pres => {
        if (pres) {
          return pres;
        } else { // id not found
          this.router.navigate(['/prestations']);
          return null;
        }
      })
    );

  }


    /**
   * resolve
   * @param id
   */
  // resolve(id: string): Observable<Prestation> {
  //   return this.prestationService.getPrestation(id);
  //  // else false
  // }

}
