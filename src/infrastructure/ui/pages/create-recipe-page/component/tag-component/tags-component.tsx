import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { observer } from 'mobx-react';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import CustomSvg from '~/infrastructure/ui/shared/component/custom-svg';
import useTagsComponentData from '~/infrastructure/ui/pages/create-meal-page/component/tag-component/hooks';
import TagsComponentStyle from '~/infrastructure/ui/pages/create-meal-page/component/tag-component/tags-component-style';
import { TagsComponentProps } from '~/domain/interfaces/props/tags/tags-component-props';

const TagsComponent = ({ tag, isCross, mealTagsSelected, dispatch }: TagsComponentProps) => {
    const {
        assetCross,
        assetSelected,
        isSelected,
        newCrossWidth,
        newCrossHeight,
        newSelectedHeight,
        newSelectedWidth,
        onPressTagCross,
        onPressTagContainer
    } = useTagsComponentData({ tag, isCross, mealTagsSelected, dispatch });

    return (
        <TouchableOpacity disabled={isCross} onPress={onPressTagContainer} style={TagsComponentStyle.container}>
            <View style={{ ...TagsComponentStyle.tags, opacity: isSelected ? 0.3 : 1 }}>
                <View style={{ ...TagsComponentStyle.circle, backgroundColor: tag.color }} />
                <Text style={{ ...TagsComponentStyle.tagsText, ...CustomFontInterBold().text }}>{tag.label}</Text>

                {isCross && (
                    <TouchableOpacity style={TagsComponentStyle.crossContainer} onPress={onPressTagCross}>
                        <CustomSvg
                            asset={assetCross}
                            height={newCrossHeight}
                            width={newCrossWidth}
                            style={TagsComponentStyle.cross}
                        />
                    </TouchableOpacity>
                )}
            </View>

            {isSelected && (
                <CustomSvg
                    asset={assetSelected}
                    height={newSelectedHeight}
                    width={newSelectedWidth}
                    style={TagsComponentStyle.selectedIcon}
                />
            )}
        </TouchableOpacity>
    );
};

export default observer(TagsComponent);
