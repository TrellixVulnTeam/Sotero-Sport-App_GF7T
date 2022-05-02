import { Injectable } from '@angular/core';
import { CanLoad } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root',
})
export class UserGuard implements CanLoad {

  constructor(private userService: UserService) { }
  // Métodos para los guards
  
  //Este guard decide si se pueden cargar elementos secundarios, si todos ls guards devuelven true la navegacion puede continuar.
  canLoad(): Observable<boolean> | Promise<boolean> | boolean {
    return this.userService.validateToken();
  }

}
