import * as api from '../api';
import { Swapi } from '../swapi';
import { films } from './data';

let spy: jest.SpyInstance;

describe('Swapi Api', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    spy = jest.spyOn(window, 'fetch');
    spy.mockResolvedValue({ data: 'some data' });
  });
  test('getResources', done => {
    Swapi.people.fetch().then((data) => {
      expect(spy).toHaveBeenCalled();
      done();
    });
  });

  test('getFilms', done => {
    spy.mockResolvedValue(films);
    Swapi.films.fetch().then((data) => {
      expect(spy).toHaveBeenCalledWith('films');
      expect(data.next).toBe(undefined);
      done();
    });
  });

  test('fetch people', done => {
    Swapi.people.fetch().then((data) => {
      expect(spy).toHaveBeenCalledWith('people');
      done();
    });
  });

  test('fetch people by id', done => {
    Swapi.people.fetch(1).then((data) => {
      expect(spy).toHaveBeenCalledWith('people/1');
      expect(data.currentPage).toBe(1);
      done();
    });
  });
});
