import { SHA512 } from 'crypto-js';
const PasswordHashing = (rawPassword: string) => {
    console.log('rawPassword + salt : ', rawPassword + process.env.PWD_SALT);
    console.log('hash: ', SHA512(rawPassword + process.env.PWD_SALT));
    return SHA512(rawPassword + process.env.PWD_SALT).toString();
};

export default PasswordHashing;
