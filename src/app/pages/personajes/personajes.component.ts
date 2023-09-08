import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Filter, Personaje } from 'src/app/helpers/types';
import { PersonajesService } from 'src/app/services/Personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit, OnDestroy {

  //#region Properties

  page = 1;

  rows = 20;

  total = 0;

  personajes: Personaje[] = [];

  #subs: Subscription[] = [];

  filtros: Filter[] = [];

  filter = '';

  //#endregion

  //#region Constructors

  constructor(
    private personajesService: PersonajesService
  ) { }

  ngOnInit() {

    this.#loadPersonajes();

    this.#addFiltros();
  }

  ngOnDestroy() {

    this.#subs.forEach(x => x.unsubscribe());
  }

  //#endregion

  //#region Methods

  #addFiltros() {

    this.filtros = [
      {
        name: 'Nombre',
        code: 'nombre'
      },
      {
        name: 'Estado',
        code: 'nombre',
        // lista: [
        //   'alive',
        //   'dead',
        //   'unknown'
        // ]
      },
      {
        name: 'Genero',
        code: 'nombre',
        // lista: [
        //   'female',
        //   'male',
        //   'genderless',
        //   'unknown'
        // ]
      }
    ];
  }

  pageChange(event: any) {

    this.page = event.page + 1;

    this.rows = event.rows;

    this.#loadPersonajes();
  }

  async #loadPersonajes() {

    this.personajes = [];

    try {

      this.personajesService
        .getPersonajes(this.page, this.filter)
        .subscribe(result => {

          this.personajes = result.personajes;

          this.total = result.total;
        });

    } catch (error) {

    }
  }

  filtrar() {

    this.#loadPersonajes();
  }

  //#endregion
}
