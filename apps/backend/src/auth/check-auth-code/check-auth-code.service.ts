import { PrismaClient } from '@prisma/client';
import { CheckAuthCodeIn, Result } from 'src/types';

const prisma = new PrismaClient();

export const checkAuthCodeService = async (
    body: CheckAuthCodeIn,
): Promise<Result<boolean>> => {
    const { email, authCode } = body;

    const user = await prisma.user.findFirst({ where: { email } });

    if (!user) {
        return {
            error: {
                code: 400,
                message: 'User not found',
                path: 'email',
            },
        };
    }

    if (user?.authCode !== authCode) {
        return {
            error: {
                code: 401,
                message: 'Incorrect auth code',
                path: 'authcode',
            },
        };
    }

    await prisma.user.update({
        where: { email },
        data: {
            authCode: null,
        },
    });

    return { data: true };
};
