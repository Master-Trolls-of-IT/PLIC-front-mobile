import { MockedUsername } from '~/domain/interfaces/enum/mocked-username';

export const chooseRightUsername = (email: string) => {
    switch (email) {
        case MockedUsername.AYMAN:
            return 'Ayman';
        case MockedUsername.HENRY:
            return 'Henry';
        case MockedUsername.TOM:
            return 'Tom';
        default:
            return 'Julien';
    }
};
