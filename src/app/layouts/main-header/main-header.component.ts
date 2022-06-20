import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.scss'],
})
export class MainHeaderComponent implements OnInit, OnDestroy {
  isAuth: boolean = false;
  authSubcription!: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    console.log('alooo');
    this.isAuth = this.authService.yes;
    // this.authSubcription = this.authService.getAuthStatus().subscribe((authStatus) => {
    //   this.isAuth = authStatus;
    //   console.log('alooo1', this.isAuth);
    // });
  }

  logout(): void {
    this.authService.logout();
  }

  ngOnDestroy(): void {
    // this.authSubcription.unsubscribe();
  }
}
