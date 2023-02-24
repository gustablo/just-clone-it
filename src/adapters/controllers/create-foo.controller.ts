import { FooEmptyError } from '../../domain/errors/foo-empty.error';
import { Props } from '../../domain/shared/only-props';
import { CreateFooUseCase } from '../../usecases/create-foo.usecase';
import { IHttpController } from '../contracts/http/controller.contract';
import { IHttpRequest } from '../contracts/http/request.contract';
import { IHttpResponse } from '../contracts/http/response.contract';
import { CreateFooRequestDTO, CreateFooResponseDTO } from '../dtos/create-foo.dto';
import { badRequest, internalError, ok } from '../helpers/http.helper';

export class CreateFooController implements IHttpController {
    constructor(private createFoo: CreateFooUseCase) {}

    async handle(request: IHttpRequest<Props<CreateFooRequestDTO>>): Promise<IHttpResponse> {
        try {
            const bodyDto = new CreateFooRequestDTO().map(request.body);
            const result = await this.createFoo.exec(bodyDto);

            const response = new CreateFooResponseDTO().map(result);
            
            return ok(response);
        } catch(error) {
            if (error instanceof FooEmptyError) {
                return badRequest(error);
            }

            return internalError();
        }
    }

}
