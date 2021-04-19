import { Component, OnInit, ViewChild } from '@angular/core';
import { PlatformLocation } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-playgames',
  templateUrl: './playgames.component.html',
  styleUrls: ['./playgames.component.scss']
})
export class PlaygamesComponent implements OnInit {
  @ViewChild('unityView') unityView;
  baseUrl: string;
  // baseUrl = "../../../../assets";
  project: string;

  constructor(
    platformLocation: PlatformLocation,
    private router: Router) {
    const location = (platformLocation as any).location;
    this.baseUrl = location.origin + location.pathname.replace('index.html', '');
    console.log('baseUrl', this.baseUrl);
  }

  ngOnInit() {
  }

  load(name: string) {
    this.project = name;
    this.unityView.loadProject(`${this.baseUrl}assets/${name}/${name}.json`);
    // this.unityView.loadProject(`${this.baseUrl}/${name}/${name}.json`);
    // this.router.navigate(['/shooter']);
    this.router.navigate(['../shooter']);
  }

  send(objectName: string, methodName: string, messageValue: string) {
    this.unityView.sendMessageToUnity(objectName, methodName, messageValue);
  }

}

