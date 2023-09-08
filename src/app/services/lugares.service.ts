import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { DetalleLugar, Lugar } from '../helpers/types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LugaresService {

  //#region Properties

  #queryGetLugares = gql`
    query getLocations($page: Int, $filter: String){
      locations(page: $page, filter: { name: $filter }) {
        info {
          count
        },
        results {
          id
          name
          type
        }
      }
    }
  `;

  #queryGetDetalleLugar = gql`
    query getDetalleLugar($id: ID!) {
      location(id: $id){
        name,
        type,
        dimension
        residents {
          image
        }
      }
    }
  `;

  //#endregion

  //#region Constructors

  constructor(
    private apollo: Apollo
  ) { }

  //#endregion

  //#region Methods

  getLugares(page: number, filter: string): Observable<{ lugares: Lugar[], total: number }> {

    return this.apollo
      .watchQuery<any>({
        query: this.#queryGetLugares,
        variables: {
          page,
          filter
        }
      })
      .valueChanges
      .pipe(map(result => ({
        lugares: result.data.locations.results,
        total: result.data.locations.info.count
      })));
  }

  getDetalleLugar(id: number): Observable<DetalleLugar> {

    return this.apollo
      .watchQuery<any>({
        query: this.#queryGetDetalleLugar,
        variables: {
          id
        }
      })
      .valueChanges
      .pipe(map(result => result.data.location));
  }

  //#endregion
}
