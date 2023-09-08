import { Component, OnInit } from '@angular/core';
import { Menu } from './helpers/types';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  //#region Properties

  title = 'Rick and Morty';

  menu: Menu[] = [];

  //#endregion

  //#region Constructors

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

    this.menu = [
      {
        nombre: 'Personajes',
        icono: '',
        activo: true,
        path: '/personajes'
      },
      {
        nombre: 'Lugares',
        icono: '',
        activo: false,
        path: '/lugares'
      },
      {
        nombre: 'Episodio',
        icono: '',
        activo: false,
        path: '/episodio'
      }
    ];
  }

  //#endregion

  //#region Methods

  goTo(selected: Menu) {

    this.menu.forEach(x => x.activo = false);
    selected.activo = true;

    this.router.navigate([selected.path]);
  }

  //#endregion
}
