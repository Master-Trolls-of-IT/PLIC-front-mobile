import { useStore } from '~/infrastructure/controllers/store';

const useHistoricalPageData = () => {
    const {
        NavigationStore: { goBack },
        DataStore: { history }
    } = useStore();

    return {
        goBack,
        history
    };
};

export default useHistoricalPageData;
