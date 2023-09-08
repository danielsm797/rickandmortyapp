import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/helpers/types';

@Component({
  selector: 'app-card-menu',
  templateUrl: './card-menu.component.html',
  styleUrls: ['./card-menu.component.css']
})
export class CardMenuComponent {

  //#region Properties

  @Input()
  menu!: Menu;

  @Output()
  outMenuSelected: EventEmitter<void> = new EventEmitter();

  //#endregion

  //#region Constructors

  constructor() { }

  //#endregion

  //#region Methods

  goTo() {

    this.outMenuSelected.emit();
  }

  //#endregion
}
