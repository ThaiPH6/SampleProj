import { Injectable } from '@angular/core';
import { AuthData } from './auth-data.model';
import { User } from './user.model';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user!: User;
  authChange = new Subject<boolean>();
  yes: boolean = false;

  constructor(
    private router: Router
  ) { }

  registerUser(authData: AuthData): void {
    this.user = {
      email: authData.email,
      userId: 'aaa1231!@#$'
    }
    this.authSuccessfully();
  }

  login(authData: AuthData): void {
    this.user = {
      email: authData.email,
      userId: 'aaa1231!@#$'
    }
    this.yes = true;
    this.authSuccessfully();
  }

  logout(): void {
    this.user = {
      email: null,
      userId: null
    };
    this.yes = false;
    this.authChange.next(false);
    this.router.navigate(['/login']);
  }

  getUser() {
    return {...this.user};
  }

  isAuth(): boolean {
    return this.user.userId != null;
  }

  getAuthStatus(): Observable<boolean> {
    console.log('alooo3');
    return this.authChange.asObservable();
  }

  private authSuccessfully(): void {
    this.authChange.next(true);
    this.router.navigate(['/']);
    console.log('alooo2', this.authChange)
  }
}
