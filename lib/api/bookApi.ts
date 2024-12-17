import { bookInfo, Response } from '../types/ApiType';
import API from './api';

const bookApi = {
  getBookList: (): Promise<Response<any>> => API.get('/book'),

  addBook: (data: bookInfo): Promise<Response<any>> => API.post('/book', data),

  getDropdown: (): Promise<Response<any>> => API.get('/dropdown'),
};

export default bookApi;
