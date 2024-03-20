import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  public title = 'Mi primera App';
  public counter : number = 10;

  increaseBy(){
    this.counter ++
  }
  decreaseBy(){
    this.counter --
  }

  resetCounter(){
    this.counter = 10;
  }
}
