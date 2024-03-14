import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View, ScrollView, ImageBackground, TouchableOpacity } from "react-native";
import useCoursesStore from "../context/cursesStore";
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import ArrowBack from "../components/ArrowBack";
import ContentLoader, { Rect } from 'react-content-loader/native'
import UndefinedCurseSelect from "../components/undefinedCurseSelect";
import useTheme from "../hooks/useTheme";
import AsyncStorage from '@react-native-async-storage/async-storage';


const { width, height } = Dimensions.get('screen')

const RenderCourse = () => {
    const courses = useCoursesStore((state) => state.courses);
    const checkLesson = useCoursesStore((state) => state.checkLesson);
    const setCheckLesson = useCoursesStore((state) => state.setCheckLesson);
    const deleteLesson = useCoursesStore((state) => state.deleteLesson);
    const { styles: style } = useTheme()
    const [showCourse, setShowCourse] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setShowCourse(false)
        }, 700)
    }, [])

    const clearLocalStorage = async (id: string) => {
        try {
            await AsyncStorage.clear();
            deleteLesson(id)
        } catch (error) {
            console.error('Erro ao limpar o local storage:', error);
        }
    };


    const saveLesson = async (lessonID: string, courseID: string) => {
        try {
            const lessonData = await AsyncStorage.getItem('lessonData');
            let lessonDataObject = lessonData ? JSON.parse(lessonData) : [];
            if (lessonDataObject !== null) {
                lessonDataObject.push({ lessonID, courseID });
                await AsyncStorage.setItem('lessonData', JSON.stringify(lessonDataObject));
                setCheckLesson(lessonDataObject);
            } else {
                const obj = [{ lessonID, courseID }];
                await AsyncStorage.setItem('lessonData', JSON.stringify(obj));
                setCheckLesson(obj);
            }
        } catch (error) {
            console.error('Error saving lesson:', error);
        }
    };

    const getLesson = async () => {
        try {
            const lessonData = await AsyncStorage.getItem('lessonData');
            if (lessonData !== null) {
                setCheckLesson(JSON.parse(lessonData));
            } else {
                console.log('Nenhum dado da lição encontrado');
            }
        } catch (error) {
            console.error('Erro ao recuperar dados da lição:', error);
        }
    };

    useEffect(() => {
        getLesson()
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
                                style={{ borderRadius: 10, alignSelf: "center", width: "100%", height: 160, overflow: "hidden" }} />
                            <Text style={[{ marginTop: 10, marginBottom: 30, fontSize: 15, fontWeight: '300' }, { color: style.colorText }]}>{courses?.descricao}</Text>

                            {checkLesson?.some(lesson => lesson.courseID === courses.id) ? (
                                <TouchableOpacity
                                    style={{ alignSelf: 'flex-end', marginTop: 10, display: "flex", flexDirection: "row", alignItems: "center", gap: 5 }}
                                    onPress={() => clearLocalStorage(courses?.id)}>
                                    <MaterialIcons name="clear" size={24} color="#6100FF" />
                                    <Text style={{ color: "#fff", fontWeight: '600' }}>Limpar Progresso</Text>
                                </TouchableOpacity>
                            ) : false
                            }

                            <View style={{ marginTop: 10 }}>
                                {
                                    courses?.aulas.map((item, index) => (
                                        <TouchableOpacity
                                            onPress={() => saveLesson(item.id, courses.id)}
                                            key={index}
                                            style={styles.aulasContainer}>
                                            <View style={{ width: '80%' }}>
                                                <Text style={{ marginBottom: 5, fontSize: 15, backgroundColor: "#6100FF", color: "#FFF", borderRadius: 10, width: 60, textAlign: "center" }}>Aula: {item.id}</Text>
                                                <Text style={[{ fontSize: 15 }, { color: style.colorText }]}>{item.titulo}</Text>
                                                <Text style={[{ fontSize: 10 }, { color: style.colorText }]}>{item.duracao}</Text>
                                            </View>
                                            <View style={{ width: '20%', display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                {checkLesson?.some(lesson => lesson.courseID === courses.id && lesson.lessonID === item.id) ? (
                                                    <AntDesign name="check" size={30} color="#6100FF" />
                                                ) : (
                                                    <AntDesign name="playcircleo" size={30} color="#6100FF" />
                                                )
                                                }
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
        </ScrollView >
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
        borderColor: "#6100FF",
    }
})

export default RenderCourse;
