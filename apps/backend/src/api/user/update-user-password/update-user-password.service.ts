import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';
import { AuthUserOut, Result, UpdateUserPasswordIn } from 'packages';
import { verifyToken } from '../../../utils/verify-token';

const prisma = new PrismaClient();

export const updateUserPasswordService = async (
    body: UpdateUserPasswordIn,
): Promise<Result<AuthUserOut>> => {
    const { token, newPassword } = body;
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

    const hashedPassword = await hash(newPassword, 10);
    const updatedUser = await prisma.user.update({
        where: {
            username,
            email,
        },
        data: {
            password: hashedPassword,
        },
    });

    return {
        data: {
            email: updatedUser.email,
            username: updatedUser.username,
            id: updatedUser.id,
            token,
        },
    };
};
