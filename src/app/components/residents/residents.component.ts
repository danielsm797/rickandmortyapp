import { Component, Input } from '@angular/core';
import { Image } from 'src/app/helpers/types';
import { DialogService } from 'primeng/dynamicdialog';
import { DetallePersonajeComponent } from '../detalle-personaje/detalle-personaje.component';

@Component({
  selector: 'app-residents',
  templateUrl: './residents.component.html',
  styleUrls: ['./residents.component.css']
})
export class ResidentsComponent {

  //#region Properties

  @Input()
  title = '';

  @Input()
  residents: Image[] = [];

  //#endregion

  //#region Constructors

  constructor(
    private dialogService: DialogService
  ) { }

  //#endregion

  //#region Methods

  verDetallePersonaje(id: number) {

    this.dialogService
      .open(DetallePersonajeComponent, {
        data: {
          id
        },
        header: `Character information`,
        width: '60%'
      });
  }

  //#endregion
}
