import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: String = "TK Tran";
  slogan: String = "Software Engineer";
  location: String = "Providence, RI";
  projects: String = "My Projects";

  constructor() { }

  ngOnInit(): void {
  }
}
