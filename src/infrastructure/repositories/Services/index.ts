import axios, { AxiosRequestConfig, AxiosResponse, CreateAxiosDefaults, RawAxiosRequestHeaders } from 'axios'
import { baseHeaders } from './const';

class APIServices {
    baseURL: string;

    baseHeaders: RawAxiosRequestHeaders = baseHeaders;

    baseBody = null;

    baseAxiosConfig: CreateAxiosDefaults;

    axiosInstance;

    constructor() {
        if (process.env.APP_API_ENDPOINT) {
            this.baseURL = process.env.APP_API_ENDPOINT;
        } else {
            throw new Error("Variable d'environnement non trouvé pour l'initialisation de la classe QCHTTPRequest");
        }

        this.baseHeaders = baseHeaders;

        this.baseAxiosConfig = {
            baseURL: this.baseURL,
            withCredentials: true,
        };

        this.axiosInstance = axios.create(this.baseAxiosConfig);
    }

    async GET<T>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        const newConfig = { ...this.baseAxiosConfig, ...config } as AxiosRequestConfig;
        const response = await this.axiosInstance.get<T, AxiosResponse<T>>(url, newConfig);
        return response;
    }

    async POST<T, D>(url: string, data?: D, config?: AxiosRequestConfig): Promise<AxiosResponse<T>> {
        const newConfig = { ...this.baseAxiosConfig, ...config } as AxiosRequestConfig;
        return this.axiosInstance.post<T, AxiosResponse<T>, D>(url, data, newConfig);
    }

    async PUT<D>(url: string, data?: D, config?: AxiosRequestConfig) {
        const newConfig = { ...this.baseAxiosConfig, ...config, ...data } as AxiosRequestConfig;

        try {
            const response = await this.axiosInstance.put(url, newConfig);
            return response;
        } catch (err: any) {
            console.log(' depuis classe' + err);
            if (err.response.status === 401) {
                console.log('erreur 401');
            } else {
                return err.response;
            }
        } finally {
            console.log('class finally');
        }
    }

    async DELETE(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
        const newConfig = { ...this.baseAxiosConfig, ...config } as AxiosRequestConfig;
        const response = await this.axiosInstance.delete(url, newConfig);
        return response;
    }

    async PATCH(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse> {
        const newConfig = { ...this.baseAxiosConfig, ...config } as AxiosRequestConfig;
        const response = await this.axiosInstance.patch(url, config);
        return response;
    }
}

const APIService = new APIServices();

export default APIService