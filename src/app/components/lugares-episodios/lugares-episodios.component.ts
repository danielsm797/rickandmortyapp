import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnDestroy, Output, ViewChild } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { Subscription, debounceTime, fromEvent } from 'rxjs';
import { TypeView } from 'src/app/helpers/enums';
import { Episodio, Lugar } from 'src/app/helpers/types';
import { DetalleLugarComponent } from '../detalle-lugar/detalle-lugar.component';
import { DetalleEpisodioComponent } from '../detalle-episodio/detalle-episodio.component';

@Component({
  selector: 'app-lugares-episodios',
  templateUrl: './lugares-episodios.component.html',
  styleUrls: ['./lugares-episodios.component.css']
})
export class LugaresEpisodiosComponent implements OnDestroy, AfterViewInit {

  //#region Properties

  @ViewChild('txtFilter')
  txtFilter!: ElementRef;

  @Output()
  filterChange: EventEmitter<string> = new EventEmitter();

  @Output()
  pageChange: EventEmitter<number> = new EventEmitter();

  @Output()
  outLoadData: EventEmitter<void> = new EventEmitter();

  @Input()
  data: Lugar[] | Episodio[] = [];

  @Input()
  title!: string;

  @Input()
  total = 0;

  @Input()
  typeView!: TypeView;

  _currentFilter = '';

  @Input()
  set filter(value: string) {
    this._currentFilter = value;
  };

  get filter(): string {
    return this._currentFilter;
  };

  _currentPage = 1;

  @Input()
  set page(value: number) {
    this._currentPage = value;
  };

  get page(): number {
    return this._currentPage;
  };

  #subs: Subscription[] = [];

  rows = 20;

  @Input()
  isLoading = true;

  //#endregion

  //#region Constructors

  constructor(
    private dialogService: DialogService
  ) { }

  ngAfterViewInit() {

    this.#initEvents();
  }

  ngOnDestroy() {

    this.#subs
      .forEach(x => x.unsubscribe());
  }

  //#endregion

  //#region Methods

  #initEvents() {

    this.#subs
      .push(
        fromEvent(this.txtFilter.nativeElement, 'keyup')
          .pipe(debounceTime(500))
          .subscribe(() => {

            this.filterChange
              .next(this.txtFilter.nativeElement.value);

            this.pageChange
              .next(1);

            this.outLoadData.emit()
          })
      );
  }

  paginatorChange(event: any) {

    this.pageChange
      .next(event.page + 1);

    this.outLoadData.emit()
  }

  verDetalle(data: Lugar | Episodio) {

    const component = this.typeView === TypeView.LUGAR ?
      DetalleLugarComponent :
      DetalleEpisodioComponent;

    const header = this.typeView === TypeView.LUGAR ?
      'Locations information' :
      'Epidose information';

    this.dialogService
      .open(component, {
        data: {
          id: data.id
        },
        header,
        width: '50%'
      });
  }

  //#endregion
}
