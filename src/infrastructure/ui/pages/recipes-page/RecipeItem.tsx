import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { ColorEnum } from '~/domain/interfaces/enum/color-enum';

interface RecipeItemProps {
    image: string;
    name: string;
    rating: number;
    numRatings: number;
    prepTime: string;
    difficulty: string;
    ecoScore: string;
    mainIngredients: string[];
    createdBy: string;
    tags: string[];
}

const styles = StyleSheet.create({
    wrapper: {
        width: 351,
        height: 164,
        padding: 16,
        marginBottom: 16,
        borderRadius: 20, // Bord arrondi
        backgroundColor: ColorEnum.ExtraOpaqueBrown
    },
    container: {
        flexDirection: 'row' // Disposition en ligne (deux colonnes)
    },
    leftContainer: {
        flex: 1 // Égal partage de l'espace entre les deux conteneurs
    },
    rightContainer: {
        flex: 2, // Égal partage de l'espace entre les deux conteneurs
        marginLeft: 10 // Marge entre les deux conteneurs
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
        borderRadius: 15
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    rating: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    prepTime: {
        fontSize: 16,
        fontWeight: 'bold'
    },

    mainIngredients: {
        fontSize: 16
    },

    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    createdBy: {
        fontSize: 16,
        textAlign: 'left'
    },
    tags: {
        fontSize: 16
    }
});

const RecipeItem: React.FC<RecipeItemProps> = ({
    image,
    name,
    rating,
    numRatings,
    prepTime,
    difficulty,
    ecoScore,
    mainIngredients,
    createdBy,
    tags
}) => {
    return (
        <View style={styles.wrapper}>
            <View style={styles.container}>
                <View style={styles.leftContainer}>
                    <Image source={{ uri: image }} style={styles.image} />
                </View>
                <View style={styles.rightContainer}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.rating}>
                        {rating} / 5 ({numRatings} évaluations)
                    </Text>
                    <Text style={styles.prepTime}>
                        {prepTime} {' • '} {difficulty} {' • '} Score : {ecoScore}
                    </Text>
                    <Text style={styles.mainIngredients}>{mainIngredients.join(', ')}</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={styles.createdBy}>{createdBy}</Text>
                <Text style={styles.tags}>{tags.join(', ')}</Text>
            </View>
        </View>
    );
};

export default RecipeItem;
