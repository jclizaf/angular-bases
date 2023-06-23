import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import {v4 as uuid} from 'uuid';


//console.log(v4());

@Injectable(
  {providedIn: 'root'}
  )

export class DbzService {
  constructor() { }


  public characters:Character[] = [
    {
    id: uuid(),
    name:'Krillin',
    power:1000
    },
    { id: uuid(),
      name:'Goku',
      power:900
    }
    ,
    { id: uuid(),
      name:'Vegeta',
      power:7500
    }]

 /* public onNewCharacter({ name, power }: Character): void {
    //  console.log('MainPage');
    //  console.log(character);
    const newCharacter: Character = {
      id: uuid(),
      name,
      power
    }

    this.characters.push(newCharacter);
  }*/


  public addCharacter(character : Character): void {
    //  console.log('MainPage');
    //  console.log(character);
    const newCharacter: Character = {id:uuid(),...character};


    this.characters.push(newCharacter);
  }



    /*public onDeleteCharacter(index:number){
      this.characters.splice(index,1);
    }*/

    deleteCharacterById(id:String){
      this.characters=this.characters.filter(character=>character.id!==id);
    }


}
