import { Result } from 'src/types';
import { IncomingHttpHeaders } from 'http';

const tokenError = {
    error: {
        message: 'No authorization token was found',
        code: 403,
        path: 'token',
    },
};

export const getTokenFromHeaders = (headers: IncomingHttpHeaders): Result<string> => {
    const token = headers['geohub-token'] as string | undefined;

    if (!token) {
        return tokenError;
    }

    const geohubToken = token.split(' ')[1];

    if (!geohubToken) {
        return tokenError;
    }

    return { data: geohubToken };
};
