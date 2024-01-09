import { Request, Response } from 'express';
import { loginService } from './login.service';
import { LoginUserIn } from 'src/types';

export const loginController = async (
    request: Request<{}, {}, LoginUserIn>,
    response: Response,
) => {
    const { error, data } = await loginService(request.body);

    if (error) {
        return response.json(error);
    }

    return response.json(data);
};
