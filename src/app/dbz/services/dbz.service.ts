import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public character: Character[] = [
    {
      id: uuid(),
      name: 'Krillin',
      power: 1000
    },
    {
      id: uuid(),
      name: 'Goku',
      power: 9500
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 7500
    }
  ];

  addNewCharacter(character: Character): void {

    const newCaracter = { id: uuid(), ...character };

    this.character.push(newCaracter);
  }

  // onDeleteCharacter(index: number): void {
  //   this.character.splice(index, 1);

  // }


  deleteCharacterById(id: string): void {
    this.character = this.character.filter(character => character.id !== id);
  }
}
