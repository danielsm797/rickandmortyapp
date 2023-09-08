import { Component } from '@angular/core';
import { DetalleEpisodio } from 'src/app/helpers/types';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
import { EpisodiosService } from 'src/app/services/episodios.service';

@Component({
  selector: 'app-detalle-episodio',
  templateUrl: './detalle-episodio.component.html',
  styleUrls: ['./detalle-episodio.component.css']
})
export class DetalleEpisodioComponent {

  //#region Properties

  detalle!: DetalleEpisodio;

  isLoading = true;

  //#endregion

  //#region Constructor

  constructor(
    private config: DynamicDialogConfig,
    private episodiosService: EpisodiosService
  ) {

    const { id } = config.data;

    this.#getDetalle(id);
  }

  //#endregion

  //#region Methods

  #getDetalle(id: number) {

    this.isLoading = true;

    try {

      this.episodiosService
        .getDetalleEpidosio(id)
        .subscribe(obs => {

          this.detalle = obs;

          this.isLoading = false;
        })

    } catch (error) {

      this.isLoading = false;
    }
  }

  //#endregion
}
