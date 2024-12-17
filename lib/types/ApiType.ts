// 這是我們中心固定的回傳格式，不要動他
export type Response<T> = {
  result: boolean;
  errorCode: string;
  message?: string;
  data?: T;
};

export interface ListData {
  id: number;
  name: string;
  writer: string;
  storeDate: string;
  classifications: string;
  shelves: string;
}

export interface bookInfo {
  name: string;
  writer: string;
  classification: number;
  shelves: number;
}

export interface Dropdown {
  shelves: MapData[];
  classifications: MapData[];
}

type MapData = {
  id: number;
  value: string;
}