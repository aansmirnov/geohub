import { Result, ResetPasswordIn } from 'src/types';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const resetPasswordService = async (
    body: ResetPasswordIn,
): Promise<Result<boolean>> => {
    const { email } = body;

    const user = await prisma.user.findFirst({
        where: {
            email,
        },
    });

    if (!user) {
        return {
            error: {
                code: 400,
                message: 'User not found',
                path: 'email',
            },
        };
    }

    const authCode = Math.floor(1000 + Math.random() * 9000);
    await prisma.user.update({
        where: {
            email,
        },
        data: { authCode },
    });

    return { data: true };
};
