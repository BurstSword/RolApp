import { Component, ViewChild } from '@angular/core';
import { IonRange, IonSelect } from '@ionic/angular';
import { Entity } from 'src/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public entities: Entity[] = [
    {
    attacks: [],
    currentHp: 43,
    image: "",
    initiative: 45,
    maxHp: 69,
    name: "holi",
    statuses: [{
      color:"red",
      name:"Poison",
      rounds:3,
      tag:"PSN",
      damage:0,
      isDebuff:true
    }],
    uid: "231"
  },
  {
    attacks: [],
    currentHp: 3,
    image: "",
    initiative: 45,
    maxHp: 39,
    name: "holi 2",
    statuses: [],
    uid: "635"
  }
]
  constructor() { }




}
