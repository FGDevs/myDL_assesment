import type { IBaseResponse } from '.'

export interface IContent {
  id: string;
  title: string;
  short_description: string;
  description: string;
  image: string;
  created_at: string;
  created_by?: string | null;
  category: string;
}

export interface IContentMeta {
  page: string;
  size: string;
  show: number;
  show_from: number;
  show_to: number;
  totalPage: number;
  totaldata: number;
}

export interface IContentResponse extends IBaseResponse {
  content: IContent[];
  meta: IContentMeta;
}