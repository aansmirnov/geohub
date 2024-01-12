import { PrismaClient } from '@prisma/client';
import { sign } from 'jsonwebtoken';
import { CheckAuthCodeIn, Result, Meta } from 'packages';

const prisma = new PrismaClient();

export const checkAuthCodeService = async (
    body: CheckAuthCodeIn,
): Promise<Result<Meta>> => {
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

    const token = sign(
        `${user.username} ${email}`,
        process.env.JWT_SECRET || '',
    );

    return { data: { token } };
};
