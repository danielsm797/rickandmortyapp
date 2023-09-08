import { Component } from '@angular/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { DetallePersonaje } from 'src/app/helpers/types';
import { PersonajesService } from 'src/app/services/Personajes.service';

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
    public ref: DynamicDialogRef,
    public config: DynamicDialogConfig
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

  //#endregion
}
