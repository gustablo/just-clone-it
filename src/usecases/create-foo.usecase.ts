import { Foo } from '../domain/entities/foo.entity';
import { FooEmptyError } from '../domain/errors/foo-empty.error';
import { IFooRepository } from '../domain/repositories/foo.repository';

export class CreateFooUseCase {

    constructor(
        private fooRepository: IFooRepository
    ) { }

    async exec(foo: Foo): Promise<Foo> {
        if (!foo.hello || !foo.world) {
            throw new FooEmptyError();
        }

        const created = await this.fooRepository.insert(foo);

        created.show();

        return created;
    }
}
