import { Request, Response } from 'express';
import { loginService } from './login.service';
import { LoginUserIn } from 'packages';

export const loginController = async (
    request: Request<{}, {}, LoginUserIn>,
    response: Response,
) => {
    const { error, data } = await loginService(request.body);

    if (error) {
        return response.status(error.code).json(error);
    }

    return response.json(data);
};
