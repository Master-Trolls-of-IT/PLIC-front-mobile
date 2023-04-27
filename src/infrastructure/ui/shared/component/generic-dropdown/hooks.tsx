import React, { ReactElement, useRef, useState } from 'react';
import { TouchableOpacity, Text, FlatList, View, Modal } from 'react-native';
import GenericDropDownStyle from '~/infrastructure/ui/shared/component/generic-dropdown/generic-dropdown-style';

const useGenericDropDownData = (
    onSelect: (item: { label: string; value: string }) => void,
    data: { label: string; value: string }[]
) => {
    const DropdownButton = useRef<View>(null);
    const [visible, setVisible] = useState(false);
    const [selected, setSelected] = useState<{ label: string; value: string }>(data[0]);
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

    const onItemPress = (item: any): void => {
        setSelected(item);
        onSelect(item);
        setVisible(false);
    };

    const renderItem = ({ item }: any): ReactElement<any, any> => (
        <TouchableOpacity style={GenericDropDownStyle.item} onPress={() => onItemPress(item)}>
            <Text style={GenericDropDownStyle.itemText}>{item.label}</Text>
        </TouchableOpacity>
    );

    const renderDropdown = (): ReactElement<any, any> => {
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
