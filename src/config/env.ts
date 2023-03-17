export interface IEnv {
    baseUrl?: string;
}

export const env: IEnv = {
    baseUrl: process.env.REACT_APP_API_URL
}