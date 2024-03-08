import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View, ScrollView, ImageBackground, TouchableOpacity } from "react-native";
import useCoursesStore from "../context/cursesStore";
import useColorMode from "../context/darkModeStore";
import { AntDesign } from '@expo/vector-icons';
import ArrowBack from "../components/ArrowBack";
import ContentLoader, { Circle, Rect } from 'react-content-loader/native'

const { width, height } = Dimensions.get('screen')

const RenderCourse = () => {
    const courses = useCoursesStore((state) => state.courses);
    const colorMode = useColorMode((state) => state.colorMode);

    const style = {
        backgroundColor: colorMode === 'dark' ? "#212121" : "#f2f2f2",
        colorText: colorMode === 'dark' ? "#fff" : "#212121",
    };

    const [showCourse, setShowCourse] = useState(false);

    const renderTime = () => {
        setTimeout(() => {
            setShowCourse(true)
        }, 2000)
    };

    useEffect(() => {
        renderTime()
    }, [])


    return (
        <ScrollView style={{ backgroundColor: style.backgroundColor }}>
            <View style={styles.container}>
                <ArrowBack title={'Aulas'} />
                {showCourse ? (
                    <View style={{ width: "98%", alignSelf: "center", marginTop: 30 }}>
                        <ImageBackground
                            source={courses?.img}
                            style={{ borderRadius: 10, alignSelf: "center", width: "100%", height: 160, overflow: "hidden" }}>
                        </ImageBackground>
                        <Text style={[{ marginTop: 10, fontSize: 15, fontWeight: '300' }, { color: style.colorText }]}>{courses?.descricao}</Text>

                        <View style={{ marginTop: 30 }}>
                            {
                                courses?.aulas.map((item, index) => (
                                    <TouchableOpacity key={index} style={styles.aulasContainer}>
                                        <Text style={[{ fontSize: 20 }, { color: style.colorText }]}>Aula {item.id}</Text>
                                        <AntDesign name="playcircleo" size={30} color="#4100ff" />
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
                                    foregroundColor="#4100ff"
                                >
                                    <Rect x="20" y="17" rx="4" ry="4" width="90%" height="120" />
                                    <Rect x="20" y="160" rx="3" ry="3" width="90%" height="10" />
                                    <Rect x="20" y="175" rx="3" ry="3" width="90%" height="10" />
                                    <Rect x="20" y="190" rx="3" ry="3" width="90%" height="10" />
                                    <Rect x="20" y="220" rx="3" ry="3" width="90%" height="60" />
                                    <Rect x="20" y="290" rx="3" ry="3" width="90%" height="60" />
                                    <Rect x="20" y="360" rx="3" ry="3" width="90%" height="60" />
                                    <Rect x="20" y="430" rx="3" ry="3" width="90%" height="60" />
                                    <Rect x="20" y="500" rx="3" ry="3" width="90%" height="60" />
                                    <Rect x="20" y="570" rx="3" ry="3" width="90%" height="60" />
                                    <Rect x="20" y="640" rx="3" ry="3" width="90%" height="60" />
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
        width: width,
    },
    aulasContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: "row",
        paddingHorizontal: 10,
        paddingVertical: 15,
        marginBottom: 10,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#2c0eff96",
        backgroundColor: "#2000ff36",
    }
})
export default RenderCourse;
