import React from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";

import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import useColorMode from "../../context/darkModeStore";

const { width, height } = Dimensions.get('screen')

const UndefinedCurseSelect = () => {

    const navigation = useNavigation()
    const colorMode = useColorMode((state) => state.colorMode);

    const style = {
        backgroundColor: colorMode === 'dark' ? "#001817" : "#f2f2f2",
        colorText: colorMode === 'dark' ? "#fff" : "#001817",
    };

    return (
        <View style={{
            width: width,
            height: height - 170,
            justifyContent: "center",
            alignItems: "center"
        }}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Other' as never)}
                style={{
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 30,
                }}>
                <Ionicons
                    name={'school'} size={64}
                    color={style.colorText}
                    style={{
                        width: '10%',
                        padding: 20,
                        borderRadius: 100,
                        borderWidth: 2,
                        borderColor: "#00b9cf4f",
                    }}
                />
                <Text style={{ color: style.colorText }}>CLIQUE AQUI E INICIE SEUS ESTUDOS</Text>
            </TouchableOpacity>
        </View>
    )
}

export default UndefinedCurseSelect;