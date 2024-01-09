import { LoginUserIn, AuthUserOut, Result } from 'src/types';
import { PrismaClient } from '@prisma/client';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

const prisma = new PrismaClient();

export const loginService = async (
    body: LoginUserIn,
): Promise<Result<AuthUserOut>> => {
    const { username, email, password } = body;

    const user = await prisma.user.findFirst({
        where: {
            OR: [
                {
                    username,
                },
                {
                    email,
                },
            ],
        },
    });

    if (!user) {
        return {
            error: {
                code: 400,
                message: 'User not found',
                path: 'username',
            },
        };
    }

    const isPasswordEqual = await compare(password, user.password);

    if (!isPasswordEqual) {
        return {
            error: {
                code: 401,
                message: 'Incorrect password',
                path: 'password',
            },
        };
    }

    const token = sign(`${user.username} ${user.email}`, process.env.JWT_SECRET || '');

    return {
        data: {
            email: user.email,
            username: user.username,
            id: user.id,
            token,
        },
    };
};
