import { Component, Input } from '@angular/core';
import { Image } from 'src/app/helpers/types';

@Component({
  selector: 'app-residents',
  templateUrl: './residents.component.html',
  styleUrls: ['./residents.component.css']
})
export class ResidentsComponent {

  //#region Properties

  @Input()
  residents: Image[] = [];

  //#endregion
}
