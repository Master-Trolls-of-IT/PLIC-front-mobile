import { UserData } from '~/domain/interfaces/services/user-data';

export type SignUpData = UserData & { Password: string };
