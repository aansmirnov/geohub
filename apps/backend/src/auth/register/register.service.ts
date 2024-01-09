import { RegisterUserIn, AuthUserOut, Result } from 'src/types';
import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';

const prisma = new PrismaClient();

export const registerService = async (
    body: RegisterUserIn,
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

    if (user) {
        const errorMessage = 'User already exists with this';
        const path = user.email === email ? 'email' : 'username';

        return {
            error: {
                code: 409,
                message: `${errorMessage} ${path}`,
                path,
            },
        };
    }

    const hashedPassword = await hash(password, 10);

    const { id } = await prisma.user.create({
        data: { username, email, password: hashedPassword },
    });

    const token = sign(`${username} ${email}`, process.env.JWT_SECRET || '');

    return {
        data: {
            id,
            username,
            email,
            token,
        },
    };
};
