import { Cookies } from 'react-cookie';

interface CookieOptions {
    path?: string;
    domain?: string;
    secure?: boolean;
}

const cookies = new Cookies();

export const setCookie = (
    name: string,
    value: string,
    options?: CookieOptions,
) => {
    return cookies.set(name, value, { ...options });
};

export const getCookie = (name: string) => {
    return cookies.get(name);
};
