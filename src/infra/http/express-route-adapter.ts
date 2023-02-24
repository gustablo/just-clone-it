import { Request, Response, Router, Express } from 'express';
import { readdirSync } from 'fs';

import { IHttpController } from '../../adapters/contracts/http/controller.contract';

export const adaptExpressRoute = (controller: IHttpController) => {
  return async (req: Request, res: Response): Promise<Response> => {
    const httpResponse = await controller.handle({
      body: req.body,
      params: req.params,
      query: req.query,
    });

    return res.status(httpResponse.statusCode).json(httpResponse.data);
  };
};

export const routeMapper = Router();

export const setupRoutes = (app: Express): void => {
  app.use('/api', routeMapper);

  readdirSync(`${__dirname}/routes`).map(async fileName => {
    (await import(`./routes/${fileName}`)).default(routeMapper);
  });

};
