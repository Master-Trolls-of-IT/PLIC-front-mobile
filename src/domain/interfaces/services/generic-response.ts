export type GenericResponse<D = object> = {
    status: number;
    message: string;
    data: D;
};
