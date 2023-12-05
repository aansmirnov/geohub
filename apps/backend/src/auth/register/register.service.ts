import { RegisterUserIn, RegisterUserOut, Result } from 'src/types';
import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';
import { sign } from 'jsonwebtoken';

const prisma = new PrismaClient();

export const registerSerive = async (
    body: RegisterUserIn,
): Promise<Result<RegisterUserOut>> => {
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

    await prisma.user.create({
        data: { username, email, password: hashedPassword },
    });

    const token = sign(`${username}${email}`, process.env.JWT_SECRET || '');

    return {
        data: {
            token,
        },
    };
};
