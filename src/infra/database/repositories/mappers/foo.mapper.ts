import { Foo } from "../../../../domain/entities/foo.entity";
import { Optional } from "../../../../domain/shared/make-optional";
import { Props } from "../../../../domain/shared/only-props";
import { PrismaFoo } from "../../configs/database-types";

export namespace FooMapper {
    export const toDatabase = (foo: Props<Foo>): Optional<PrismaFoo, 'id'> => {
        return {
            id: foo.id,
            hello: foo.hello,
            mundo: foo.world,
        }
    };

    export const fromDatabase = (foo: PrismaFoo): Foo => {
        return new Foo({
            id: foo.id,
            hello: foo.hello,
            world: foo.mundo,
        });
    };
}
