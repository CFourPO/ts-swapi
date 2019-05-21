import * as api from '../api';
import {Swapi} from '../swapi';

let spy: jest.SpyInstance;

describe('Swapi Api', () => {
  beforeEach(() => {
    jest.resetAllMocks();
    spy = jest.spyOn(api, 'http');
    spy.mockResolvedValue({ data: 'some data' });
  });
  test('getResources', done => {
    Swapi.people.fetch().then(() => {
      expect(spy).toHaveBeenCalled();
      done();
    });
  });

  test('getFilms', done => {
    Swapi.films.fetch().then(() => {
      expect(spy).toHaveBeenCalledWith('films');
      done();
    });
  });

  test('searchPeople', done => {
    Swapi.people.fetch().then(() => {
      expect(spy).toHaveBeenCalledWith('people?search=some name');
      done();
    });
  });

  test('Swapi', (done) => {
    Swapi.people.fetch(1).then((data) => {
      expect(data).toBe('some data');
      done();
    })
  })
});
