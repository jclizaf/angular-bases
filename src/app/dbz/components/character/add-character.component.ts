import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter:EventEmitter<Character>=new EventEmitter();

  public character: Character={
    name:'Hola Mundo',
    power:0
  };

  emitCharacter():void{

    //para que se pare la aplicacion
    //debugger;
    console.log(this.character);
    if (this.character.name.length===0) return;
    this.onNewCharacter.emit(this.character);

    //this.character.name='';
    //this.character.power=0;
    this.character ={name:'',power: 0};
  }

}
