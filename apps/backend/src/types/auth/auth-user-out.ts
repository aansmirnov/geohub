import { User } from '../user';

export type AuthUserOut = {
    token: string;
} & User;
