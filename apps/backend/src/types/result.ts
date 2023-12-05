import { Error } from './error';

export type Result<T> = {
    data?: T;
    error?: Error;
};
