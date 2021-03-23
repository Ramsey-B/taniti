import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { faUmbrellaBeach, faSwimmer } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {
  faUmbrellaBeach = faUmbrellaBeach;
  faSwimmer = faSwimmer;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public navigate(path: string): void {
    this.router.navigateByUrl(path);
  }
}
