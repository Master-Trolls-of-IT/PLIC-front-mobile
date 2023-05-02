import React from 'react';
import { View, Text } from 'react-native';
import CustomFontInterBold from '~/application/utils/font/custom-font-inter-bold';
import CustomSvg from '../../../custom-svg';
import anecdoteWidgetStyle from './widget-anecdote-style';

const HomePageAnecdote = ({ title, anecdote }: { title: string; anecdote: string }) => {
    //TODO: add an input to be able to choose the icon
    const applesvg = require('~/domain/entities/assets/icon/icon-anecdote-plage.svg');
    return (
        <View style={anecdoteWidgetStyle.anecdoteContainer}>
            <Text style={{ ...CustomFontInterBold().text, ...anecdoteWidgetStyle.title }}>{title}</Text>

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

export default HomePageAnecdote;
