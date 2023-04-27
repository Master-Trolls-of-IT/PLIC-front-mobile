import React, { FunctionComponent } from 'react';
import { Dimensions, Text, View } from 'react-native';
import HomePageBlobsTop from '~/infrastructure/ui/pages/home-page/component/background/home-page-blobs-top';
import HomePageStyle from '~/infrastructure/ui/pages/home-page/home-page-style';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import CustomSvg from '../../shared/custom-svg';
import GenericHeaderText from '../../shared/component/texts/generic-header-text/generic-header-text';
import HomePageBasket from './component/background/home-page-basket';
import HomePageAnecdote from '~/infrastructure/ui/shared/component/widgets/widget-anecdote';

const HomePage: FunctionComponent<any> = ({ navigation }) => {
    const customFont = CustomFontInterBold().text;

    return (
        <View>
            <View style={HomePageStyle.background}>
                <HomePageBlobsTop />
            </View>
            <GenericHeaderText firstText={'Votre résumé'} secondText={'Bonjour Gaia,'} reverseTitle={true} />
            <View style={HomePageStyle.header}>
                <HomePageBasket />
            </View>
            <View style={HomePageStyle.widgetContainer}>
                <View style={HomePageStyle.anecdoteBox}>
                    <HomePageAnecdote
                        title={'Anecdote'}
                        anecdote={
                            'Un mégot peut polluer jusqu’à 500 litres d’eau. Environ 1000 sont jetés par terre chaque seconde en France.'
                        }
                    />
                </View>
                <View style={HomePageStyle.ecoScoreBox}>
                    <HomePageAnecdote // is to be replaced by HomePageEcoscore
                        title={'Anecdote'}
                        anecdote={'Aujourd’hui, les pommes contiennent moins de vitamines C qu’en 1960 !'}
                    />
                </View>
            </View>
        </View>
    );
};

export default HomePage;
