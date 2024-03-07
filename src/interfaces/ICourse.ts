interface Aula {
    id: number;
    descricao: string;
    img: string;
    audio: string;
    video: string;
}

export interface Disciplina {
    id: number;
    disciplina: string;
    img: string;
    qtdAulas: number;
    aulas: Aula[];
}

