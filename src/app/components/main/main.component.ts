import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  focus: any;
  focus1: any;
  togMenu: any;
  togWinnersMenu: any;

  constructor() {
   }

  ngOnInit() {
  }

  openLeftNav() {
    document.getElementById('menu').style.display = 'none';
    document.getElementById('winners').style.display = 'block';
    document.getElementById('checkR').style.zIndex= 'unset';
    document.getElementById('checkL').style.zIndex= '1000';
    document.getElementById('leftSidenav').style.width = '250px';
    document.getElementById('rightSidenav').style.width = '0';
  }

  openRightNav() {
    document.getElementById('winners').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
    document.getElementById('checkL').style.zIndex= 'unset';
    document.getElementById('checkR').style.zIndex= '1000';
    document.getElementById('rightSidenav').style.width = '250px';
    document.getElementById('leftSidenav').style.width = '0';
  }

}
