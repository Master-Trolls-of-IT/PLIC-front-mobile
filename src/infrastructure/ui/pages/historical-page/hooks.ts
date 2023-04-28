import { useStore } from '~/infrastructure/controllers/store';

const useHistoricalPageData = () => {
    const {
        NavigationStore: { activeScreen }
    } = useStore();

    return { activeScreen };
};

export default useHistoricalPageData;
