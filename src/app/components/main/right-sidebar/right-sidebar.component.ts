import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-sidebar',
  templateUrl: './right-sidebar.component.html',
  styleUrls: ['./right-sidebar.component.scss']
})
export class RightSidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  closeRightNav() {
    document.getElementById('winners').style.display = 'block';
    // document.getElementById('checkR').style.zIndex= 'unset'
    document.getElementById('rightSidenav').style.width = '0';
  }

}
