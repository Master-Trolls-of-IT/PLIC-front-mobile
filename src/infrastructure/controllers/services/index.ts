import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  CreateAxiosDefaults,
  RawAxiosRequestHeaders,
} from "axios";
import IAPIServices from "~/domain/interfaces/app-services";

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
      throw new Error(
        "Variable d'environnement non trouvé pour l'initialisation de la classe APIServices"
      );
    }

    this.baseHeaders = {};

    this.baseAxiosConfig = {
      baseURL: this.baseURL,
      withCredentials: true,
    };

    this.axiosInstance = axios.create(this.baseAxiosConfig);
  }

  async GET<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    const newConfig = {
      ...this.baseAxiosConfig,
      ...config,
    } as AxiosRequestConfig;
    const response = await this.axiosInstance.get<T, AxiosResponse<T>>(
      url,
      newConfig
    );
    return response;
  }

  async POST<T, D>(
    url: string,
    data?: D,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> {
    const newConfig = {
      ...this.baseAxiosConfig,
      ...config,
    } as AxiosRequestConfig;
    const response = await this.axiosInstance.post<T, AxiosResponse<T>, D>(
      url,
      data,
      newConfig
    );
    return response;
  }

  async PUT<D>(url: string, data?: D, config?: AxiosRequestConfig) {
    const newConfig = {
      ...this.baseAxiosConfig,
      ...config,
    } as AxiosRequestConfig;
    const response = await this.axiosInstance.put<D>(url, data, newConfig);
    return response;
  }

  async DELETE(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    const newConfig = {
      ...this.baseAxiosConfig,
      ...config,
    } as AxiosRequestConfig;
    const response = await this.axiosInstance.delete(url, newConfig);
    return response;
  }

  async PATCH(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse> {
    const newConfig = {
      ...this.baseAxiosConfig,
      ...config,
    } as AxiosRequestConfig;
    const response = await this.axiosInstance.patch(url, config);
    return response;
  }
}

const APIService = new APIServices();

export default APIService;
