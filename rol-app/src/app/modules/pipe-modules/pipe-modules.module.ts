import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountPlayersInEntitiesPipe } from 'src/app/pipes/count-players-in-entities.pipe';



@NgModule({
  declarations: [CountPlayersInEntitiesPipe],
  imports: [
    CommonModule
  ],
  exports: [
    CountPlayersInEntitiesPipe
  ]
})
export class PipeModulesModule { }
