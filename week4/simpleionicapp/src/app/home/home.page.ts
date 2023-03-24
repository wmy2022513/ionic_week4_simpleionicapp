import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
    myVariable1: string ="The force is with me!";
    myVariable2: string = "Hello from CCT";

    updateMyValue1(){
      this.myVariable1 = "Now the force is even longer";
    }
    updateMyValue2(){
      this.myVariable2 = "Hello from Ionic Mobile Developement";
    }
}
