import { IHttpResponse } from '../contracts/http/response.contract';

export const created = (data: unknown): IHttpResponse => ({
  statusCode: 201,
  data,
});

export const ok = (data: unknown): IHttpResponse => ({
  statusCode: 200,
  data,
});

export const badRequest = (error: Error): IHttpResponse => ({
  statusCode: 400,
  data: { error: error.message },
});

export const internalError = (): IHttpResponse => ({
  statusCode: 500,
  data: { error: 'Unexpected Error' },
});
