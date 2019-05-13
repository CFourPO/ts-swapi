import * as api from '../api';
import { IPeople, PaginatedData, swapi } from '../index';

let spy: jest.SpyInstance;

describe('Swapi Api', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    spy = jest.spyOn(api, 'http');
    spy.mockResolvedValue({ data: 'some data' });
  });
  test('getResources', done => {
    swapi.getResources().then(data => {
      expect(spy).toHaveBeenCalled();
      done();
    });
  });

  test('getFilms', done => {
    swapi.getFilms().then(data => {
      expect(spy).toHaveBeenCalledWith('films');
      done();
    });
  });

  test('searchPeople', done => {
    swapi.searchPeople('some name').then(data => {
      expect(spy).toHaveBeenCalledWith('people?search=some name');
      done();
    });
  });
});
