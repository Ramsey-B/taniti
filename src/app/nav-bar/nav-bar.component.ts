import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  public currentUrl: string = "";
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.pipe(
      tap((event: NavigationEnd) => {
        if (event.url)
        {
          this.currentUrl = event.url
          console.log(this.currentUrl);
        }
      })
    ).subscribe();
  }
}
