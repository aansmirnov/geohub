import { Request, Response } from 'express';
import { CheckAuthCodeIn } from 'src/types';
import { checkAuthCodeService } from './check-auth-code.service';

export const checkAuthCodeController = async (
    request: Request<{}, {}, CheckAuthCodeIn>,
    response: Response,
) => {
    const { error, data } = await checkAuthCodeService(request.body);

    if (error) {
        return response.json(error);
    }

    return response.json(data);
};