import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';
import useTagComponentData from '~/infrastructure/ui/pages/create-meal-page/component/tags/hooks';
import { MealItemTag } from '~/domain/interfaces/props/meal-item-tag';
import TagsComponentStyle from '~/infrastructure/ui/pages/create-meal-page/component/tags/tags-component-style';

const TagsComponent = () => {
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
        <View style={TagsComponentStyle.tagsContainer}>
            {tags.map((tag: MealItemTag) => {
                return (
                    <View style={TagsComponentStyle.tags} key={tag.label}>
                        <View style={{ ...TagsComponentStyle.circle, backgroundColor: tag.color }} />
                        <Text style={{ ...TagsComponentStyle.tagsText, ...CustomFontInterBold().text }}>
                            {tag.label}
                        </Text>
                        <TouchableOpacity style={TagsComponentStyle.crossContainer} onPress={onPressTagCross}>
                            <CustomSvg
                                asset={assetCross}
                                height={newCrossHeight}
                                width={newCrossWidth}
                                style={TagsComponentStyle.cross}
                            />
                        </TouchableOpacity>
                    </View>
                );
            })}
            <TouchableOpacity style={TagsComponentStyle.plusContainer} onPress={onPressTagPlus}>
                <View style={TagsComponentStyle.tags}>
                    <CustomSvg
                        asset={assetPlus}
                        height={newPlusHeight}
                        width={newPlusWidth}
                        style={TagsComponentStyle.plus}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default TagsComponent;
