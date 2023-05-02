import { SHA512 } from 'crypto-js';

const PasswordHashing = (rawPassword: string) => {
    return SHA512(rawPassword + process.env.PWD_SALT).toString();
};

export default PasswordHashing;
