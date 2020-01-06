import { http } from '../api';

import PaginatedData from '../paginatedData';

export const getResource = async <T>(resource: string, id?: number): Promise<PaginatedData<T>> => {
  const queryParams = id ? `/${id}` : '';
  try {
    const response = await http<PaginatedData<T>>(resource + queryParams);
    return await new PaginatedData<T>(response.data);
  } catch (error) {
    throw error;
  }
};

export const searchResource = async <T>(resource: string, searchTerm: string): Promise<PaginatedData<T>> => {
  try {
    const response = await http<PaginatedData<T>>(`${resource}?search=${searchTerm}`);
    return await new PaginatedData<T>(response.data);
  } catch (error) {
    throw error;
  }
};
