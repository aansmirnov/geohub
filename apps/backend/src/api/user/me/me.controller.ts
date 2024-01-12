import { Request, Response } from 'express';
import { Meta } from 'packages';
import { getTokenFromHeaders } from '../../../utils/get-token-from-headers';
import { meService } from './me.service';

export const meController = async (
    request: Request<{}, Meta>,
    response: Response,
) => {
    const { data: token, error } = getTokenFromHeaders(request.headers);

    if (error || !token) {
        const code = error?.code || 403;

        return response.status(code).json(error);
    }

    const { error: serviceError, data } = await meService(token);

    if (serviceError) {
        return response.status(serviceError.code).json(serviceError);
    }

    return response.json(data);
};
