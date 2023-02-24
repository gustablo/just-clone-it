import { IHttpRequest } from './request.contract';
import { IHttpResponse } from './response.contract';

export interface IHttpController {
  handle(request: IHttpRequest): Promise<IHttpResponse>;
}
