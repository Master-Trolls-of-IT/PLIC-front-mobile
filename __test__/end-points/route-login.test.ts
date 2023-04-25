import APIService from '~/infrastructure/controllers/services';
import { LoginRequest } from '~/domain/interfaces/services/login';

const goodLoginData: LoginRequest = {
    email: 'testtesttest@test.com',
    password: 'Test1234+.'
};

const badIdLoginData: LoginRequest = {
    email: 'badbad@test.com',
    password: 'Test1234+.'
};

const badPasswordLoginData: LoginRequest = {
    email: 'testtesttest@test.com',
    password: 'BadBadTest1234+.'
};

const badIdAndPasswordLoginData: LoginRequest = {
    email: 'badbad@test.com',
    password: 'BadBadTest1234+.'
};

describe('> Test of login route', () => {
    it('Connection with good login and password', async () => {
        const response = await APIService.POST('/login', goodLoginData);
        expect(response.status).toBe(202);
    });

    it('Connection with bad login and good password', async () => {
        const response = await APIService.POST('/login', badIdLoginData);
        expect(response.status).toBe(401);
    });

    it('Connection with good login and bad password', async () => {
        const response = await APIService.POST('/login', badPasswordLoginData);
        expect(response.status).toBe(401);
    });

    it('Connection with bad login and bad password', async () => {
        const response = await APIService.POST('/login', badIdAndPasswordLoginData);
        expect(response.status).toBe(401);
    });
});
