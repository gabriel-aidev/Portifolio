/**
 * Etapas da trajetória, na ordem em que aconteceram. Fonte: conversa com o
 * Gabriel em 2026-09-23, GitHub (contas PONGSU e gabriel-aidev) e o README do
 * perfil. Nada aqui é estimativa.
 */

export type StoryFigureId =
  | 'servers'
  | 'pause'
  | 'automation'
  | 'course'
  | 'freelance'
  | 'route'
  | 'donaldo'
  | 'revela'
  | 'next';

export interface StoryStep {
  id: string;
  /** Rótulo do período, já em texto: "2007 a 2014", "Hoje". */
  period: string;
  title: string;
  paragraphs: string[];
  figure: StoryFigureId;
}

export const storySteps: StoryStep[] = [
  {
    id: 'servidores',
    period: '2007 a 2014',
    title: 'Servidores de jogo e primeiras automações',
    figure: 'servers',
    paragraphs: [
      'Comecei a programar por necessidade, na adolescência: automatizar tarefas repetitivas e integrar automações em jogos. Cheguei a colocar servidores de jogo no ar e a manter cerca de 100 usuários ativos, um número razoável para a época.',
      'Era tudo amador, feito durante o colégio. Mas foi onde aprendi o básico de manter algo funcionando para outras pessoas.',
    ],
  },
  {
    id: 'psicologia',
    period: '2015 a 2020',
    title: 'Psicologia e uma pausa',
    figure: 'pause',
    paragraphs: [
      'Depois do colégio entrei na faculdade de psicologia. A programação ficou de lado até a pandemia interromper o curso, em 2020.',
    ],
  },
  {
    id: 'sleep-bomb',
    period: '2020 a 2021',
    title: 'Sleep Bomb, a volta',
    figure: 'automation',
    paragraphs: [
      'Voltei a programar por um problema concreto: gerir os ganhos de um jogo NFT. Construí uma automação com reconhecimento de tela e execução de ações, permitida pelos criadores do jogo.',
      'Passou de mil usuários. As assinaturas iam de R$ 200 a R$ 1.500 e se pagavam em cerca de uma semana, o que explica a adesão.',
      'Acabou quando o jogo foi descontinuado: o produto dependia inteiramente de um terceiro. É a lição sobre dependência externa que mais uso hoje, e foi o que me fez decidir estudar programação a sério.',
    ],
  },
  {
    id: 'kenzie',
    period: '2022 a 2023',
    title: 'Kenzie Academy',
    figure: 'course',
    paragraphs: [
      'Em julho de 2022 entrei na Kenzie Academy Brasil. Em um ano passei por HTML, CSS e JavaScript, consumo de APIs, React com TypeScript e, depois, back-end com Node.js e TypeORM e com Python e Django.',
      'Foram dezenas de entregas versionadas no GitHub. O trabalho de conclusão do front-end, o HomeYou, foi feito em equipe, em uma semana, no modelo de MVP.',
    ],
  },
  {
    id: 'freelance',
    period: '2023',
    title: 'Primeiro trabalho pago',
    figure: 'freelance',
    paragraphs: [
      'Em agosto de 2023 entreguei meu primeiro freelance: o Controle de Pontos, um painel em React que lê a API do Discord e transforma entradas e saídas de serviço em horas trabalhadas, com filtros e gráficos.',
      'Começou como estudo pessoal e virou produto pago.',
    ],
  },
  {
    id: 'rota',
    period: '2023 a 2026',
    title: 'Na rota',
    figure: 'route',
    paragraphs: [
      'No fim de 2023 saí da programação e fui trabalhar como entregador numa operação de logística de última milha, em São Paulo. Sigo nessa função até hoje.',
      'Foram três anos vendo como um galpão funciona por dentro: bipagem, romaneio, baixa, o que acontece quando falta sinal e o que se perde quando o sistema não registra. Sem isso, o que veio depois não existiria.',
    ],
  },
  {
    id: 'donaldo',
    period: '2026',
    title: 'Donaldo OPS',
    figure: 'donaldo',
    paragraphs: [
      'Em junho de 2026 voltei a programar para resolver os problemas da minha própria rota. O que começou como um app pequeno virou o Donaldo OPS: um monorepo com API, torre de controle, app do motorista e serviço de WhatsApp, integrando quatro transportadoras.',
      'Hoje roda em produção numa operação de cerca de 5.000 pacotes por dia, 40 rotas e mais de 150 motoristas. O software é meu, e a operação usa por contrato. Os requisitos não chegam como tickets: saem da minha rota e do galpão.',
    ],
  },
  {
    id: 'revela',
    period: '2026',
    title: 'Revela e o trabalho com agentes de IA',
    figure: 'revela',
    paragraphs: [
      'Em setembro de 2026 comecei o Revela, um app de tarô com tutora de IA: motor determinístico de relações entre cartas, RAG sobre 53 livros e avaliação com juiz-modelo.',
      'Nos dois projetos trabalho com agentes de IA sob um contrato de governança que eu mesmo desenhei: skills de domínio, revisores independentes, hooks, CI e uma memória de decisões duráveis. Nada conta como pronto sem rodar o comando e ler a saída.',
    ],
  },
  {
    id: 'hoje',
    period: 'Hoje',
    title: 'O que procuro',
    figure: 'next',
    paragraphs: [
      'Me apresento como desenvolvedor fullstack e engenheiro de IA aplicada. Sei construir e operar um produto inteiro sozinho; quero fazer isso em equipe, em produto real, com a mesma disciplina de evidência.',
    ],
  },
];
