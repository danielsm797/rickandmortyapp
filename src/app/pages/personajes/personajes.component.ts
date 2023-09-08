import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription, Observable, fromEvent, debounceTime } from 'rxjs';
import { Filter, Personaje } from 'src/app/helpers/types';
import { PersonajesService } from 'src/app/services/Personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit, OnDestroy, AfterViewInit {

  //#region Properties

  @ViewChild('txtFilter')
  txtFilter!: ElementRef;

  page = 1;

  rows = 20;

  total = 0;

  personajes: Personaje[] = [];

  #subs: Subscription[] = [];

  filtros: Filter[] = [];

  filter = '';

  isLoading = true;

  //#endregion

  //#region Constructors

  constructor(
    private personajesService: PersonajesService
  ) { }

  ngOnInit() {

    this.#loadPersonajes();
  }

  ngOnDestroy() {

    this.#subs.forEach(x => x.unsubscribe());
  }

  ngAfterViewInit() {

    this.#subs
      .push(
        fromEvent(this.txtFilter.nativeElement, 'keyup')
          .pipe(debounceTime(500))
          .subscribe(() => this.#loadPersonajes())
      );
  }

  //#endregion

  //#region Methods

  pageChange(event: any) {

    this.page = event.page + 1;

    this.rows = event.rows;

    this.#loadPersonajes();
  }

  async #loadPersonajes() {

    this.isLoading = true;

    this.personajes = [];

    try {

      this.personajesService
        .getPersonajes(this.page, this.filter)
        .subscribe(result => {

          this.personajes = result.personajes;

          this.total = result.total;

          this.isLoading = false;
        });

    } catch (error) {

      this.isLoading = false;
    }
  }

  //#endregion
}
