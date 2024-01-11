import { Request, Response } from 'express';
import { registerService } from './register.service';
import { RegisterUserIn } from 'src/types';

export const registerController = async (
    request: Request<{}, {}, RegisterUserIn>,
    response: Response,
) => {
    const { error, data } = await registerService(request.body);

    if (error) {
        return response.status(error.code).json(error);
    }

    return response.json(data);
};
