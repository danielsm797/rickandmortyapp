import { Component, OnInit } from '@angular/core';
import { TypeView } from 'src/app/helpers/enums';
import { Lugar } from 'src/app/helpers/types';
import { LugaresService } from 'src/app/services/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  styleUrls: ['./lugares.component.css']
})
export class LugaresComponent implements OnInit {

  //#region Properties

  lugares: Lugar[] = [];

  isLoading = true;

  page = 1;

  filter = '';

  total = 0;

  typeView = TypeView.LUGAR;

  //#endregion

  //#region Constructors

  constructor(
    private lugaresService: LugaresService
  ) { }

  ngOnInit() {

    this.getLugares();
  }

  //#endregion

  //#region Methods

  getLugares() {

    this.isLoading = true;

    this.lugares = [];

    try {

      this.lugaresService
        .getLugares(this.page, this.filter)
        .subscribe(obs => {

          this.lugares = obs.lugares;
          this.total = obs.total;

          this.isLoading = false;
        });

    } catch (error) {

      this.isLoading = false;
    }
  }

  //#endregion
}
