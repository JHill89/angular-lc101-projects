import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ['https://www.w3schools.com/css/css_dimension.asp', 'https://angular.io/guide/setup-local'];
  constructor() { }

  ngOnInit() {
  }

}
