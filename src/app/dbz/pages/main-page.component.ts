import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

constructor(private dbzService: DbzService){
}


get characters(): Character[]{
return [...this.dbzService.characters];
}

OnDeleteCharacter(id:string):void {
  this.dbzService.deleteCharacterById(id);
}

onNewCharacter(character:Character):void{
  this.dbzService.addCharacter(character);
}

  /*
  se movio a un servicio dbz
  public characters:Character[] = [
    {name:'Krillin',
    power:1000
    },
    { name:'Goku',
      power:900
    }
    ,
    { name:'Vegeta',
      power:7500
    }]

   public onNewCharacter(character: Character):void{
    //  console.log('MainPage');
    //  console.log(character);
    this.characters.push(character);
    }

    public onDeleteCharacter(index:number){
      this.characters.splice(index,1);
    }*/

  }
