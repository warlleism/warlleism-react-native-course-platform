interface Aula {
    id: number;
    descricao: string;
    img: string;
    titulo: string;
    video: string;
}

export interface Disciplina {
    id: number;
    disciplina: string;
    titulo: string;
    descricao: string,
    img: string;
    qtdAulas: number;
    aulas: Aula[];
}

