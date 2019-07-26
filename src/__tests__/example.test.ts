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

  test('fetch people', done => {
    Swapi.people.fetch().then(() => {
      expect(spy).toHaveBeenCalledWith('people');
      done();
    });
  });

  test('fetch people by id', (done) => {
    Swapi.people.fetch(1).then((data) => {
      expect(spy).toHaveBeenCalledWith('people/1');
      done();
    })
  })
});
