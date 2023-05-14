import APIService from '~/infrastructure/controllers/services/api';

const APIPing = async () => {
    const apiServices = APIService;
    const response = await apiServices.GET('/ping');
    return response.status === 200;
};

export default APIPing;
