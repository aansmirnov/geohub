import { Request, Response } from 'express';
import { CheckAuthCodeIn } from 'packages';
import { checkAuthCodeService } from './check-auth-code.service';

export const checkAuthCodeController = async (
    request: Request<{}, {}, CheckAuthCodeIn>,
    response: Response,
) => {
    const { error, data } = await checkAuthCodeService(request.body);

    if (error) {
        return response.status(error.code).json(error);
    }

    return response.json(data);
};
