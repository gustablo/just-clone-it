import { Foo } from '../entities/foo.entity';
import { Props } from '../shared/only-props';

export interface IFooRepository {
    insert(foo: Props<Foo>): Promise<Foo>;
}
