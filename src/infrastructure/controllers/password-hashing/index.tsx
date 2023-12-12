import { SHA512 } from 'crypto-js';

const PasswordHashing = (rawPassword: string) => {
    return SHA512(rawPassword + 'CHOUX A LA CREME').toString();
};

export default PasswordHashing;
