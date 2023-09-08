import { Component } from '@angular/core';
import { DetalleLugar } from 'src/app/helpers/types';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { LugaresService } from 'src/app/services/lugares.service';

@Component({
  selector: 'app-detalle-lugar',
  templateUrl: './detalle-lugar.component.html',
  styleUrls: ['./detalle-lugar.component.css']
})
export class DetalleLugarComponent {

  //#region Properties

  detalle!: DetalleLugar;

  isLoading = true;

  //#endregion

  //#region Constructors

  constructor(
    private config: DynamicDialogConfig,
    private lugaresService: LugaresService
  ) {

    const { id } = config.data;

    this.#getDetalle(id);
  }

  //#endregion

  //#region Methods

  #getDetalle(id: number) {

    this.isLoading = true;

    try {

      this.lugaresService
        .getDetalleLugar(id)
        .subscribe(obs => {

          this.detalle = obs;

          this.isLoading = false;
        });

    } catch (error) {

      this.isLoading = false;
    }
  }

  //#endregion
}
