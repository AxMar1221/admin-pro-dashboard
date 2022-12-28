import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promes',
  templateUrl: './promes.component.html',
  styles: [
  ]
})
export class PromesComponent implements OnInit{

  constructor() { }

  ngOnInit(): void {
    this.getUsers().then( users => {
      console.log(users);
    });
  }

  getUsers(){

    return new Promise( resolve => {

      fetch('https://reqres.in/api/users')
      .then( resp => resp.json())
      .then( body => resolve(body.data));
    });
  }

}
