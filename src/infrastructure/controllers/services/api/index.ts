import axios, { AxiosRequestConfig, AxiosResponse, CreateAxiosDefaults, RawAxiosRequestHeaders } from 'axios';
import IAPIServices from '~/domain/interfaces/services/IAPIServices';
import { GenericResponse } from '~/domain/interfaces/services/generic-response';

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

        this.baseHeaders = {
            'Content-Type': 'application/json'
        };

        this.baseAxiosConfig = {
            baseURL: this.baseURL,
            withCredentials: true,
            ...this.baseHeaders
        };

        this.axiosInstance = axios.create(this.baseAxiosConfig);
    }

    async GET<T>(url: string, config?: AxiosRequestConfig): Promise<GenericResponse<T>> {
        const newConfig = {
            ...this.baseAxiosConfig,
            ...config
        } as AxiosRequestConfig;
        const returnValue = await this.axiosInstance.get<T, AxiosResponse<T>>(url, newConfig);
        return returnValue.data as GenericResponse<T>;
    }

    async POST<T, D>(url: string, data?: D, config?: AxiosRequestConfig): Promise<GenericResponse<T>> {
        const newConfig = {
            ...this.baseAxiosConfig,
            ...config
        } as AxiosRequestConfig;
        const returnValue = await this.axiosInstance.post<T, AxiosResponse<T>, D>(url, data, newConfig);

        return returnValue.data as GenericResponse<T>;
    }

    async PUT<D>(url: string, data?: D, config?: AxiosRequestConfig): Promise<Response> {
        const newConfig = {
            ...this.baseAxiosConfig,
            ...config
        } as AxiosRequestConfig;
        const returnValue = await this.axiosInstance.put<D>(url, data, newConfig);
        return returnValue.data as Response;
    }

    async DELETE(url: string, config?: AxiosRequestConfig): Promise<Response> {
        const newConfig = {
            ...this.baseAxiosConfig,
            ...config
        } as AxiosRequestConfig;
        const returnValue = await this.axiosInstance.delete(url, newConfig);
        return returnValue.data as Response;
    }

    async PATCH(url: string, config?: AxiosRequestConfig): Promise<Response> {
        const newConfig = {
            ...this.baseAxiosConfig,
            ...config
        } as AxiosRequestConfig;
        const returnValue = await this.axiosInstance.patch(url, newConfig);
        return returnValue.data as Response;
    }
}

const APIService = new APIServices();

export default APIService;