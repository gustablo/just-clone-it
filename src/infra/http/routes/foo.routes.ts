import { createFooFactory } from '../../factories/create-foo.factory';
import { adaptExpressRoute, routeMapper } from '../express-route-adapter';

export default (router: typeof routeMapper): void => {
    router.post('/foo', adaptExpressRoute(createFooFactory));
}
