import { Foo } from '../../../../domain/entities/foo.entity';
import { IFooRepository } from '../../../../domain/repositories/foo.repository';
import { Props } from '../../../../domain/shared/only-props';
import { prisma } from '../../configs/prisma';
import { FooMapper } from '../mappers/foo.mapper';

export class MysqlFooRepository implements IFooRepository {
    
    async insert(foo: Props<Foo>): Promise<Foo> {
        const created = await prisma.foo.create({
            data: FooMapper.toDatabase(foo)
        });

        return FooMapper.fromDatabase(created);
    }

}
