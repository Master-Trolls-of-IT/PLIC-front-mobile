import React from 'react';
import { View, Text } from 'react-native';
import anecdoteWidgetStyle from '~/infrastructure/ui/shared/component/widgets/anecdote/widget-anecdote-style';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import CustomSvg from '~/infrastructure/ui/shared/custom-svg';

//TO DELETE
const HomePageTemporaryIntake = ({ title, anecdote }: { title: string; anecdote: string }) => {
    const applesvg = require('~/domain/entities/assets/icon/icon-anecdote-sea.svg');
    return (
        <View
            style={{
                ...anecdoteWidgetStyle.temporaryIntake,
                ...CustomFontInterBold().text
            }}>
            <Text style={anecdoteWidgetStyle.title}>{title}</Text>

            <View style={anecdoteWidgetStyle.textContainer}>
                <Text
                    style={{
                        ...anecdoteWidgetStyle.text,
                        ...CustomFontInterBold().text
                    }}>
                    {anecdote}
                </Text>
            </View>
            <View style={anecdoteWidgetStyle.icon}>
                <CustomSvg asset={applesvg} height={40} width={40}></CustomSvg>
            </View>
        </View>
    );
};

export default HomePageTemporaryIntake;
