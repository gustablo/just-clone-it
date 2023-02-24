import { CreateFooController } from '../../adapters/controllers/create-foo.controller';
import { CreateFooUseCase } from '../../usecases/create-foo.usecase';
import { MysqlFooRepository } from '../database/repositories/mysql/mysql-foo.repository';

const repository = new MysqlFooRepository();
const usecase = new CreateFooUseCase(repository);

const createFooFactory = new CreateFooController(usecase);

export { createFooFactory };
