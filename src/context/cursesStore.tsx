import { create } from 'zustand';
import { Disciplina } from '../interfaces/ICourse';

type CoursesStore = {
    courses: Disciplina | null;
    alterObj: (obj: Disciplina) => void;
};

const useCoursesStore = create<CoursesStore>((set) => ({
    courses: null,
    alterObj: (obj: Disciplina) => set(() => ({ courses: obj })),
}));

export default useCoursesStore;
