import { Router } from 'express';
import { registerController } from './auth';
import bodyParser from 'body-parser';

export const router = Router();
const parser = bodyParser.json();

router.post('/mobile/v1/auth/register', parser, registerController);
