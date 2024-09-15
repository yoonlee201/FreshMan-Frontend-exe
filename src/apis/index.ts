import axios, { AxiosRequestConfig } from 'axios';

export const BASE_URL = process.env.REACT_APP_FRESHMAN_PUBLIC_API_URL;
// export const BASE_URL = 'http://localhost:3000';

export const axiosDefault = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const axiosAuth = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true,
    timeout: 10 * 1000,
});

// 엑세스토큰 재발급
const refreshAccessToken = async () => {
    try {
        const response = await axios.post(
            `${process.env.REACT_APP_FRESHMAN_PUBLIC_API_URL}reissue`,
            {},
            {
                headers: {
                    'Content-Type': 'application/json',
                },
                withCredentials: true,
            },
        );
        const accessToken = response.headers.access_token;
        if (accessToken) {
            return accessToken;
        }
        throw new Error('reissue Error');
    } catch (error) {
        console.log(error, 'reissue Error');
        throw error;
    }
};

// 액세스 토큰 재발급 후 재요청
const retryRequestWithNewToken = async (
    originalRequest: AxiosRequestConfig,
    newAccessToken: string,
) => {
    localStorage.setItem('accessToken', newAccessToken);

    const modifiedConfig = { ...originalRequest };
    modifiedConfig.headers = originalRequest.headers || {};
    modifiedConfig.headers.Authorization = `Bearer ${newAccessToken}`;
    try {
        return await axios(originalRequest);
    } catch (error) {
        console.error('재요청 실패');
        window.location.replace('/login');
        return Promise.reject(error);
    }
};

axiosAuth.interceptors.request.use(
    async (config) => {
        const modifiedConfig = { ...config };
        const accessToken = localStorage.getItem('accessToken');

        if (accessToken) {
            modifiedConfig.headers.Authorization = `Bearer ${accessToken}`;
        }
        return modifiedConfig;
    },
    (error) => {
        console.log(error);
        return Promise.reject(error);
    },
);

axiosAuth.interceptors.response.use(
    (response) => response,
    async (error) => {
        const errorStatus = error.response.status;
        const originalRequest = error.config;

        if (errorStatus === 401) {
            try {
                const newAccessToken = await refreshAccessToken();
                if (newAccessToken) {
                    return await retryRequestWithNewToken(
                        originalRequest,
                        newAccessToken,
                    );
                }
            } catch (err) {
                alert('토큰이 만료되었습니다. 다시 로그인 해주세요');
                window.location.replace('/login');
            }
        }
        // 에러 반환.
        return Promise.reject(error);
    },
);
