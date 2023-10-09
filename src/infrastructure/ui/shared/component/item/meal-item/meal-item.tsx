import { View, Animated, TouchableOpacity, Text, Image } from 'react-native';
import React from 'react';
import { MealItemProps } from '~/domain/interfaces/props/search-list/meal-item-props';
import MealItemStyle from '~/infrastructure/ui/shared/component/item/meal-item/meal-item-style';
const MealItem = ({ title }: MealItemProps) => {
    return (
        <Animated.View style={MealItemStyle.item}>
            <TouchableOpacity>
                <View style={MealItemStyle.container}>
                    <View style={MealItemStyle.imageContainer}>
                        <Image source={require('./assets/Icon-Restaurant.png')} style={MealItemStyle.image} />
                    </View>
                    <View style={MealItemStyle.textField}>
                        <Text>{title}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </Animated.View>
    );
};

export default MealItem;
