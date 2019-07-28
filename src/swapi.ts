import { http } from './api';
import PaginatedData from './paginatedData';
import { Film, People, Planet, Species, Starship, Vehicle } from './types';

import { getResource, searchResource } from './utils/helpers';

export const Swapi = {
  films: {
    fetch: (id?: number) => getResource<Film>('films', id),
    search: (searchTerm: string) => searchResource<Film>('films', searchTerm),
  },
  people: {
    fetch: (id?: number) => getResource<People>('people', id),
    search: (searchTerm: string) => searchResource<People>('people', searchTerm),
  },
  planets: {
    fetch: (id?: number) => getResource<Planet>('planets', id),
    search: (searchTerm: string) => searchResource<Planet>('planets', searchTerm),
  },
  species: {
    fetch: (id?: number) => getResource<Species>('species', id),
    search: (searchTerm: string) => searchResource<Species>('species', searchTerm),
  },
  starships: {
    fetch: (id?: number) => getResource<Starship>('starships', id),
    search: (searchTerm: string) => searchResource<Starship>('starships', searchTerm),
  },
  vehicles: {
    fetch: (id?: number) => getResource<Vehicle>('vehicles', id),
    search: (searchTerm: string) => searchResource<Vehicle>('vehicles', searchTerm),
  },
};
