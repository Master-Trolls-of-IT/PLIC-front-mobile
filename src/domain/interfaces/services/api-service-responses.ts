export type Response<D = object> = {
    status: number;
    data: D;
    message: string;
    error: string;
};
