import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPersonajeComponent } from './card-personaje/card-personaje.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { BadgeModule } from 'primeng/badge';
import { CardMenuComponent } from './card-menu/card-menu.component';
import { DetallePersonajeComponent } from './detalle-personaje/detalle-personaje.component';
import { DialogService } from 'primeng/dynamicdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ImageModule } from 'primeng/image';
import { InputTextModule } from 'primeng/inputtext';
import { ChipModule } from 'primeng/chip';
import { SkeletonModule } from 'primeng/skeleton';

@NgModule({
  declarations: [
    CardPersonajeComponent,
    CardMenuComponent,
    DetallePersonajeComponent
  ],
  providers: [
    DialogService
  ],
  imports: [
    CommonModule,
    ButtonModule,
    CardModule,
    BadgeModule,
    BrowserAnimationsModule,
    ImageModule,
    InputTextModule,
    ChipModule,
    SkeletonModule
  ],
  exports: [
    CardPersonajeComponent,
    CardMenuComponent,
    DetallePersonajeComponent
  ]
})
export class ComponentsModule { }
