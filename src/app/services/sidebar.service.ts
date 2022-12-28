import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[]=[
    {
      title: 'Principal',
      icon: 'mdi mdi-gauge',
      submenu: [
        { title: 'Inicio', url: '/'},
        { title: 'Progreso', url: 'progress'},
        { title: 'Graficas', url: 'grafica1'},
        { title: 'Promesas', url: 'promes'},
        { title: 'RxJs', url: 'rxjs'},
      ]
    }
  ];

  constructor() { }
}
