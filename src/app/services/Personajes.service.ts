import { Injectable } from '@angular/core';
import { DetallePersonaje, Personaje } from '../helpers/types';
import { Apollo, gql } from 'apollo-angular';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  //#region Properties

  #queryGetPersonajes = gql`
    query GetPersonajes($page: Int!, $filter: String) {
      characters(page: $page, filter: { name: $filter }) {
        info {
          count
        }
        results {
          name,
          image,
          id,
          status
        }
      }
    }
  `;

  #queryGetDetalle = gql`
    query GetDetalle($id: ID!) {
      charactersByIds(ids: [$id]) {            
        image,
        name,
        status,
        species,
        type,
        gender,
        origin {
          name
        },
        episode {
          episode,
          id
        },
        created
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

  getPersonajes(page: number, filter: string): Observable<{ personajes: Personaje[], total: number }> {

    return this.apollo
      .watchQuery<any>({
        query: this.#queryGetPersonajes,
        variables: {
          page,
          filter
        }
      })
      .valueChanges
      .pipe(map(result => ({
        personajes: result.data.characters.results,
        total: result.data.characters.info.count
      })));
  }

  getDetallePersonaje(id: number): Observable<DetallePersonaje> {

    return this.apollo
      .watchQuery<any>({
        query: this.#queryGetDetalle,
        variables: {
          id
        }
      })
      .valueChanges
      .pipe(map(result => result.data.charactersByIds[0]));
  }

  //#endregion
}
