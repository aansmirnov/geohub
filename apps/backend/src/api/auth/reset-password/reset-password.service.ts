import { Result, ResetPasswordIn } from 'src/types';
import { PrismaClient } from '@prisma/client';
import { transporter } from '../../../utils/transporter';

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

    const info = await transporter.sendMail({
        from: 'geohub@gmail.com',
        to: email,
        subject: 'Reset Password Code',
        text: String(authCode),
        html: `<b>${authCode}</b>`,
    });

    if (!info.messageId) {
        return {
            error: {
                code: 500,
                message: 'Something went wrong',
                path: 'reset_code',
            },
        };
    }

    return { data: true };
};
