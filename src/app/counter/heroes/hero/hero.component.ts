import {Component} from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public edad: number = 45;

// metodo get
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }


  // metodo con return
  HeroDescription(): string {
    return `${this.name} - ${this.edad}`;
  }


  changeHero(): string{
    return this.name = "superman";
  }

  changeEdad(): number{
    return this.edad = 50;
  }

  resetValues(){
    this.name = "spiderman";
    this.edad = 45;
  }
}
