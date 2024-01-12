import { verify } from 'jsonwebtoken';
import { Result } from 'packages';

type VerifyTokenReturnType = {
    username: string;
    email: string;
};

export const verifyToken = (token: string): Result<VerifyTokenReturnType> => {
    let verifiedToken;

    try {
        verifiedToken = verify(token, process.env.JWT_SECRET || '');
    } catch (e) {
        return {
            error: {
                code: 401,
                message: 'Cannot verify token',
                path: 'token',
            },
        };
    }

    const [username, email] = verifiedToken!.split(' ');

    return {
        data: {
            username,
            email,
        },
    };
};
