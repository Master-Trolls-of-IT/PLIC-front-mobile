import { createContext } from 'react';

export const HomePageContext = createContext<{
    handleOpenSettings: () => void;
    handleCloseSettings: () => void;
}>({
    handleOpenSettings: () => {},
    handleCloseSettings: () => {}
});
