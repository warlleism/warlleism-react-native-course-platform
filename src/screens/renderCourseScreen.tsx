import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View, ScrollView, ImageBackground, TouchableOpacity, Modal, Pressable, Alert } from "react-native";
import useCoursesStore from "../context/cursesStore";
import { AntDesign, Entypo, Feather } from '@expo/vector-icons';
import ArrowBack from "../components/ArrowBack";
import ContentLoader, { Rect } from 'react-content-loader/native'
import UndefinedCurseSelect from "../components/undefinedCurseSelect";
import useTheme from "../hooks/useTheme";
import UseLessonData from "../hooks/useLessonData";

const { width, height } = Dimensions.get('screen')

const RenderCourse = () => {
    const courses = useCoursesStore((state) => state.courses);
    const { styles: style, colorMode } = useTheme()
    const [showCourse, setShowCourse] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);
    const { clearLocalStorage, saveLesson, getLesson, checkLesson } = UseLessonData();

    useEffect(() => {
        setTimeout(() => {
            setShowCourse(false)
        }, 700)
    }, [])

    useEffect(() => {
        getLesson()
    }, [])

    return (
        <ScrollView style={{ backgroundColor: style.backgroundColor }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(!modalVisible)}>
                <View style={styles.centeredView}>
                    <View style={[styles.modalView, { backgroundColor: style.backgroundColor === '#131313' ? '#1a1a1a' : "#fff" }]}>
                        <View style={{ display: "flex", flexDirection: "row", gap: 5, alignItems: "flex-start", justifyContent: "center", marginBottom: 10 }}>
                            <Feather name="alert-circle" size={24} color="#6100FF" />
                            <View style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "flex-end", marginBottom: 10 }}>
                                <Text style={[{ fontWeight: '700', fontSize: 15, letterSpacing: 1 }, { color: style.colorText }]} >Esta ação é irreversível!</Text>
                                <Text style={[{ fontWeight: '700', fontSize: 15, letterSpacing: 1 }, { color: style.colorText }]} >Deseja prosseguir?</Text>
                            </View>
                        </View>
                        <View style={{ display: "flex", flexDirection: "row", gap: 10 }}>
                            <Pressable
                                style={[styles.button, styles.buttonOpen]}
                                onPress={() => {
                                    setModalVisible(!modalVisible)
                                    clearLocalStorage(Number(courses?.id))
                                }}
                            >
                                <Text style={styles.textStyle}>Confirmar</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Cancelar</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>

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
                            <TouchableOpacity
                                style={{
                                    opacity: checkLesson?.some((lesson) => Number(lesson?.courseID) === courses.id) ? 1 : 0,
                                    alignSelf: 'flex-end', marginTop: 10, marginBottom: 10, display: "flex", flexDirection: "row", alignItems: "center", gap: 5
                                }}
                                onPress={() => setModalVisible(true)}
                            >
                                <Entypo name="trash" size={24} color="#6100FF" />
                                <Text style={[{ color: "#fff", fontWeight: '600' }, { color: style.colorText }]}>Limpar Progresso</Text>
                            </TouchableOpacity>


                            <View style={{ marginTop: 10 }}>
                                {
                                    courses?.aulas.map((item, index) => (
                                        <TouchableOpacity
                                            onPress={() => saveLesson(item.id, courses.id, item)}
                                            key={index}
                                            style={styles.aulasContainer}>
                                            <View style={{ width: '80%' }}>
                                                <Text style={{ marginBottom: 5, fontSize: 15, backgroundColor: "#6100FF", color: "#FFF", borderRadius: 10, width: 60, textAlign: "center" }}>Aula: {item.id}</Text>
                                                <Text style={[{ fontSize: 15 }, { color: style.colorText }]}>{item.titulo}</Text>
                                                <Text style={[{ fontSize: 10 }, { color: style.colorText }]}>{item.duracao}</Text>
                                            </View>
                                            <View style={{ width: '20%', display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                {checkLesson?.some(lesson => Number(lesson.courseID) === courses.id && lesson.lessonID === item.id) ? (
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
                                    backgroundColor={colorMode !== 'dark' ? "#cecece54" : "#7b7b7b54"}
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
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        borderRadius: 20,
        padding: 35,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        width: 100,
        borderRadius: 5,
        padding: 10,
        elevation: 2,
    },
    buttonClose: {
        backgroundColor: 'red',
    },
    buttonOpen: {
        backgroundColor: '#6100FF',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },

})

export default RenderCourse;
