import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable, map } from 'rxjs';
import { DetalleEpisodio, Episodio } from '../helpers/types';

@Injectable({
  providedIn: 'root'
})
export class EpisodiosService {

  //#region Properties

  #queryGetEpisodio = gql`
    query getEpisodios($page: Int, $filter: String) {
      episodes(page: $page, filter: { name: $filter }) {
        info {
          count
        },
        results {
          id
          name
          episode
        }
      }
    }
  `;

  #queryGetDetalleEpisodio = gql`
    query getDetalleEpisodio($id: ID!) {
      episode(id: $id) {
        name
        episode
        air_date
        characters {
          image
          name
          id
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

  getEpisodios(page: number, filter: string): Observable<{ episodio: Episodio[], total: number }> {

    return this.apollo
      .watchQuery<any>({
        query: this.#queryGetEpisodio,
        variables: {
          page,
          filter
        }
      })
      .valueChanges
      .pipe(map(result => ({
        episodio: result.data.episodes.results,
        total: result.data.episodes.info.count
      })));
  }

  getDetalleEpidosio(id: number): Observable<DetalleEpisodio> {

    return this.apollo
      .watchQuery<any>({
        query: this.#queryGetDetalleEpisodio,
        variables: {
          id
        }
      })
      .valueChanges
      .pipe(map(result => result.data.episode));
  }

  //#endregion
}
