import { BaseEntity } from './base.entity';

export class Foo extends BaseEntity<Foo> {
    readonly id?: number; 
    hello: string;
    world: string;

    show() {
        return `${this.hello} ${this.world}!`;
    }
}
