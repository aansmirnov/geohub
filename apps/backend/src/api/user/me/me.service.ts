import { PrismaClient } from '@prisma/client';
import { AuthUserOut, Result } from 'packages';
import { verifyToken } from '../../../utils/verify-token';

const prisma = new PrismaClient();

export const meService = async (
    token: string,
): Promise<Result<AuthUserOut>> => {
    const { data, error } = verifyToken(token);

    if (!data || error) {
        return { error };
    }

    const { username, email } = data;

    const user = await prisma.user.findFirst({
        where: {
            username,
            email,
        },
    });

    if (!user) {
        return {
            error: {
                code: 400,
                message: 'User not found',
                path: 'user',
            },
        };
    }

    return {
        data: {
            token,
            username: user.username,
            email: user.email,
            id: user.id,
        },
    };
};
