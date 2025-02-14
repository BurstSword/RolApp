import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonRange, IonSelect } from '@ionic/angular';
import { Entity } from 'src/interfaces';

@Component({
  selector: 'app-entity-card',
  templateUrl: './entity-card.component.html',
  styleUrls: ['./entity-card.component.scss'],
})
export class EntityCardComponent implements OnInit {

  @Input() entity: Entity
  
 
  constructor() { }

  ngOnInit() {
    
  }

  public calculateHp(quantity: number) {
    var value = this.entity.currentHp;
    if (value > this.entity.maxHp) {
      value = 75;
    } else if (value < 0) {
      value = 0;
    }
    this.entity.currentHp=value+quantity;
  }
}
