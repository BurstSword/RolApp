import { Pipe, PipeTransform } from '@angular/core';
import { Entity } from 'src/interfaces';

@Pipe({
  name: 'countPlayersInEntities'
})
export class CountPlayersInEntitiesPipe implements PipeTransform {

  transform(value: Entity[], ...args: unknown[]): number {
    var count:number = 0;

    if (value != undefined) {
      value.forEach(element => {
        if (element.isPlayer) {
          count++;
        }
      });
    }

    return count;
  }

}
