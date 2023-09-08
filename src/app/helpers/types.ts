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