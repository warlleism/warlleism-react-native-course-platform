import React, { useState } from "react";
import { Dimensions, StyleSheet, Text, View, ScrollView, TouchableOpacity, TextInput } from "react-native";
import useCoursesStore from "../context/cursesStore";
import ArrowBack from "../components/ArrowBack";
import useTheme from "../hooks/useTheme";
import { AntDesign, Entypo, Feather } from '@expo/vector-icons';

const { width } = Dimensions.get('screen')

const ClassRoom = () => {

    const classes = useCoursesStore((state) => state.classes);
    const [text, setText] = useState('');
    const { styles: style } = useTheme()
    console.log(classes)
    return (
        <ScrollView style={{ backgroundColor: style.backgroundColor }}>
            <ArrowBack title={String(classes?.titulo)} route={'Course'} />
            <View style={styles.container}>
                <View style={{ width: "98%", alignSelf: "center" }}>
                    <View style={{
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: 15,
                        alignSelf: "center",
                        width: "100%",
                        height: 300,
                        backgroundColor: "#0d0d0d"
                    }}>
                        <TouchableOpacity>
                            <AntDesign name="playcircleo" size={70} color="#6100FF" />
                        </TouchableOpacity>
                    </View>
                    <Text style={[{ marginTop: 10, marginBottom: 30, fontSize: 15, fontWeight: '300' }, { color: style.colorText }]}>{classes?.descricao}</Text>

                    <View>
                        <Text style={[{ color: "#fff", fontWeight: '900', marginBottom: 10 }, { color: style.colorText, borderColor: style.colorText }]}>Alguma dúvida?</Text>
                        <TextInput
                            style={[styles.textInput, { color: style.colorText, borderColor: style.colorText }]}
                            multiline={true}
                            numberOfLines={4}
                            onChangeText={setText}
                            placeholderTextColor={style.colorText}
                            value={text}
                            placeholder="Escreva suas dúvidas aqui..."
                        />
                        <TouchableOpacity style={styles.button}>
                            <Text style={{ fontSize: 20, color: "#fff", fontWeight: '400' }}>Enviar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: width - 10,
        alignSelf: 'center'
    }, textInput: {
        borderWidth: 1,
        borderRadius: 5,
        padding: 10,
        width: '100%',
        minHeight: 100,
    }, button: {
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#6100FF',
        borderRadius: 5,
        padding: 10,
        width: '100%',
    }
})

export default ClassRoom;
