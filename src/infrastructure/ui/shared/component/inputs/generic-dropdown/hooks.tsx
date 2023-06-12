import React, { ReactElement, useRef, useState } from 'react';
import { TouchableOpacity, Text, FlatList, View, Modal, TextInput } from 'react-native';
import GenericDropDownStyle from '~/infrastructure/ui/shared/component/inputs/generic-dropdown/generic-dropdown-style';

const useGenericDropDownData = (
    onSelect: ((item: { label: string; value: string }) => void) | undefined,
    data: { label: string; value: string }[] | undefined
) => {
    const DropdownButton = useRef<View | TextInput>(null);
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState<{ label: string; value: string }>(
        data !== undefined ? data[0] : { label: 'null', value: 'null' }
    );
    const [dropdownTop, setDropdownTop] = useState(0);
    const [dropdownLeft, setDropdownLeft] = useState(0);
    const [dropdownWidth, setDropdownWidth] = useState(0);

    const dropdownIcon = require('~/domain/entities/assets/icon/input-icon/icon-drop-down.svg');

    const openDropdown = (): void => {
        DropdownButton.current?.measure(
            (_x: number, _y: number, weight: number, height: number, pageX: number, pageY: number) => {
                setDropdownTop(pageY + height);
                setDropdownLeft(pageX);
                setDropdownWidth(weight);
            }
        );
        setVisible(true);
    };

    const toggleDropdown = (): void => {
        setVisible(() => {
            if (visible) return false;
            else {
                openDropdown();
                return true;
            }
        });
    };

    const onItemPress = (item: { label: string; value: string }): void => {
        setSelected(item);
        if (onSelect) {
            onSelect(item);
        }
        setVisible(false);
    };

    const renderItem = ({ item }: { item: { label: string; value: string } }): ReactElement => (
        <TouchableOpacity style={GenericDropDownStyle.item} onPress={() => onItemPress(item)}>
            <Text style={GenericDropDownStyle.itemText}>{item.label}</Text>
        </TouchableOpacity>
    );

    const renderDropdown = (): ReactElement => {
        return (
            <Modal visible={visible} transparent animationType="fade">
                <TouchableOpacity style={GenericDropDownStyle.overlay} onPress={() => setVisible(false)}>
                    <View
                        style={[
                            GenericDropDownStyle.dropdown,
                            { top: dropdownTop, left: dropdownLeft, width: dropdownWidth }
                        ]}>
                        <FlatList
                            data={data}
                            renderItem={renderItem}
                            keyExtractor={(item, index) => index.toString()}
                        />
                    </View>
                </TouchableOpacity>
            </Modal>
        );
    };

    return {
        visible,
        selected,
        dropdownIcon,
        renderDropdown,
        renderItem,
        toggleDropdown,
        DropdownButton
    };
};

export default useGenericDropDownData;
