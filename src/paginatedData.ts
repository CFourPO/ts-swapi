import { http } from './api';
import { PaginatedResponse } from './types/PaginatedResponse';
import { isTSUndefinedKeyword } from '@babel/types';

export default class PaginatedData<T> {
  public next: string | null;
  public previous: string | null;
  public count: number | null;
  public results: T[];
  private pageNumber: number;

  constructor({ next, previous, count, results }: PaginatedResponse<T>) {
    this.next = next;
    this.previous = previous;
    this.count = count;
    this.results = results;
    this.pageNumber = this.getCurrentPage();
  }

  public async getNext(): Promise<PaginatedData<T> | undefined> {
    if (!this.next) {
      return undefined;
    } else {
      try {
        const response = await http<PaginatedData<T>>(this.next, { prefixBaseUrl: false });
        const data: PaginatedData<T> = await response.data;
        return new PaginatedData(data);
      } catch (error) {
        throw error;
      }
    }
  }

  public async getPrevious(): Promise<PaginatedData<T>> {
    if (!this.previous) {
      return this;
    } else {
      try {
        const response = await http<PaginatedData<T>>(this.previous);
        const data: PaginatedData<T> = await response.data;
        return new PaginatedData(data);
      } catch (error) {
        throw error;
      }
    }
  }

  private getCurrentPage(): number {
    let page: number;
    if (!this.previous) {
      page = 1;
    } else {
      const matches = this.previous.match(/\?page=([0-9]+)/); // adds 1 since we search previous
      page = matches && matches.length > 0 ? +matches[1] + 1 : 1;
    }

    return page;
  }

  get currentPage(): number {
    return this.pageNumber;
  }

  set currentPage(value: number) {
    // if (value <= 0) {
    //   throw new Error('currentPage must be a positive integer greater than 0');
    // } else if ()
    // this.pageNumber = value;
    // TODO: Implement later
  }
}
