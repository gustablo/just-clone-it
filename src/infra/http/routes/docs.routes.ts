import { setupDocs } from '../../../../docs';
import { routeMapper } from '../express-route-adapter';

export default (router: typeof routeMapper): void => {
    router.use('/docs', ...setupDocs);
};
