import { Props } from '../shared/only-props';

export abstract class BaseEntity<T> {

    constructor(props?: Props<T>) {
        if (props) {
            Object.assign(this, props);
        }        
    }

}
