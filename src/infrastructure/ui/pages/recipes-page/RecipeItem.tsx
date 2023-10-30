import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import recipePageStyle from '~/infrastructure/ui/pages/recipes-page/recipe-page-style';

const RecipeItem = ({ recipe }) => {
    return (
        <View style={recipePageStyle.container}>
            <Text style={recipePageStyle.title}>{recipe.title}</Text>
            <Text style={recipePageStyle.ingredients}>Ingrédients: {recipe.ingredients.join(', ')}</Text>
            {/* Affichez d'autres détails de la recette ici */}
        </View>
    );
};
StyleSheet.create({
    container: {
        borderWidth: 1,
        borderColor: 'lightgray',
        padding: 16,
        marginBottom: 16
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    ingredients: {
        fontSize: 16
    }
});
export default RecipeItem;
