import { Request, Response } from 'express';
import { registerSerive } from './register.service';
import { RegisterUserIn } from 'src/types';

export const registerController = async (
    request: Request<{}, {}, RegisterUserIn>,
    response: Response,
) => {
    const { error, data } = await registerSerive(request.body);

    if (error) {
        return response.json(error);
    }

    return response.json(data);
};
