import { ErrorPath } from './error-path';

export type Error = {
    code: number;
    message: string;
    path: ErrorPath;
};
