import { Component, Input } from '@angular/core';
import { Episodio, Lugar } from 'src/app/helpers/types';

@Component({
  selector: 'app-lugares-episodios',
  templateUrl: './lugares-episodios.component.html',
  styleUrls: ['./lugares-episodios.component.css']
})
export class LugaresEpisodiosComponent {

  //#region Properties

  @Input()
  data: Lugar[] | Episodio[] = [];

  @Input()
  title!: string;

  //#endregion
}
