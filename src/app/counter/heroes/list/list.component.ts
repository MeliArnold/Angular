import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {


  public heroNames: string[] = ['Spiderman', 'Superman', 'Ironman', 'Hulk','Thor']
  public deletedHero?: string;


  borrarHeroe(){
    this.deletedHero =  this.heroNames.pop();
    console.log(this.deletedHero)

  }
}
