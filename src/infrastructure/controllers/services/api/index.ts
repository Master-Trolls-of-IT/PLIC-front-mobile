import axios, { AxiosRequestConfig, AxiosResponse, CreateAxiosDefaults, RawAxiosRequestHeaders } from 'axios';
import IAPIServices from '~/domain/interfaces/services/IAPIServices';
import { GenericResponse } from '~/domain/interfaces/services/generic-response';

class APIServices implements IAPIServices {
    static instance: APIServices;
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

    static getInstance(): APIServices {
        if (!APIServices.instance) {
            APIServices.instance = new APIServices();
        }

        return APIServices.instance;
    }

    static async GET<T>(url: string, config?: AxiosRequestConfig): Promise<GenericResponse<T>> {
        return this.getInstance().get(url, config);
    }

    static async POST<T, D>(
        url: string,
        data?: D,
        config?: AxiosRequestConfig,
        discord?: boolean
    ): Promise<GenericResponse<T>> {
        return this.getInstance().post(url, data, config, discord);
    }

    static async PUT<D>(url: string, data?: D, config?: AxiosRequestConfig): Promise<Response> {
        return this.getInstance().put(url, data, config);
    }

    static async DELETE(url: string, config?: AxiosRequestConfig): Promise<Response> {
        return this.getInstance().delete(url, config);
    }

    static async PATCH(url: string, config?: AxiosRequestConfig): Promise<Response> {
        return this.getInstance().patch(url, config);
    }

    async get<T>(url: string, config?: AxiosRequestConfig): Promise<GenericResponse<T>> {
        const newConfig = {
            ...this.baseAxiosConfig,
            ...config
        } as AxiosRequestConfig;
        const returnValue = await this.axiosInstance.get<T, AxiosResponse<T>>(url, newConfig);
        return returnValue.data as GenericResponse<T>;
    }

    async post<T, D>(
        url: string,
        data?: D,
        config?: AxiosRequestConfig,
        discord?: boolean
    ): Promise<GenericResponse<T>> {
        const newConfig = discord
            ? {
                  ...this.baseHeaders,
                  ...config
              }
            : ({
                  ...this.baseAxiosConfig,
                  ...config
              } as AxiosRequestConfig);
        const returnValue = await this.axiosInstance.post<T, AxiosResponse<T>, D>(url, data, newConfig);

        return returnValue.data as GenericResponse<T>;
    }

    async put<D>(url: string, data?: D, config?: AxiosRequestConfig): Promise<Response> {
        const newConfig = {
            ...this.baseAxiosConfig,
            ...config
        } as AxiosRequestConfig;
        const returnValue = await this.axiosInstance.put<D>(url, data, newConfig);
        return returnValue.data as Response;
    }

    async delete(url: string, config?: AxiosRequestConfig): Promise<Response> {
        const newConfig = {
            ...this.baseAxiosConfig,
            ...config
        } as AxiosRequestConfig;
        const returnValue = await this.axiosInstance.delete(url, newConfig);
        return returnValue.data as Response;
    }

    async patch(url: string, config?: AxiosRequestConfig): Promise<Response> {
        const newConfig = {
            ...this.baseAxiosConfig,
            ...config
        } as AxiosRequestConfig;
        const returnValue = await this.axiosInstance.patch(url, newConfig);
        return returnValue.data as Response;
    }
}

export default APIServices;
