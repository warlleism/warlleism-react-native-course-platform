interface Aula {
    id: number;
    duracao: string;
    titulo: string;
    descricao: string;
    img: string;
    video: string;
}

export interface Disciplina {
    id: number;
    disciplina: string;
    img: string | null;
    descricao: string;
    qtdAulas: number;
    aulas: Aula[];
}


const img1: string = require('../assets/rocket1.jpg');
const img2: string = require('../assets/rocket2.jpg');
const img3: string = require('../assets/rocket3.jpg');
const img4: string = require('../assets/rocket4.jpg');
const img5: string = require('../assets/rocket5.jpg');

export const Aulas: Disciplina[] = [
    {
        id: 0,
        disciplina: 'Arquitetura de Sistemas',
        img: img1,
        descricao: 'Compreender os fundamentos da arquitetura de sistemas é essencial para qualquer desenvolvedor. Esta disciplina aborda os princípios e conceitos necessários para o desenvolvimento de sistemas robustos e escaláveis, incluindo a compreensão dos componentes básicos e padrões arquiteturais comuns. Os alunos serão capacitados para enfrentar desafios atuais e entender tendências em arquitetura de sistemas. Ao final, terão uma compreensão sólida dos conceitos essenciais para o design de sistemas de software modernos.',
        qtdAulas: 5,
        aulas: [
            { id: 1, duracao: '10:00 min', titulo: 'Introdução à Arquitetura de Sistemas', descricao: 'Esta aula fornece uma visão geral dos princípios e conceitos fundamentais da arquitetura de sistemas. Os alunos aprenderão sobre a importância da arquitetura de sistemas e sua relevância no desenvolvimento de software.', img: 'url_da_imagem1', video: 'url_do_video1' },
            { id: 2, duracao: '15:00 min', titulo: 'Componentes de um Sistema', descricao: 'Nesta aula, os alunos explorarão os elementos essenciais que compõem as arquiteturas de sistemas. Eles examinarão os diferentes componentes e sua interação dentro de um sistema de software.', img: 'url_da_imagem2', video: 'url_do_video2' },
            { id: 3, duracao: '09:00 min', titulo: 'Padrões Arquiteturais', descricao: 'Esta aula se concentra nos padrões arquiteturais comuns usados em sistemas de software. Os alunos aprenderão sobre os padrões de design mais populares e como aplicá-los em seus próprios projetos.', img: 'url_da_imagem3', video: 'url_do_video3' },
            { id: 4, duracao: '20:00 min', titulo: 'Desafios e Tendências', descricao: 'Na última aula, os alunos participarão de uma discussão sobre os desafios atuais e as tendências emergentes em arquitetura de sistemas. Eles analisarão as questões enfrentadas pelos arquitetos de software e explorarão as tecnologias emergentes que moldarão o futuro da arquitetura de sistemas.', img: 'url_da_imagem4', video: 'url_do_video4' },
        ],
    },
    {
        id: 1,
        disciplina: 'Desenvolvimento Web',
        img: img2,
        descricao: 'O desenvolvimento web é uma área em constante evolução. Esta disciplina oferece uma introdução aos conceitos e técnicas essenciais, abrangendo desde HTML5 e CSS3 até o desenvolvimento responsivo e o deployment de aplicações web. Os alunos serão guiados por uma jornada prática de aprendizado e, ao final, estarão capacitados a criar aplicações web modernas e responsivas, utilizando as ferramentas mais recentes disponíveis.',
        qtdAulas: 10,
        aulas: [
            { id: 1, duracao: '15:00 min', titulo: 'HTML5 e CSS3', descricao: 'Nesta aula introdutória, os alunos aprenderão os fundamentos de marcação e estilo para o desenvolvimento web. Eles explorarão as novas características do HTML5 e as técnicas avançadas de estilização oferecidas pelo CSS3.', img: 'url_da_imagem5', video: 'url_do_video5' },
            { id: 2, duracao: '12:30 min', titulo: 'JavaScript Básico', descricao: 'Esta aula oferece uma introdução aos conceitos básicos de JavaScript. Os alunos aprenderão sobre variáveis, tipos de dados, estruturas de controle e muito mais.', img: 'url_da_imagem6', video: 'url_do_video6' },
            { id: 3, duracao: '18:45 min', titulo: 'Frameworks Frontend', descricao: 'Os alunos explorarão os frameworks populares para o desenvolvimento frontend nesta aula. Eles analisarão os recursos e funcionalidades de frameworks como React.js, Angular e Vue.js.', img: 'url_da_imagem7', video: 'url_do_video7' },
            { id: 4, duracao: '14:20 min', titulo: 'Desenvolvimento Responsivo', descricao: 'Nesta aula, os alunos aprenderão técnicas para criar interfaces responsivas que se adaptam a diferentes dispositivos e tamanhos de tela. Eles explorarão as media queries e outras técnicas essenciais para o desenvolvimento responsivo.', img: 'url_da_imagem8', video: 'url_do_video8' },
            { id: 5, duracao: '25:30 min', titulo: 'React.js Fundamentals', descricao: 'Os princípios fundamentais do React.js são abordados nesta aula. Os alunos aprenderão sobre componentes, props, state e muito mais, preparando-os para construir interfaces interativas e dinâmicas.', img: 'url_da_imagem9', video: 'url_do_video9' },
            { id: 6, duracao: '11:15 min', titulo: 'Node.js para Iniciantes', descricao: 'Nesta aula introdutória ao Node.js, os alunos aprenderão sobre o ambiente de execução JavaScript do lado do servidor. Eles explorarão os conceitos básicos e criarão suas primeiras aplicações usando Node.js.', img: 'url_da_imagem10', video: 'url_do_video10' },
            { id: 7, duracao: '14:50 min', titulo: 'Banco de Dados SQL', descricao: 'Os conceitos básicos de bancos de dados SQL são apresentados nesta aula. Os alunos aprenderão sobre consultas, inserções, atualizações e exclusões de dados em um banco de dados relacional.', img: 'url_da_imagem11', video: 'url_do_video11' },
            { id: 8, duracao: '16:30 min', titulo: 'Autenticação e Autorização', descricao: 'Nesta aula, os alunos explorarão técnicas de autenticação e autorização em aplicações web. Eles aprenderão sobre tokens JWT, sessões de usuário e estratégias de autenticação.', img: 'url_da_imagem12', video: 'url_do_video12' },
            { id: 9, duracao: '13:45 min', titulo: 'Testes de Software', descricao: 'Os alunos aprenderão práticas e ferramentas para realizar testes de software de forma eficiente nesta aula. Eles explorarão diferentes tipos de testes e aprenderão a escrever testes automatizados.', img: 'url_da_imagem13', video: 'url_do_video13' },
            { id: 10, duracao: '22:10 min', titulo: 'Deploy de Aplicações', descricao: 'Nesta aula final, os alunos aprenderão sobre os processos e estratégias para realizar o deploy de aplicações web. Eles explorarão diferentes plataformas de hospedagem e técnicas para garantir um deployment suave.', img: 'url_da_imagem14', video: 'url_do_video14' },
            { id: 11, duracao: '17:40 min', titulo: 'Web Design Avançado', descricao: 'Técnicas avançadas de design para aprimorar a experiência do usuário são abordadas nesta aula. Os alunos aprenderão sobre animações, microinterações, acessibilidade e muito mais.', img: 'url_da_imagem15', video: 'url_do_video15' },
        ],
    },
    {
        id: 2,
        disciplina: 'JavaScript Avançado',
        img: img3,
        descricao: 'JavaScript é uma linguagem poderosa e versátil, e esta disciplina explora seus conceitos avançados. Desde a programação orientada a objetos até a manipulação avançada de DOM e o tratamento de assincronia, os alunos mergulharão nas capacidades avançadas do JavaScript. Estratégias avançadas de teste e depuração são discutidas para garantir código JavaScript robusto e livre de erros.',
        qtdAulas: 6,
        aulas: [
            { id: 1, duracao: '14:20 min', titulo: 'Programação Orientada a Objeto', descricao: 'Nesta aula, os alunos explorarão os princípios e práticas da programação orientada a objetos em JavaScript. Eles aprenderão sobre encapsulamento, herança, polimorfismo e muito mais.', img: 'url_da_imagem9', video: 'url_do_video9' },
            { id: 2, duracao: '17:30 min', titulo: 'Manipulação de DOM Avançada', descricao: 'Os alunos aprenderão técnicas avançadas para manipular o Document Object Model em JavaScript nesta aula. Eles explorarão APIs avançadas, como WebSockets e Web Workers, e criarão interfaces de usuário dinâmicas e interativas.', img: 'url_da_imagem10', video: 'url_do_video10' },
            { id: 3, duracao: '11:45 min', titulo: 'Assincronia em JavaScript', descricao: 'Nesta aula, os alunos compreenderão o modelo de execução assíncrona em JavaScript. Eles aprenderão sobre callbacks, Promises, async/await e como lidar com tarefas assíncronas de forma eficiente.', img: 'url_da_imagem11', video: 'url_do_video11' },
            { id: 4, duracao: '19:10 min', titulo: 'Testes e Depuração Avançados', descricao: 'Estratégias avançadas para testar e depurar código JavaScript são discutidas nesta aula. Os alunos aprenderão sobre ferramentas de teste, técnicas de depuração e melhores práticas para garantir a qualidade do código JavaScript.', img: 'url_da_imagem12', video: 'url_do_video12' },
        ],
    },
    {
        id: 3,
        disciplina: 'Frameworks Frontend',
        img: img4,
        descricao: 'Os frameworks frontend desempenham um papel crucial no desenvolvimento de aplicações web modernas e eficientes. Nesta disciplina, os alunos explorarão os principais frameworks frontend, como React.js, Angular e Vue.js. Eles compreenderão as características distintivas de cada framework e aprenderão a escolher a melhor ferramenta para o trabalho. Além disso, uma análise comparativa entre esses frameworks será realizada para ajudar os alunos a tomar decisões informadas em seus projetos de desenvolvimento.',
        qtdAulas: 5,
        aulas: [
            { id: 1, duracao: '25:30 min', titulo: 'React.js Fundamentals', descricao: 'Esta aula aborda os princípios fundamentais do framework React.js. Os alunos aprenderão sobre componentes, props, state e o ciclo de vida do componente, preparando-os para construir aplicações web interativas e dinâmicas.', img: 'url_da_imagem13', video: 'url_do_video13' },
            { id: 2, duracao: '18:15 min', titulo: 'Angular Essentials', descricao: 'Nesta aula, os alunos serão apresentados aos conceitos essenciais do framework Angular. Eles aprenderão sobre módulos, componentes, serviços e roteamento, essenciais para o desenvolvimento de aplicações web escaláveis.', img: 'url_da_imagem14', video: 'url_do_video14' },
            { id: 3, duracao: '14:50 min', titulo: 'Vue.js Introduction', descricao: 'Os alunos terão uma introdução ao framework Vue.js nesta aula. Eles explorarão suas características distintivas, como binding bidirecional, componentização e reatividade, e aprenderão a construir aplicações web eficientes usando Vue.js.', img: 'url_da_imagem15', video: 'url_do_video15' },
            { id: 4, duracao: '21:05 min', titulo: 'Comparação de Frameworks', descricao: 'Nesta aula final, uma análise comparativa entre React.js, Angular e Vue.js será realizada. Os alunos entenderão as vantagens e desvantagens de cada framework e aprenderão a escolher a melhor ferramenta para seus projetos.', img: 'url_da_imagem16', video: 'url_do_video16' },
        ],
    },
    {
        id: 4,
        disciplina: 'Design Responsivo',
        img: img5,
        descricao: 'Os frameworks frontend são essenciais para o desenvolvimento de aplicações web modernas. Nesta disciplina, os alunos explorarão React.js, Angular e Vue.js, compreendendo suas características distintivas e aprendendo a escolher a melhor ferramenta para cada projeto. Uma análise comparativa entre esses frameworks será realizada, capacitando os alunos a tomar decisões informadas em seus projetos de desenvolvimento.',
        qtdAulas: 5,
        aulas: [
            { id: 1, duracao: '18:00 min', titulo: 'Princípios do Design Responsivo', descricao: 'Nesta aula introdutória, os alunos aprenderão os fundamentos e abordagens para criar designs responsivos. Eles entenderão a importância do design responsivo no contexto atual da web e os benefícios que ele proporciona.', img: 'url_da_imagem17', video: 'url_do_video17' },
            { id: 2, duracao: '12:45 min', titulo: 'Media Queries e Flexbox', descricao: 'Os alunos explorarão o uso de media queries e flexbox para criar layouts responsivos nesta aula. Eles aprenderão como adaptar o conteúdo e o design de uma página com base no tamanho da tela e nas características do dispositivo.', img: 'url_da_imagem18', video: 'url_do_video18' },
            { id: 3, duracao: '16:20 min', titulo: 'Bootstrap Framework', descricao: 'Nesta aula, os alunos serão introduzidos ao framework Bootstrap e suas capacidades para o design responsivo. Eles explorarão os componentes e utilitários do Bootstrap para criar interfaces consistentes e adaptáveis.', img: 'url_da_imagem19', video: 'url_do_video19' },
            { id: 4, duracao: '22:30 min', titulo: 'Desafios Práticos', descricao: 'Os alunos enfrentarão desafios práticos nesta última aula, aplicando seus conhecimentos de design responsivo em projetos do mundo real. Eles resolverão problemas comuns encontrados no desenvolvimento web e ganharão confiança em suas habilidades.', img: 'url_da_imagem20', video: 'url_do_video20' },
        ],
    },
];
