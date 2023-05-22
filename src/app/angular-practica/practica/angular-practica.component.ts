import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-angular-practica',
  templateUrl: './angular-practica.component.html',
  styleUrls: ['./angular-practica.component.less']
})
export class AngularPracticaComponent implements OnInit {

  constructor() { }

  users = [
    { id: '1', name: 'John', isActive: true },
    { id: '2', name: 'Jack', isActive: true },
    { id: '2', name: 'Mike', isActive: true },
  ];


  user$ = of(this.users);

  pruebaUserAsync(event:any){
    this.users[0].name = event.target.value;     
  }

  ngOnInit(): void { 
		//this.users$.subscribe((users) => {
		//console.log('users', users)
		//});
}

}
