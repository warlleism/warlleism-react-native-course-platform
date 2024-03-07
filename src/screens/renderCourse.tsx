import React, { useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View, ScrollView } from "react-native";
import useCoursesStore from "../context/cursesStore";

const { width, height } = Dimensions.get('screen')

const RenderCourse = () => {
    const courses = useCoursesStore((state) => state.courses);
    console.log(courses);
    const [showCourse, setShowCourse] = useState(false);

    const renderTime = () => {
        setTimeout(() => {
            setShowCourse(true)
        }, 2000)
    };

    useEffect(() => {
        renderTime()
    }, [])
    console.log(courses)
    return (
        <ScrollView>
            <View style={styles.container}>
                {showCourse ? (
                    <View>
                        <Text style={{fontSize: 30, fontWeight: '700'}}>{courses?.disciplina}</Text>
                    </View>
                ) : (
                    <Text>Carregando...</Text>
                )}
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        paddingTop: 100
    }
})
export default RenderCourse;
