import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public userPlaceholder = {
    id: '15454549',
    tag: '@eu',
    fullName: 'Eu',
    role: 'common'
  };

  constructor() { }

  public getCurrentUser() {
    return this.userPlaceholder;
  }
}
