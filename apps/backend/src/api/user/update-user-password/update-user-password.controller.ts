import { Request, Response } from 'express';
import { UpdateUserPasswordIn } from 'packages';
import { updateUserPasswordService } from './update-user-password.service';

export const updateUserPasswordController = async (
    request: Request<{}, {}, UpdateUserPasswordIn>,
    response: Response,
) => {
    const { data, error } = await updateUserPasswordService(request.body);

    if (error) {
        return response.status(error.code).json(error);
    }

    return response.json(data);
};
