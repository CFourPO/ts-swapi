import { http } from './api';
import PaginatedData from './paginatedData';
import { IFilm } from './types/IFilm';
import { IPeople } from './types/IPeople';
import { IResourceSchema } from './types/IResourceSchema';

const getResources = async (): Promise<IResourceSchema> => {
  try {
    const response = await http();
    const data = await response.data;
    return data as IResourceSchema;
  } catch (error) {
    throw error;
  }
};

// Films

const getFilms = async (): Promise<IFilm[]> => {
  try {
    const response = await http<IFilm[]>('films');
    return await response.data;
  } catch (error) {
    throw error;
  }
};

const getFilmById = async (id: number): Promise<IFilm> => {
  try {
    const response = await http<IFilm>(`films/${id}`);
    return await response.data;
  } catch (error) {
    throw error;
  }
};

const searchFilm = async (title: string): Promise<PaginatedData<IFilm>> => {
  try {
    const response = await http<PaginatedData<IFilm>>(`film?search=${title}`);
    return await new PaginatedData<IFilm>(response.data);
  } catch (error) {
    throw error;
  }
};

// People

const getPeople = async (): Promise<PaginatedData<IPeople>> => {
  try {
    const response = await http<PaginatedData<IPeople>>(`people`);
    return await new PaginatedData<IPeople>(response.data);
  } catch (error) {
    throw error;
  }
};

const getPeopleById = async (id: number): Promise<IPeople> => {
  try {
    const response = await http<IPeople>(`people/${id}`);
    return await response.data;
  } catch (error) {
    throw error;
  }
};

const searchPeople = async (name: string): Promise<PaginatedData<IPeople>> => {
  try {
    const response = await http<PaginatedData<IPeople>>(`people?search=${name}`);
    return await new PaginatedData<IPeople>(response.data);
  } catch (error) {
    throw error;
  }
};

export const swapi = {
  getFilmById,
  getFilms,
  getPeople,
  getPeopleById,
  getResources,
  searchFilm,
  searchPeople,
};
