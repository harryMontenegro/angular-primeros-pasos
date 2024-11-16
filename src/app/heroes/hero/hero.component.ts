import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  
  public name: string = 'Ironman';
  public edad: number = 45;

  get capitalizeName() : string {
    return this.name.toUpperCase();
  }

  getHeroDescription() : string {
    return `${this.name} - ${this.edad}`;
  }

  changeHero(): void {
    this.name = 'Spyderman'
  }

  changeAge():void {
    this.edad = 50;
  }

  resetForm():void {
    this.name = 'Ironman';
    this.edad = 45;
  }
}
