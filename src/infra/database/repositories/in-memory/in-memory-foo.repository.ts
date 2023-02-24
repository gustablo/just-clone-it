import { Foo } from '../../../../domain/entities/foo.entity';
import { IFooRepository } from '../../../../domain/repositories/foo.repository';
import { Props } from '../../../../domain/shared/only-props';

export class InMemoryFooRepository implements IFooRepository {
    foos = new Array<Props<Foo>>;

    async insert(foo: Props<Foo>): Promise<Foo> {
        this.foos.push(foo);

        return Promise.resolve(new Foo(foo));
    }

}
