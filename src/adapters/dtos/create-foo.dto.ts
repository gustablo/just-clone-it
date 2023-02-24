import { Foo } from '../../domain/entities/foo.entity';
import { Props } from '../../domain/shared/only-props';
import { BaseRequestDTO, BaseResponseDTO } from './base.dto';

export class CreateFooRequestDTO implements BaseRequestDTO<Foo, CreateFooRequestDTO> {
    ola: string;
    mundo: string;

    map(request: Props<CreateFooRequestDTO>): Foo {
        const foo = new Foo();
        foo.hello = request.ola;
        foo.world = request.mundo;

        return foo;
    }
}

export class CreateFooResponseDTO implements BaseResponseDTO<Foo, CreateFooResponseDTO> {
    habla: string;
    mundito: string;

    map(foo: Foo): CreateFooResponseDTO {
        this.habla = foo.hello;
        this.mundito = foo.world;

        return this;
    }
}
