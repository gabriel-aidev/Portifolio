import homeYou from '../../../../assets/projectsVideos/HomeYou.mp4';
import homeYouLogo from '../../../../assets/projectsVideos/homeYouLogo.jpg';
import eCommerceLogo from '../../../../assets/projectsVideos/eCommerceLogo.png';
import kenzieHubLogo from '../../../../assets/projectsVideos/kenzieHubLogo.png';
import KenzieHub from '../../../../assets/projectsVideos/KenzieHub.mp4';
import Hamburgueria from '../../../../assets/projectsVideos/Hamburgueria.mp4';
import controlePontosLogo from '../../../../assets/projectsVideos/controledepontosLogo.png';
import controlePontos from '../../../../assets/projectsVideos/controlePontos.mp4';
import revelaArvore from '../../../../assets/projectsVideos/revelaArvore.mp4';
import revelaArvorePoster from '../../../../assets/projectsVideos/revelaArvorePoster.jpg';
import revelaApp from '../../../../assets/projectsVideos/revelaApp.mp4';
import revelaAppPoster from '../../../../assets/projectsVideos/revelaAppPoster.jpg';
import donaldoGalpao from '../../../../assets/projectsVideos/donaldoGalpao.mp4';
import donaldoGalpaoPoster from '../../../../assets/projectsVideos/donaldoGalpaoPoster.jpg';
import donaldoSplash from '../../../../assets/projectsVideos/donaldoSplash.mp4';
import donaldoSplashPoster from '../../../../assets/projectsVideos/donaldoSplashPoster.jpg';

export interface FeaturedClip {
  src: string;
  poster: string;
  /** Descrição curta do que o clipe mostra, para leitores de tela. */
  label: string;
}

export interface FeaturedProject {
  name: string;
  /** `AAAA-MM`: mês de entrega, ou de início quando `since` é verdadeiro. */
  date: string;
  since?: boolean;
  /** HTML simples (só `<br/>`), renderizado com dangerouslySetInnerHTML. */
  description: string;
  video?: string;
  thumbnail?: string;
  /** Clipes ilustrativos em retrato, exibidos lado a lado em loop silencioso. */
  clips?: FeaturedClip[];
  /** Capa tipográfica para projetos privados, sem vídeo público. */
  cover?: {
    tagline: string;
    words: string[];
  };
  deploy?: string;
  repository?: string;
  /** Rota interna com o estudo de caso completo. */
  learnMore?: string;
}

export const projectsList: FeaturedProject[] = [
  {
    name: 'Donaldo OPS',
    date: '2026-07',
    since: true,
    description:
      'Plataforma de operações logísticas de última milha, em produção. Integra quatro transportadoras num único fluxo: o motorista bipa, coleta e dá baixa pelo app, mesmo sem sinal; a equipe interna aloca rotas e acompanha tudo numa torre de controle. <br/> <br/> Monorepo Nx com API NestJS sobre Fastify, Prisma e PostgreSQL; admin web em Next.js; app de campo em Expo e React Native com fila de sincronização offline, câmera e OCR. Integrações mapeadas por captura de tráfego real, padrão Outbox com idempotência e 46 migrations num banco único de produção. <br/> <br/> Código privado do cliente.',
    clips: [
      {
        src: donaldoGalpao,
        poster: donaldoGalpaoPoster,
        label: 'Donaldo OPS em uso no galpão: pacotes no chão e o painel aberto num notebook',
      },
      {
        src: donaldoSplash,
        poster: donaldoSplashPoster,
        label: 'Animação de abertura do app Donaldo OPS com o logo',
      },
    ],
    learnMore: '/#pratica',
  },
  {
    name: 'Revela',
    date: '2026-09',
    since: true,
    description:
      'App web que trata o tarô como ferramenta de reflexão, sem misticismo: 78 cartas com significados documentados, 200 tiragens em que cada posição faz uma pergunta, e regras para ler as cartas em conjunto. <br/> <br/> É um domínio que combina bem com IA: vocabulário finito e tipado, relações entre cartas calculáveis em código e um acervo de 53 livros para recuperar trechos e citar por autor. A tutora não responde pela pessoa: ela escreve a própria leitura, pede pistas, recebe feedback do que está apoiado nas cartas e compara com os autores. <br/> <br/> Monorepo Nx com Next.js 16, NestJS 11, Prisma 7 e PostgreSQL com pgvector; Gemini com saída estruturada validada por Zod; 268 testes em Vitest e 30 specs Playwright. Em desenvolvimento, código privado.',
    clips: [
      {
        src: revelaArvore,
        poster: revelaArvorePoster,
        label: 'Ilustração do Revela: uma árvore com cartas de tarô nos galhos',
      },
      {
        src: revelaApp,
        poster: revelaAppPoster,
        label: 'Ilustração do Revela: o app aberto num celular sobre uma mesa',
      },
    ],
    learnMore: '/#pratica',
  },
  {
    name: 'Controle de Pontos',
    date: '2023-08',
    description:
      'Projeto a principio pessoal para estudos, que acabou evoluindo e se tornando meu primeiro trabalho freelance como desenvolvedor. <br/> <br/> Aplicação Front End, utilizando React.js, consome a API do discord para mapear pontos de entrada e saída de serviço. Trata esses dados e exibe de forma intuitiva e simples a quantidade de horas e os dias que determinado funcionário esteve presente, sendo possível aplicar filtros por data, nome, id. <br/> <br/> É possível ver em um gráfico a quantidade e quem quem esteve em serviço em cada dia, entre outras funcionalidades melhores apresentadas no vídeo.',
    video: controlePontos,
    thumbnail: controlePontosLogo,
  },
  {
    name: 'HomeYou',
    date: '2023-03',
    description:
      'Resultado do trabalho de conclusão do curso de Front End da Kenzie Academy Brasil. Uma plataforma intuitiva, ágil e responsiva para aluguel de casas. Onde o usuário pode se cadastrar, fazer login, acessar o acervo de casas e datas disponíveis, cadastrar, editar, deletar casas que possui e realizar, editar ou cancelar reservas. <br/> <br/> Projeto realizado em equipe no modelo Mínimo Produto Viável com prazo definido para planejamento e execução em aproximadamente uma semana. Configuramos um Json Server para ser o database, tecnologias usadas no Front End:  React, Javascript, Typescript, CSS e HTML.',
    video: homeYou,
    thumbnail: homeYouLogo,
    deploy: 'https://home-you-kenzie-m3.vercel.app',
    repository: 'https://github.com/HomeYou-Kenzie-Academy-t15-g4/HomeYou-Kenzie-m3',
  },
  {
    name: 'E Commerce - Hamburgueria',
    date: '2023-03',
    description:
      'Site de uma hamburgueria fictícia, onde o usuário pode se cadastrar, adicionar e remover produtos ao carrinho. <br/> <br/> Projeto MVP, realizado como entrega de uma Sprint do módulo de React no curso da Kenzie, consumindo uma API que armazena a lista de produtos e os usuários cadastrados. Meu primeiro projeto usando TypeScript. Tecnologias usadas no Front End:  React, Javascript, Typescript, CSS e HTML.',
    video: Hamburgueria,
    thumbnail: eCommerceLogo,
    deploy: 'https://kenzie-burguer-v2-template-pongsu.vercel.app/',
    repository:
      'https://github.com/Kenzie-Academy-Brasil-Developers/kenzie-burguer-v2-template-pongsu',
  },
  {
    name: 'Kenzie Hub',
    date: '2023-02',
    description:
      'Um dashboard para desenvolvedores registrarem suas informações pessoais e tecnologias que dominam. O site permite o cadastro, login, adicionar, editar e remover tecnologias. <br/> <br/> Projeto MVP, realizado como entrega de uma Sprint do módulo de React no curso da Kenzie, consumindo uma API que armazena a lista de usuários e suas tecnologias. Tecnologias usadas no Front End:  React, Javascript, CSS e HTML. ',
    video: KenzieHub,
    thumbnail: kenzieHubLogo,
    deploy: 'https://react-entrega-kenzie-hub-pongsu.vercel.app/login',
    repository:
      'https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-kenzie-hub--pongsu',
  },
];
