import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EntityCardComponent } from '../components/entity-card/entity-card.component';



@NgModule({
  declarations: [EntityCardComponent],
  imports: [
    CommonModule,
    
  ],
  exports:[EntityCardComponent]
})
export class ComponentModuleModule { }
