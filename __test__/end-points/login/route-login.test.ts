import { badIdAndPasswordLoginData, badIdLoginData, badPasswordLoginData, goodLoginData } from './const';
import APIService from '~/infrastructure/controllers/services';

describe('> Test of login route', () => {
    it('Connection with good login and password', async () => {
        const response = await APIService.POST('/login', goodLoginData);
        expect(response.status).toBe(200);
    });

    it('Connection with bad login and good password', async () => {
        const response = await APIService.POST('/login', badIdLoginData);
        expect(response.status).toBe(500);
    });

    it('Connection with good login and bad password', async () => {
        const response = await APIService.POST('/login', badPasswordLoginData);
        expect(response.status).toBe(500);
    });

    it('Connection with bad login and bad password', async () => {
        const response = await APIService.POST('/login', badIdAndPasswordLoginData);
        expect(response.status).toBe(500);
    });
});
