import { useState } from 'react';

interface UseMyRecipeItemData {
    deleteConfirmationModal: boolean;
    setDeleteConfirmationModal: React.Dispatch<React.SetStateAction<boolean>>;
    onDeleteRecipeModalPress: (recipeId: string) => void;
    onPressCancelDeleteModal: () => void;
    onDeleteConfirm: (recipeId: string) => void;
}

const useMyRecipeItemData = (): UseMyRecipeItemData => {
    const [deleteConfirmationModal, setDeleteConfirmationModal] = useState<boolean>(false);
    const [recipeIdToDelete, setRecipeIdToDelete] = useState<string | null>(null);

    const onDeleteRecipeModalPress = (recipeId: string) => {
        setRecipeIdToDelete(recipeId);
        setDeleteConfirmationModal(true);
    };

    const onPressCancelDeleteModal = () => {
        setRecipeIdToDelete(null);
        setDeleteConfirmationModal(false);
    };

    const onDeleteConfirm = (recipeId: string) => {
        console.log(`Suppression de la recette avec l'ID : ${recipeId}`);

        setRecipeIdToDelete(null);
        setDeleteConfirmationModal(false);
    };

    return {
        deleteConfirmationModal,
        setDeleteConfirmationModal,
        onDeleteRecipeModalPress,
        onPressCancelDeleteModal,
        onDeleteConfirm
    };
};

export default useMyRecipeItemData;
