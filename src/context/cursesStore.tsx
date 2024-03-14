import { create } from 'zustand';
import { Disciplina } from '../interfaces/ICourse';

type Lesson = {
    lessonID: string;
    courseID: string;
};

type CoursesStore = {
    courses: Disciplina | null;
    checkLesson: Lesson[] | null;
    alterObj: (obj: Disciplina) => void;
    setCheckLesson: (obj: Lesson[]) => void;
    deleteLesson: (id: string) => void;
};

const useCoursesStore = create<CoursesStore>((set) => ({
    courses: null,
    checkLesson: null,
    alterObj: (obj: Disciplina) => set(() => ({ courses: obj })),
    setCheckLesson: (lessons: Lesson[]) => set(() => ({ checkLesson: lessons })),
    deleteLesson: (id: string) => set((state) => ({
        checkLesson: state.checkLesson?.filter(lesson => lesson.courseID !== id) ?? null
    }))
}));

export default useCoursesStore;
