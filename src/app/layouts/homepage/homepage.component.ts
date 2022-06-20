import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit{

  isAuth: boolean = false;
  authSubcription!: Subscription;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    // this.authSubcription = this.authService.authChange.subscribe( authStatus => {
    //   this.isAuth = authStatus;
    //   console.log('alooo1', this.isAuth);
    // })
  }

  
}
