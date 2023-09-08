import { Component } from '@angular/core';
import { TypeView } from 'src/app/helpers/enums';
import { Episodio } from 'src/app/helpers/types';
import { EpisodiosService } from 'src/app/services/episodios.service';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.css']
})
export class EpisodiosComponent {

  //#region Properties

  episodios: Episodio[] = [];

  isLoading = true;

  total = 0;

  filter = '';

  page = 1;

  typeView = TypeView.EPISODIO;

  //#endregion

  //#region Constructors

  constructor(
    private episodiosService: EpisodiosService
  ) {

    this.consultarEpisodios();
  }

  //#endregion

  //#region Methods

  consultarEpisodios() {

    this.isLoading = true;

    this.episodios = [];

    try {

      this.episodiosService
        .getEpisodios(this.page, this.filter)
        .subscribe(obs => {

          this.episodios = obs.episodio;

          this.total = obs.total;

          this.isLoading = false;
        });

    } catch (error) {

      this.isLoading = false;
    }
  }

  //#endregion
}
