import { Router } from 'express';
import {
    registerController,
    loginController,
    resetPasswordController,
    checkAuthCodeController
} from './auth';
import bodyParser from 'body-parser';

export const router = Router();
const parser = bodyParser.json();

router.post('/mobile/v1/auth/register', parser, registerController);
router.post('/mobile/v1/auth/login', parser, loginController);
router.post('/mobile/v1/auth/reset-password', parser, resetPasswordController);
router.post('/mobile/v1/auth/check-auth-code', parser, checkAuthCodeController);
