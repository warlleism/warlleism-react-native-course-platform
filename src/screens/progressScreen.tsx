
import React from 'react';
import { View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import useBearStore from '../context/darkModeStore';
import useColorMode from '../context/darkModeStore';

const ProgressScreen = () => {

    const alterColorMode = useBearStore((state) => state.alterColorMode)
    const colorMode = useColorMode((state) => state.colorMode)

    return (
        <>
            <View style={{
                paddingTop: 60,
                backgroundColor: colorMode === 'dark' ? "#212121" : "#fff"
            }}>
                <Picker
                    style={{ color: colorMode === 'dark' ? "#fff" : "#212121" }}
                    selectedValue={colorMode}
                    onValueChange={(itemValue, itemIndex) =>
                        alterColorMode(itemValue)
                    }>
                    <Picker.Item label="Selecione" value="" />
                    <Picker.Item label="Modo Escuro" value="dark" />
                    <Picker.Item label="Modo Claro" value="light" />
                </Picker>
            </View>
        </>
    );
}


export default ProgressScreen;
