import { IFilm, IResourceSchema } from '../types';
import { http } from './api';

const getResources = async (): Promise<IResourceSchema> => {
  try {
    const response = await http();
    const data = await response.data;
    return data as IResourceSchema;
  } catch (error) {
    throw error;
  }
};

const getFilms = async (): Promise<IFilm[]> => {
  try {
    const response = await http<IFilm[]>('films');
    const data = await response.data;
    return data;
  } catch (error) {
    throw error;
  }
};

const getFilmById = async (id: number): Promise<IFilm> => {
  try {
    const response = await http<IFilm>(`films/${id}`);
    const data = await response.data;
    return data;
  } catch (error) {
    throw error;
  }
};

const swapi =  {
  getFilmById,
  getFilms,
  getResources,
};


export default swapi;