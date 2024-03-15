import { create } from 'zustand';
import { Disciplina } from '../interfaces/ICourse';

type Lesson = {
    lessonID: number;
    courseID: number;
};

type CoursesStore = {
    courses: Disciplina | null;
    checkLesson: Lesson[] | null;
    alterObj: (obj: Disciplina) => void;
    setCheckLesson: (obj: Lesson[]) => void;
    deleteLesson: (id: number) => void;
};

const useCoursesStore = create<CoursesStore>((set) => ({
    courses: null,
    checkLesson: null,
    alterObj: (obj: Disciplina) => set(() => ({ courses: obj })),
    setCheckLesson: (lessons: Lesson[]) => set(() => ({ checkLesson: lessons })),
    deleteLesson: (id: number) => set((state) => ({
        checkLesson: state.checkLesson?.filter((lesson) => Number(lesson.courseID) !== id) ?? null
    }))
}));

export default useCoursesStore;
