import { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useCoursesStore from "../context/cursesStore";
import { useNavigation } from '@react-navigation/native';

const UseLessonData = () => {
    const checkLesson = useCoursesStore((state) => state.checkLesson);
    const setCheckLesson = useCoursesStore((state) => state.setCheckLesson);
    const deleteLesson = useCoursesStore((state) => state.deleteLesson);
    const choiseClass = useCoursesStore((state) => state.choiseClass);
    const navigation = useNavigation()

    const clearLocalStorage = async (id: number) => {
        try {
            await AsyncStorage.clear();
            deleteLesson(id)
        } catch (error) {
            console.error('Erro ao limpar o local storage:', error);
        }
    };

    const saveLesson = async (lessonID: number, courseID: number, data: any) => {
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
            choiseClass(data)
            navigation.navigate('Class' as never)
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
        getLesson();
    }, []);

    return { clearLocalStorage, saveLesson, getLesson, checkLesson };
};

export default UseLessonData;
