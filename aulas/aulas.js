const img1 = require('../assets/rocket1.jpg')
const img2 = require('../assets/rocket2.jpg')
const img3 = require('../assets/rocket3.jpg')

export const Aulas = [
    {
        id: 0,
        disciplina: 'Arquitetura de Sistemas',
        img: img1,
        descricao: 'Compreenda os fundamentos da arquitetura de sistemas, explorando princípios e conceitos essenciais para o desenvolvimento de sistemas robustos e escaláveis.',
        qtdAulas: 5,
        aulas: [
            { id: 1, titulo: 'Introdução à Arquitetura de Sistemas', descricao: 'Visão geral dos princípios e conceitos fundamentais.', img: 'url_da_imagem1', video: 'url_do_video1' },
            { id: 2, titulo: 'Componentes de um Sistema', descricao: 'Exploração dos elementos essenciais em arquiteturas de sistemas.', img: 'url_da_imagem2', video: 'url_do_video2' },
            { id: 3, titulo: 'Padrões Arquiteturais', descricao: 'Estudo dos padrões comuns usados em arquiteturas de sistemas.', img: 'url_da_imagem3', video: 'url_do_video3' },
            { id: 4, titulo: 'Desafios e Tendências', descricao: 'Discussão sobre os desafios atuais e tendências em arquitetura de sistemas.', img: 'url_da_imagem4', video: 'url_do_video4' },
        ],
    },
    {
        id: 1,
        disciplina: 'Desenvolvimento Web',
        img: img2,
        descricao: 'Explore os principais conceitos e técnicas no desenvolvimento web, desde HTML5 e CSS3 até frameworks front-end e design responsivo.',
        qtdAulas: 10,
        aulas: [
            { id: 1, titulo: 'HTML5 e CSS3', descricao: 'Fundamentos de marcação e estilo para desenvolvimento web.', img: 'url_da_imagem5', video: 'url_do_video5' },
            { id: 2, titulo: 'JavaScript Básico', descricao: 'Introdução aos conceitos básicos de JavaScript.', img: 'url_da_imagem6', video: 'url_do_video6' },
            { id: 3, titulo: 'Frameworks Frontend', descricao: 'Exploração de frameworks populares para o desenvolvimento frontend.', img: 'url_da_imagem7', video: 'url_do_video7' },
            { id: 4, titulo: 'Desenvolvimento Responsivo', descricao: 'Abordagem sobre técnicas para criar interfaces responsivas.', img: 'url_da_imagem8', video: 'url_do_video8' },
            { id: 5, titulo: 'React.js Fundamentals', descricao: 'Princípios fundamentais do React.js para construção de interfaces interativas.', img: 'url_da_imagem9', video: 'url_do_video9' },
            { id: 6, titulo: 'Node.js para Iniciantes', descricao: 'Introdução ao desenvolvimento backend com Node.js.', img: 'url_da_imagem10', video: 'url_do_video10' },
            { id: 7, titulo: 'Banco de Dados SQL', descricao: 'Conceitos básicos de bancos de dados SQL e suas operações.', img: 'url_da_imagem11', video: 'url_do_video11' },
            { id: 8, titulo: 'Autenticação e Autorização', descricao: 'Exploração de técnicas de autenticação e autorização em aplicações web.', img: 'url_da_imagem12', video: 'url_do_video12' },
            { id: 9, titulo: 'Testes de Software', descricao: 'Práticas e ferramentas para realizar testes de software de forma eficiente.', img: 'url_da_imagem13', video: 'url_do_video13' },
            { id: 10, titulo: 'Deploy de Aplicações', descricao: 'Processos e estratégias para realizar o deploy de aplicações web.', img: 'url_da_imagem14', video: 'url_do_video14' },
            { id: 11, titulo: 'Web Design Avançado', descricao: 'Técnicas avançadas de design para aprimorar a experiência do usuário.', img: 'url_da_imagem15', video: 'url_do_video15' },
        ],

    },
    {
        id: 2,
        disciplina: 'JavaScript Avançado',
        img: img3,
        descricao: 'Aprofunde-se nos conceitos avançados de JavaScript, abrangendo programação orientada a objetos, manipulação de DOM, assincronia e técnicas avançadas de teste e depuração.',
        qtdAulas: 6,
        aulas: [
            { id: 1, titulo: 'Programação Orientada a Objetos em JavaScript', descricao: 'Princípios e práticas de programação orientada a objetos em JavaScript.', img: 'url_da_imagem9', video: 'url_do_video9' },
            { id: 2, titulo: 'Manipulação de DOM Avançada', descricao: 'Técnicas avançadas para manipular o Document Object Model em JavaScript.', img: 'url_da_imagem10', video: 'url_do_video10' },
            { id: 3, titulo: 'Assincronia em JavaScript', descricao: 'Compreensão do modelo de execução assíncrona em JavaScript.', img: 'url_da_imagem11', video: 'url_do_video11' },
            { id: 4, titulo: 'Testes e Depuração Avançados', descricao: 'Estratégias avançadas para testar e depurar código JavaScript.', img: 'url_da_imagem12', video: 'url_do_video12' },
        ],
    },
    {
        id: 3,
        disciplina: 'Frameworks Frontend',
        img: img1,
        descricao: 'Aprofunde-se nos principais frameworks frontend, como React.js, Angular e Vue.js, e compreenda suas características distintivas.',
        qtdAulas: 5,
        aulas: [
            { id: 1, titulo: 'React.js Fundamentals', descricao: 'Princípios fundamentais do framework React.js.', img: 'url_da_imagem13', video: 'url_do_video13' },
            { id: 2, titulo: 'Angular Essentials', descricao: 'Conceitos essenciais para desenvolver com o framework Angular.', img: 'url_da_imagem14', video: 'url_do_video14' },
            { id: 3, titulo: 'Vue.js Introduction', descricao: 'Introdução ao framework Vue.js e suas características distintivas.', img: 'url_da_imagem15', video: 'url_do_video15' },
            { id: 4, titulo: 'Comparação de Frameworks', descricao: 'Análise comparativa entre React.js, Angular e Vue.js.', img: 'url_da_imagem16', video: 'url_do_video16' },
        ],
    },
    {
        id: 4,
        disciplina: 'Design Responsivo',
        img: img1,
        descricao: 'Aprenda os princípios do design responsivo, desde media queries e flexbox até a utilização do framework Bootstrap para criar layouts responsivos.',
        qtdAulas: 5,
        aulas: [
            { id: 1, titulo: 'Princípios do Design Responsivo', descricao: 'Fundamentos e abordagens para criar designs responsivos.', img: 'url_da_imagem17', video: 'url_do_video17' },
            { id: 2, titulo: 'Media Queries e Flexbox', descricao: 'Utilização de media queries e flexbox para layouts responsivos.', img: 'url_da_imagem18', video: 'url_do_video18' },
            { id: 3, titulo: 'Bootstrap Framework', descricao: 'Exploração do framework Bootstrap para design responsivo.', img: 'url_da_imagem19', video: 'url_do_video19' },
            { id: 4, titulo: 'Desafios Práticos', descricao: 'Aplicação prática de design responsivo em projetos do mundo real.', img: 'url_da_imagem20', video: 'url_do_video20' },
        ],
    },
];
