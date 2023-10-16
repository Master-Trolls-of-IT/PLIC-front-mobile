import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';
import { MealItemTag } from '~/domain/interfaces/props/meal-item-tag';
import useTagComponentData from '~/infrastructure/ui/pages/create-meal-page/component/meal-tags/hooks';
import MealTagsStyle from '~/infrastructure/ui/pages/create-meal-page/component/meal-tags/meal-tags-style';

const MealTags = () => {
    const {
        assetCross,
        assetPlus,
        newCrossWidth,
        newCrossHeight,
        newPlusHeight,
        newPlusWidth,
        tags,
        onPressTagCross,
        onPressTagPlus
    } = useTagComponentData();

    return (
        <View style={MealTagsStyle.tagsContainer}>
            {tags.map((tag: MealItemTag) => {
                return (
                    <View style={MealTagsStyle.tags} key={tag.label}>
                        <View style={{ ...MealTagsStyle.circle, backgroundColor: tag.color }} />
                        <Text style={{ ...MealTagsStyle.tagsText, ...CustomFontInterBold().text }}>{tag.label}</Text>
                        <TouchableOpacity style={MealTagsStyle.crossContainer} onPress={onPressTagCross}>
                            <CustomSvg
                                asset={assetCross}
                                height={newCrossHeight}
                                width={newCrossWidth}
                                style={MealTagsStyle.cross}
                            />
                        </TouchableOpacity>
                    </View>
                );
            })}
            <TouchableOpacity style={MealTagsStyle.plusContainer} onPress={onPressTagPlus}>
                <View style={MealTagsStyle.tags}>
                    <CustomSvg
                        asset={assetPlus}
                        height={newPlusHeight}
                        width={newPlusWidth}
                        style={MealTagsStyle.plus}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default MealTags;
