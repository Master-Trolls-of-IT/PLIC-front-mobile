import { createContext } from 'react';
import { UserData } from '~/domain/interfaces/services/user-data';

export const HomePageContext = createContext<{
    handleOpenSettings: () => void;
    handleCloseSettings: (newUserData: UserData) => void;
}>({
    handleOpenSettings: () => {},
    handleCloseSettings: () => {}
});
