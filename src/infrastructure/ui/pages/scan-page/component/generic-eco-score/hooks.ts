import GetColorByPercentage from '~/infrastructure/ui/shared/helper/get-color-from-percentage';

const useGenericEcoScoreData = (ecoscore: number) => {
    const color = GetColorByPercentage(ecoscore);

    return { color };
};

export default useGenericEcoScoreData;
