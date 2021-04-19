import { Component, Input, OnInit } from '@angular/core';
import { UnityLoader } from './UnityLoader.js';
import { UnityProgress } from './UnityProgress.js';
// import path from "C:/Users/Hp/Desktop/play24-7-games/src/assets/shooter/shooter.json";
declare var window: any;

@Component({
  selector: 'app-shooter-game',
  templateUrl: './shooter-game.component.html',
  styleUrls: ['./shooter-game.component.scss']
})
export class ShooterGameComponent implements OnInit {
  unityInstance: any;
  @Input() appLocation: String;
  @Input() appWidth: String;
  @Input() appHeight: String;

  constructor() { }

  ngOnInit() {
    window['UnityLoader'] = UnityLoader;
    window['UnityProgress'] = UnityProgress;
    window['receiveMessageFromUnity'] = this.receiveMessageFromUnity;
    if (this.appLocation) {
      this.loadProject(this.appLocation);
    }
  }

  public loadProject(path) {
    console.log("game is loading");
    this.unityInstance = UnityLoader.instantiate('unityContainer', path='../../../../../assets/shooter/shooter.json');
  }

  public sendMessageToUnity(objectName: string, methodName: string, messageValue: string) {
    console.log('sendMessageToUnity', objectName, methodName, messageValue);
    this.unityInstance.SendMessage(objectName, methodName, messageValue);
  }

  public receiveMessageFromUnity(messageValue: string) {
    console.log('receiveMessageFromUnity', messageValue);
  }

}
