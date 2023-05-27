import React from 'react';
import { observer } from 'mobx-react';
import { View } from 'react-native';
import HomePageAnecdote from '~/infrastructure/ui/shared/component/widgets/anecdote/widget-anecdote';
import GenericHeaderText from '~/infrastructure/ui/shared/component/texts/generic-header-text/generic-header-text';
import HomePageBasket from '~/infrastructure/ui/pages/home-page/component/background/home-page-basket';
import HomePageStyle from '~/infrastructure/ui/pages/home-page/home-page-style';
import HomePageBlobsTop from '~/infrastructure/ui/pages/home-page/component/background/home-page-blobs-top';
import useHomePageData from '~/infrastructure/ui/pages/home-page/hooks';
import EcoScore from '~/infrastructure/ui/shared/component/widgets/eco-score/widget-ecoscore';
import { NutrientsEnum } from '~/domain/interfaces/enum/nutrients-enum';
import LargeIntakes from '~/infrastructure/ui/shared/component/widgets/my-intakes/large/large-intakes';

const HomePage = () => {
    const { anecdoteObject, dailyNutrientsGoal, dailyNutrientsEarned, username, chooseRightDynamicImage, ecoScore } =
        useHomePageData();

    return (
        <View>
            <View style={HomePageStyle.background}>
                <HomePageBlobsTop />
            </View>
            <View style={HomePageStyle.container}>
                <View style={HomePageStyle.header}>
                    <GenericHeaderText
                        firstText={'Votre Résumé'}
                        secondText={`Bonjour ${username},`}
                        containerStyle={HomePageStyle.headerContainer}
                        showHomePageHeader={true}
                    />
                </View>

                <HomePageBasket asset={chooseRightDynamicImage()} />

                <View style={HomePageStyle.widgetContainer}>
                    <View style={HomePageStyle.widgetContainerFirstRow}>
                        <LargeIntakes
                            energy={{
                                nutrientType: NutrientsEnum.Energy,
                                earned: dailyNutrientsEarned.energy,
                                goal: dailyNutrientsGoal.energy
                            }}
                            firstNutrient={{
                                nutrientType: NutrientsEnum.Protein,
                                earned: dailyNutrientsEarned.protein,
                                goal: dailyNutrientsGoal.protein
                            }}
                            secondNutrient={{
                                nutrientType: NutrientsEnum.Lipid,
                                earned: dailyNutrientsEarned.lipid,
                                goal: dailyNutrientsGoal.lipid
                            }}
                            thirdNutrient={{
                                nutrientType: NutrientsEnum.Carbohydrate,
                                earned: dailyNutrientsEarned.carbohydrate,
                                goal: dailyNutrientsGoal.carbohydrate
                            }}
                        />
                    </View>

                    <View style={HomePageStyle.widgetContainerSecondRow}>
                        <HomePageAnecdote {...anecdoteObject} />
                        <EcoScore ecoScore={ecoScore} />
                    </View>
                </View>
            </View>
        </View>
    );
};

export default observer(HomePage);
