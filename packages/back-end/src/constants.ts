export const APP_NAME = process.env.APP_NAME || 'Pointing pocker 2';
export const APP_PORT = process.env.APP_PORT || 8000;
export const APP_SECRET = process.env.APP_SECRET || 'Pointing pocker secret';

export const GOOGLE_NAME = process.env.GOOGLE_NAME as string;
export const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID as string;
export const GOOGLE_CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET as string;
export const GOOGLE_CALLBACK_URL = process.env.GOOGLE_CALLBACK_URL as string;
export const GOOGLE_SCOPE = (process.env.GOOGLE_SCOPE as string).split('|');
export const GOOGLE_AUTH_ENDPOINT = process.env.GOOGLE_AUTH_ENDPOINT as string;
export const GOOGLE_TOKEN_ENDPOINT = process.env.GOOGLE_TOKEN_ENDPOINT as string;
export const GOOGLE_REDIRECT_URL = process.env.GOOGLE_REDIRECT_URL as string;
