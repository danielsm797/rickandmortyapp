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
import { LugaresEpisodiosComponent } from './lugares-episodios/lugares-episodios.component';
import { TableModule } from 'primeng/table';
import { FormsModule } from '@angular/forms';
import { PaginatorModule } from 'primeng/paginator';
import { DetalleLugarComponent } from './detalle-lugar/detalle-lugar.component';
import { DetalleEpisodioComponent } from './detalle-episodio/detalle-episodio.component';
import { TooltipModule } from 'primeng/tooltip';
import { ResidentsComponent } from './residents/residents.component';
import { SkeletonDetalleComponent } from './skeleton-detalle/skeleton-detalle.component';

@NgModule({
  declarations: [
    CardPersonajeComponent,
    CardMenuComponent,
    DetallePersonajeComponent,
    LugaresEpisodiosComponent,
    DetalleLugarComponent,
    DetalleEpisodioComponent,
    ResidentsComponent,
    SkeletonDetalleComponent
  ],
  providers: [
    DialogService
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    CardModule,
    BadgeModule,
    BrowserAnimationsModule,
    ImageModule,
    InputTextModule,
    ChipModule,
    SkeletonModule,
    TableModule,
    PaginatorModule,
    TooltipModule
  ],
  exports: [
    CardPersonajeComponent,
    CardMenuComponent,
    DetallePersonajeComponent,
    LugaresEpisodiosComponent
  ]
})
export class ComponentsModule { }
