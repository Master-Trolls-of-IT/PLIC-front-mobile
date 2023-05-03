import React from 'react';
import { Text, View } from 'react-native';
import { Bar } from 'react-native-progress';
import useSmallMultipleData from '~/infrastructure/ui/shared/component/widgets/my-intakes/small-multiple/hooks';
import { NutrientData } from '~/domain/interfaces/props/nutrient-data';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import getUnitFromNutrient from '~/infrastructure/ui/shared/helper/get-unit-from-nutrient';
import customFontInterBold from '~/application/utils/font/custom-font-inter-bold';

const SmallMultipleIntakes = ({
    nutrient1,
    nutrient2,
    nutrient3
}: {
    nutrient1: NutrientData;
    nutrient2: NutrientData;
    nutrient3: NutrientData;
}) => {
    const { pageStyle } = useSmallMultipleData(nutrient1, nutrient2, nutrient3);
    return (
        <View style={pageStyle.container}>
            <Text style={{ ...pageStyle.title, ...CustomFontInterBold().text }}>Mes Apports</Text>
            <View style={pageStyle.content}>
                <View style={pageStyle.barContainer}>
                    <View style={pageStyle.innerTitleContainer}>
                        <Text style={{ ...pageStyle.innerTitle1, ...customFontInterBold() }}>
                            {nutrient1.nutrientType}
                        </Text>
                        <Text style={{ ...pageStyle.innerTitle1, ...customFontInterBold() }}>
                            {nutrient1.earned} / {nutrient1.goal}
                            {getUnitFromNutrient(nutrient1.nutrientType)}
                        </Text>
                    </View>
                    <Bar
                        {...pageStyle.progressBar1}
                        animated={true}
                        progress={nutrient1.earned / nutrient1.goal}
                        borderWidth={0}
                    />
                </View>
                <View style={pageStyle.barContainer}>
                    <View style={pageStyle.innerTitleContainer}>
                        <Text style={{ ...pageStyle.innerTitle2, ...customFontInterBold() }}>
                            {nutrient2.nutrientType}
                        </Text>
                        <Text style={{ ...pageStyle.innerTitle2, ...customFontInterBold() }}>
                            {nutrient2.earned} / {nutrient2.goal}
                            {getUnitFromNutrient(nutrient2.nutrientType)}
                        </Text>
                    </View>
                    <Bar
                        {...pageStyle.progressBar2}
                        animated={true}
                        progress={nutrient2.earned / nutrient2.goal}
                        borderWidth={0}
                    />
                </View>
                <View style={pageStyle.barContainer}>
                    <View style={pageStyle.innerTitleContainer}>
                        <Text style={{ ...pageStyle.innerTitle3, ...customFontInterBold() }}>
                            {nutrient3.nutrientType}
                        </Text>
                        <Text style={{ ...pageStyle.innerTitle3, ...customFontInterBold() }}>
                            {nutrient3.earned} / {nutrient3.goal}
                            {getUnitFromNutrient(nutrient3.nutrientType)}
                        </Text>
                    </View>
                    <Bar
                        {...pageStyle.progressBar3}
                        animated={true}
                        progress={nutrient3.earned / nutrient3.goal}
                        borderWidth={0}
                    />
                </View>
            </View>
        </View>
    );
};

export default SmallMultipleIntakes;
