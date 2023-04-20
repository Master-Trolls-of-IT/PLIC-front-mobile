import { LoginRequest } from '~/domain/interfaces/services/login';

export const goodLoginData: LoginRequest = {
    login: 'test4@gmail.com',
    password: 'Ing2&okk'
};

export const badIdLoginData: LoginRequest = {
    login: 'testbbbbbaaaaaaddddddddddd@gmail.com',
    password: 'Ing2&okk'
};

export const badPasswordLoginData: LoginRequest = {
    login: 'test4@gmail.com',
    password: 'Ing2&dqflmjvbMSJVBMljsbvurblvijqdbsjdvclbvdfliuvlqekfjsbv kqfsbvleiuhbnk<jxc vblkqfdjhgmvjfbsvkjqdfbokk'
};

export const badIdAndPasswordLoginData: LoginRequest = {
    login: 'testbbbbbaaaaaaddddddddddd@gmail.com',
    password: 'Ing2&dqflmjvbMSJVBMljsbvurblvijqdbsjdvclbvdfliuvlqekfjsbv kqfsbvleiuhbnk<jxc vblkqfdjhgmvjfbsvkjqdfbokk'
};
