import axios, {
    AxiosError,
    AxiosRequestConfig,
    AxiosResponse,
    CreateAxiosDefaults,
    RawAxiosRequestHeaders
} from 'axios';
import IAPIServices from '~/domain/interfaces/services/IAPIServices';

class APIServices implements IAPIServices {
    baseURL: string;
    baseHeaders: RawAxiosRequestHeaders;
    baseBody = {};
    baseAxiosConfig: CreateAxiosDefaults;
    axiosInstance;

    constructor() {
        if (process.env.APP_API_ENDPOINT) {
            this.baseURL = process.env.APP_API_ENDPOINT;
        } else {
            throw new Error("Variable d'environnement non trouvé pour l'initialisation de la classe APIServices");
        }

        this.baseHeaders = {};

        this.baseAxiosConfig = {
            baseURL: this.baseURL,
            withCredentials: true
        };

        this.axiosInstance = axios.create(this.baseAxiosConfig);
    }

    async GET<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        const newConfig = {
            ...this.baseAxiosConfig,
            ...config
        } as AxiosRequestConfig;
        return this.axiosInstance.get<T, AxiosResponse<T>>(url, newConfig).catch();
    }

    async POST<T, D>(url: string, data?: D, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        const newConfig = {
            ...this.baseAxiosConfig,
            ...config
        } as AxiosRequestConfig;
        return this.axiosInstance.post<T, AxiosResponse<T>, D>(url, data, newConfig);
    }

    async PUT<D>(url: string, data?: D, config?: AxiosRequestConfig) {
        const newConfig = {
            ...this.baseAxiosConfig,
            ...config
        } as AxiosRequestConfig;
        return this.axiosInstance.put<D>(url, data, newConfig);
    }

    async DELETE(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
        const newConfig = {
            ...this.baseAxiosConfig,
            ...config
        } as AxiosRequestConfig;
        return this.axiosInstance.delete(url, newConfig);
    }

    async PATCH(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
        const newConfig = {
            ...this.baseAxiosConfig,
            ...config
        } as AxiosRequestConfig;
        return this.axiosInstance.patch(url, newConfig);
    }
}

const APIService = new APIServices();

export default APIService;
