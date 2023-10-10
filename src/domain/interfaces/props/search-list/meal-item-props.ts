import { MealType } from '~/domain/entities/constants/meal-page-meal-type';

export type MealItemProps = {
    title: string;
    score: number;
    nb_of_products: number;
    ingredients: string[];
    mealType: string[];
    mealDiet: string[];
}; // TODO: à modifier selon les besoins de la page Repas
