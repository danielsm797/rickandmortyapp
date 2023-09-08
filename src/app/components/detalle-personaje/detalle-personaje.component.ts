import { Component } from '@angular/core';
import { DialogService, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { DetallePersonaje } from 'src/app/helpers/types';
import { PersonajesService } from 'src/app/services/Personajes.service';
import { DetalleEpisodioComponent } from '../detalle-episodio/detalle-episodio.component';

@Component({
  selector: 'app-detalle-personaje',
  templateUrl: './detalle-personaje.component.html',
  styleUrls: ['./detalle-personaje.component.css']
})
export class DetallePersonajeComponent {

  //#region Properties

  personaje!: DetallePersonaje;

  isLoading = true;

  //#endregion

  //#region Constructor

  constructor(
    private personajeService: PersonajesService,
    private config: DynamicDialogConfig,
    private dialogService: DialogService
  ) {

    const { id } = this.config.data;

    this.#consultarDetalle(+id);
  }

  //#endregion

  //#region Methods

  #consultarDetalle(id: number) {

    this.isLoading = true;

    try {

      this.personajeService
        .getDetallePersonaje(id)
        .subscribe(obs => {

          this.personaje = obs;

          this.isLoading = false;
        });

    } catch (error) {

      this.isLoading = false;
    }
  }

  verDetalleEpisodio(id: number) {

    this.dialogService
      .open(DetalleEpisodioComponent, {
        data: {
          id
        },
        header: `Episode information`,
        width: '40%'
      });
  }

  //#endregion
}
