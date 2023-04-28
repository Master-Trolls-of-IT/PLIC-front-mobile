import { createContext, useContext } from 'react';
import RootStore from '~/infrastructure/controllers/store/root-store';

export const createStore = (): RootStore => new RootStore();

export const StoreContext = createContext<RootStore>({} as RootStore);

export const useStore = (): RootStore => useContext(StoreContext);
export const StoreProvider = StoreContext.Provider;
