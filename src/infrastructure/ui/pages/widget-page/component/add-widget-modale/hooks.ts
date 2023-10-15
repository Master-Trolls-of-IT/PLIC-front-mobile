const useAddWidgetModalData = () => {
    const chosenWidgetAsset = require('~/domain/entities/assets/icon/icon-chosen.svg');
    const energyWidgetAsset = require('~/domain/entities/assets/widget/widget-calories.svg');
    const ecoscoreWidgetAsset = require('~/domain/entities/assets/widget/widget-eco-score.svg');
    const smallMultipleWidgetAsset = require('~/domain/entities/assets/widget/widget-mes-apports-multiple.svg');
    const smallSingleWidgetAsset = require('~/domain/entities/assets/widget/widget-mes-apports-simple.svg');
    const anecdotesWidgetAsset = require('~/domain/entities/assets/widget/widget-anecdotes.png');
    const waterWidgetAsset = require('~/domain/entities/assets/widget/widget-water.png');

    return {
        anecdotesWidgetAsset,
        chosenWidgetAsset,
        energyWidgetAsset,
        ecoscoreWidgetAsset,
        smallMultipleWidgetAsset,
        smallSingleWidgetAsset,
        waterWidgetAsset
    };
};

export default useAddWidgetModalData;
