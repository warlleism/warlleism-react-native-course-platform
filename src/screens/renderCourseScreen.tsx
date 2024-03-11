import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View, ScrollView, ImageBackground, TouchableOpacity } from "react-native";
import useCoursesStore from "../context/cursesStore";
import { AntDesign } from '@expo/vector-icons';
import ArrowBack from "../components/ArrowBack";
import ContentLoader, { Rect } from 'react-content-loader/native'
import UndefinedCurseSelect from "../components/undefinedCurseSelect";
import useTheme from "../hooks/useTheme";

const { width, height } = Dimensions.get('screen')

const RenderCourse = () => {

    const courses = useCoursesStore((state) => state.courses);
    const { styles: style } = useTheme()


    const [showCourse, setShowCourse] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowCourse(false)
        }, 700)
    }, [])


    return (
        <ScrollView style={{ backgroundColor: style.backgroundColor }}>
            <ArrowBack title={String(courses?.disciplina)} route={'Other'} />
            <View style={styles.container}>
                {!showCourse ? (
                    courses === null ?
                        <UndefinedCurseSelect />
                        :
                        <View style={{ width: "98%", alignSelf: "center" }}>
                            <ImageBackground
                                source={courses?.img}
                                style={{ borderRadius: 10, alignSelf: "center", width: "100%", height: 160, overflow: "hidden" }}>
                            </ImageBackground>
                            <Text style={[{ marginTop: 10, fontSize: 15, fontWeight: '300' }, { color: style.colorText }]}>{courses?.descricao}</Text>

                            <View style={{ marginTop: 30 }}>
                                {
                                    courses?.aulas.map((item, index) => (
                                        <TouchableOpacity key={index} style={styles.aulasContainer}>
                                            <View style={{ width: '80%' }}>
                                                <Text style={[{ marginBottom: 5, fontSize: 15, backgroundColor: "#00b9cf4f", borderRadius: 10, width: 60, textAlign: "center" }, { color: style.colorText }]}>Aula: {item.id}</Text>
                                                <Text style={[{ fontSize: 15 }, { color: style.colorText }]}>{item.titulo}</Text>
                                                <Text style={[{ fontSize: 10 }, { color: style.colorText }]}>{item.duracao}</Text>
                                            </View>
                                            <View style={{ width: '20%', display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                <AntDesign name="playcircleo" size={30} color="#00b9cf4f" />
                                            </View>
                                        </TouchableOpacity>
                                    ))
                                }
                            </View>
                        </View>
                ) : (
                    <>
                        <ScrollView>
                            <View style={{ height: height }}>
                                <ContentLoader
                                    speed={2}
                                    width="100%"
                                    height={"100%"}
                                    backgroundColor="#f3f3f3"
                                    foregroundColor="#605f5f"
                                >
                                    <Rect x="7" y="17" rx="4" ry="4" width="95%" height="120" />
                                    <Rect x="7" y="160" rx="3" ry="3" width="95%" height="40" />
                                    <Rect x="7" y="220" rx="3" ry="3" width="95%" height="60" />
                                    <Rect x="7" y="290" rx="3" ry="3" width="95%" height="60" />
                                    <Rect x="7" y="360" rx="3" ry="3" width="95%" height="60" />
                                    <Rect x="7" y="430" rx="3" ry="3" width="95%" height="60" />
                                </ContentLoader>
                            </View>
                        </ScrollView>


                    </>
                )}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: width - 10,
        alignSelf: 'center'
    },
    aulasContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 13,
        marginBottom: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#00b9cf4f",
    }
})
export default RenderCourse;
