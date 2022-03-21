import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name: String = "TK Tran";
  slogan: String = "Software Engineer";
  location: String = "👁‍🗨 Providence";
  projects: String = "My Projects";

  constructor() { }

  ngOnInit(): void {
  }
}
