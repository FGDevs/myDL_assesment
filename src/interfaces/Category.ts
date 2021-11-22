import type { IBaseResponse } from '.'

export interface ICategory {
  id: string;
  title: string;
}

export interface ICategoryResponse extends IBaseResponse {
  content: ICategory[];
  totalItems: number;
}