import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public deletedHero?: string = '';

  heroesName: string[] = [
    'Spiderman',
    'Ironman',
    'Hulk',
    'Thor',
    'She Hulk'
  ];

  removeLastHero():void{
    this.deletedHero = this.heroesName.pop();
  }

}
