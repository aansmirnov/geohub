import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';
import { verify } from 'jsonwebtoken';
import { AuthUserOut, Result, UpdateUserPasswordIn } from 'src/types';

const prisma = new PrismaClient();

export const updateUserPasswordService = async (
    body: UpdateUserPasswordIn,
): Promise<Result<AuthUserOut>> => {
    const { token, newPassword } = body;
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

    if (!username || !email) {
        return {
            error: {
                code: 500,
                message: 'Something went wrong',
                path: 'token',
            },
        };
    }

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
