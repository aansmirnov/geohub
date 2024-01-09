import { Request, Response } from 'express';
import { ResetPasswordIn } from 'src/types';
import { resetPasswordService } from './reset-password.service';

export const resetPasswordController = async (
    request: Request<{}, {}, ResetPasswordIn>,
    response: Response,
) => {
    const { error, data } = await resetPasswordService(request.body);

    if (error) {
        return response.json(error);
    }

    return response.json(data);
};
