import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-content-wrapper',
  templateUrl: './content-wrapper.component.html',
  styleUrls: ['./content-wrapper.component.scss'],
})
export class ContentWrapperComponent implements OnInit {
  isHomepage: boolean = false;
  constructor(
    private route: ActivatedRoute, 
    private router: Router
  ) {
    if (this.router.url === '/main-feature/home') {
      this.isHomepage = true;
    } else if (this.router.url === '/') {
      this.isHomepage = true;
    } else {
      this.isHomepage = false;
    }
  }

  ngOnInit(): void {

    
  }
}
