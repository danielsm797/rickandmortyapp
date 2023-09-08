export type Menu = {
  nombre: string;
  icono: string;
  activo: boolean;
  path: string;
};

export type Filter = {
  name: string,
  code: string
};

export type Image = {
  image: string;
};

// Personajes

export type Personaje = {
  id: string;
  name: string;
  image: string;
  status: string;
};

export type DetallePersonaje = {
  image: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: { name: string },
  episode: { episode: string }[],
  created: string
};

// Lugares

export type Lugar = {
  id: string;
  name: string;
  type: string;
};

export type DetalleLugar = {
  name: string;
  type: string;
  dimension: string;
  residents: Image[];
};

// Episodios

export type Episodio = {
  id: string;
  name: string;
  episode: string;
};

export type DetalleEpisodio = {
  name: string;
  episode: string;
  air_date: string;
  characters: Image[];
};