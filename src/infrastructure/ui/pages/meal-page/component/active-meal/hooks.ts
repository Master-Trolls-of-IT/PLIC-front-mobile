import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';

const horizontalScrollLineAsset = require('~/domain/entities/assets/icon/icon-horizontal-scroll-line.svg');
const useMealPageActiveItemData = () => {
    const interBoldText = CustomFontInterBold().text;
    return {
        horizontalScrollLineAsset,
        interBoldText
    };
};

export default useMealPageActiveItemData;
