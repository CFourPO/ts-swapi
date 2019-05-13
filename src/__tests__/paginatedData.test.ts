import { IPeople } from '..';
import PaginatedData from '../paginatedData';

const lukeSkywalker: IPeople = {
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
  homeworld: 'https://swapi.co/api/planets/1/',
  films: [
    'https://swapi.co/api/films/2/',
    'https://swapi.co/api/films/6/',
    'https://swapi.co/api/films/3/',
    'https://swapi.co/api/films/1/',
    'https://swapi.co/api/films/7/',
  ],
  species: ['https://swapi.co/api/species/1/'],
  vehicles: ['https://swapi.co/api/vehicles/14/', 'https://swapi.co/api/vehicles/30/'],
  starships: ['https://swapi.co/api/starships/12/', 'https://swapi.co/api/starships/22/'],
  created: '2014-12-09T13:50:51.644000Z',
  edited: '2014-12-20T21:17:56.891000Z',
  url: 'https://swapi.co/api/people/1/',
};
const c3po: IPeople = {
  name: 'C-3PO',
  height: '167',
  mass: '75',
  hair_color: 'n/a',
  skin_color: 'gold',
  eye_color: 'yellow',
  birth_year: '112BBY',
  gender: 'n/a',
  homeworld: 'https://swapi.co/api/planets/1/',
  films: [
    'https://swapi.co/api/films/2/',
    'https://swapi.co/api/films/5/',
    'https://swapi.co/api/films/4/',
    'https://swapi.co/api/films/6/',
    'https://swapi.co/api/films/3/',
    'https://swapi.co/api/films/1/',
  ],
  species: ['https://swapi.co/api/species/2/'],
  vehicles: [],
  starships: [],
  created: '2014-12-10T15:10:51.357000Z',
  edited: '2014-12-20T21:17:50.309000Z',
  url: 'https://swapi.co/api/people/2/',
};
const resultPages: IPeople[][] = [[lukeSkywalker], [c3po]];

describe('PaginatedData', () => {
  test('constructor', () => {
    const paginatedData = new PaginatedData<IPeople>({
      count: 1,
      next: 'some url',
      previous: 'some url',
      results: resultPages[0],
    });
    expect(paginatedData.getNext()).toBeTruthy();
  });

  describe('pageNumber', () => {
    test('should be set to 1 when previous is null', () => {
      const paginatedData = new PaginatedData<IPeople>({
        count: 1,
        next: null,
        previous: null,
        results: resultPages[0],
      });
      expect(paginatedData.currentPage).toBe(1);
    });

    test('should be set to 1 more than previous when previous is not null', () => {
      const paginatedData = new PaginatedData<IPeople>({
        count: 1,
        next: null,
        previous: 'https://swapi.co/people?page=3',
        results: resultPages[0],
      });
      expect(paginatedData.currentPage).toBe(4);
    });
  });
});