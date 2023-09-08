import { Component, Input } from '@angular/core';
import { Personaje } from 'src/app/helpers/types';
import { DialogService } from 'primeng/dynamicdialog';
import { DetallePersonajeComponent } from '../detalle-personaje/detalle-personaje.component';

@Component({
  selector: 'app-card-personaje',
  templateUrl: './card-personaje.component.html',
  styleUrls: ['./card-personaje.component.css']
})
export class CardPersonajeComponent {

  //#region Properties

  @Input()
  personaje!: Personaje;

  //#endregion

  //#region Constructor

  constructor(
    public dialogService: DialogService
  ) { }

  //#endregion

  //#region Methods

  verDetalle() {

    this.dialogService
      .open(DetallePersonajeComponent, {
        data: {
          id: this.personaje.id
        },
        header: `Información del personaje`,
        width: '50%'
      });
  }

  //#endregion
}
