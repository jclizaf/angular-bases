import { Component, EventEmitter, Input, Output } from '@angular/core';
import {  Character} from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
 // public onDelete:EventEmitter<number>=new EventEmitter();
 public onDelete:EventEmitter<string>=new EventEmitter();

  @Input()
  public characterList: Character[]=[
    {
      id:'id',
      name:'Trunk',
      power:10
    }
  ]

 /* onDeleteCharacter(index:number):void{
   //TODO:Emitir el ID del personaje
   this.onDelete.emit(index);
   console.log (index);
}*/

onDeleteCharacter(id?:string):void{
  //TODO:Emitir el ID del personaje
  if (!id) return;
  console.log (id);
  this.onDelete.emit(id);

}


}
