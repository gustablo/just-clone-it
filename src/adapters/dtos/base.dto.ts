import { Props } from '../../domain/shared/only-props';

export interface BaseRequestDTO<T, This> {    
    map(request: Props<This>): T;
}

export interface BaseResponseDTO<That, This> {
    map(that: That): This;
}
