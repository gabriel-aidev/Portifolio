/**
 * Conteúdo dos projetos em andamento (2026), usados na seção "Em prática agora"
 * da Home e no carrossel de destaques. Tudo aqui foi conferido no código dos
 * repositórios; nada é estimativa.
 */

export interface PracticeLearning {
  title: string;
  body: string;
}

export interface PracticeStackGroup {
  label: string;
  items: string[];
}

export interface PracticeFact {
  value: string;
  label: string;
}

export interface PracticeProject {
  id: string;
  name: string;
  tagline: string;
  role: string;
  /** Mês de início no formato `AAAA-MM`. Projeto segue em andamento. */
  since: string;
  status: string;
  /** Um ou mais parágrafos de apresentação. */
  summary: string[];
  stack: PracticeStackGroup[];
  learnings: PracticeLearning[];
  facts: PracticeFact[];
}

export const practiceProjects: PracticeProject[] = [
  {
    id: 'donaldo',
    name: 'Donaldo OPS',
    tagline: 'Plataforma de operações logísticas de última milha',
    role: 'Fullstack e mobile, solo, trabalhando com agentes de IA',
    since: '2026-07',
    status: 'Em produção',
    summary: [
      'Um sistema só para quatro transportadoras: o motorista bipa, coleta e dá baixa pelo app, mesmo sem sinal; a equipe interna aloca rotas e acompanha tudo numa torre de controle. Regra de negócio vive só no back-end, e nenhuma operação pode se perder em silêncio.',
    ],
    stack: [
      {
        label: 'Back-end',
        items: ['NestJS', 'Fastify', 'Prisma', 'PostgreSQL', 'Redis', 'Socket.io', 'Zod', 'Pino'],
      },
      {
        label: 'Web',
        items: ['Next.js 16', 'React 19', 'Tailwind', 'Zustand', 'Leaflet', 'ECharts'],
      },
      {
        label: 'Mobile',
        items: [
          'Expo',
          'React Native',
          'NativeWind',
          'TanStack Query',
          'Vision Camera',
          'ML Kit OCR',
        ],
      },
      {
        label: 'Entrega',
        items: [
          'Nx',
          'Jest',
          'Playwright',
          'GitHub Actions',
          'Docker',
          'Coolify',
          'Vercel',
          'EAS e OTA',
        ],
      },
    ],
    learnings: [
      {
        title: 'Integrações por captura de tráfego real',
        body: 'Devido à ausência de documentações das APIs. Mapeei as quatro transportadoras manualmente. Nenhum campo ou header é inferido: tudo vem de captura, classificada em constante e mutável.',
      },
      {
        title: 'Sessão de terceiro como máquina de estados',
        body: 'A sessão do TMS da transportadora tem sete estados e uma janela de inatividade medida em 30 minutos, com margem de segurança. Cookies e CSRF são reaproveitados em vez de relogar a cada chamada.',
      },
      {
        title: 'API que falha fechada',
        body: 'Se a transportadora cai, a busca de motoristas devolve 503 com o motivo, em vez de cair num fallback silencioso do banco. Lista incompleta e serviço indisponível recebem respostas diferentes.',
      },
      {
        title: 'Entrega confiável sem broker',
        body: 'Padrão Outbox implementado à mão: tabela de jobs, worker com identidade e desligamento gracioso, erros classificados em retryable, non-retryable e unknown outcome, e chave de idempotência de ponta a ponta.',
      },
      {
        title: 'App de campo offline-first',
        body: 'Fila de sincronização persistente, fotos de comprovante, rastreio de localização em segundo plano e leitura de código de barras pela câmera com OCR nativo. O app salva local primeiro e sincroniza quando o sinal volta.',
      },
      {
        title: 'Modelagem do domínio em Prisma',
        body: '64 modelos e 46 migrations versionadas em PostgreSQL: eventos operacionais brutos com read models por pacote, motorista e rota, geocercas de território com versão de geometria, e trilhas de auditoria e de integração para reconstruir o que aconteceu.',
      },
      {
        title: 'Segurança por evidência',
        body: 'Credenciais cifradas em AES-256-GCM, variáveis de ambiente validadas com Zod na inicialização, Authorization mascarado no log. O que ainda não foi comprovado fica registrado como pendência.',
      },
      {
        title: 'Monorepo com gates de governança',
        body: 'Três repositórios consolidados num monorepo Nx, migrados por etapas com 12 gates validados por script e um preflight que trava o SHA de cada origem. A CI declara por escrito os próprios limites.',
      },
    ],
    facts: [
      { value: '121', label: 'PRs mergeadas' },
      { value: '64', label: 'modelos no banco' },
      { value: '1.858', label: 'testes na CI' },
    ],
  },
  {
    id: 'revela',
    name: 'Revela',
    tagline: 'Tarô como ferramenta de reflexão, com uma tutora de IA que ensina a ler',
    role: 'Fullstack e IA aplicada, solo, trabalhando com agentes de IA',
    since: '2026-09',
    status: 'Em desenvolvimento',
    summary: [
      'O tarô é um sistema fechado de símbolos: 78 cartas com significados documentados há alguns séculos, tiragens em que cada posição faz uma pergunta específica, e regras para ler as cartas em conjunto, como naipe dominante, números repetidos ou sequências. A tirada não prevê nada; ela dá estrutura para pensar sobre uma pergunta, do jeito que um bom roteiro de perguntas faz.',
      'Essa estrutura é o que faz o tarô encaixar tão bem com IA e RAG. As variáveis são poucas e bem definidas: qual carta, em que posição, respondendo a que pergunta, ao lado de quais outras. O vocabulário é finito e tipado, então a saída do modelo pode ser validada contra um catálogo. As relações entre cartas são combinatória, então o código calcula e o modelo só interpreta. E existe um acervo de 53 livros com autores que discordam entre si, ideal para recuperar trechos e citar cada voz pela fonte. O Revela usa isso para ensinar a ler: a pessoa escreve a própria interpretação, pede pistas graduais, recebe feedback do que está ou não apoiado nas cartas e compara com o que os autores diriam.',
    ],
    stack: [
      {
        label: 'Front-end',
        items: ['Next.js 16', 'React 19', 'Tailwind v4', 'Zustand', 'Motion'],
      },
      {
        label: 'Back-end e dados',
        items: ['NestJS 11', 'Prisma 7', 'PostgreSQL', 'pgvector', 'Supabase Auth', 'Zod'],
      },
      {
        label: 'IA',
        items: [
          'Gemini com saída estruturada',
          'Embeddings',
          'RAG',
          'Eval com juiz-modelo',
          'Whisper STT',
          'Kokoro TTS',
        ],
      },
      {
        label: 'Entrega',
        items: [
          'Nx',
          'Vitest',
          'Playwright',
          'Python',
          'Docker',
          'Coolify',
          'Vercel',
          'GitHub Actions',
        ],
      },
    ],
    learnings: [
      {
        title: 'O código calcula, o modelo interpreta',
        body: 'Um motor determinístico calcula as ligações entre cartas: elementos vizinhos, sequências, carta-eco, quintessência pela regra de Fiebig e Burger. O LLM só escolhe, nomeia e interpreta o que já foi calculado.',
      },
      {
        title: 'Contratos tipados de ponta a ponta',
        body: 'Schemas Zod únicos compartilhados por web e API, convertidos para o schema de resposta do Gemini. A saída do modelo passa por validação de referências e checagem anti-vazamento antes de chegar à tela.',
      },
      {
        title: 'Avaliação de LLM como parte do build',
        body: 'Um harness próprio roda o serviço real contra o Gemini, com dublês de infra, e pontua agência, fundamentação, profundidade e memória de 0 a 3, com juiz-modelo e checagens determinísticas. É um target do Nx.',
      },
      {
        title: 'RAG sobre 53 livros',
        body: 'Pipeline em Python fatia, classifica e embeda o acervo em Postgres com pgvector. Índices HNSW e GIN escritos à mão em SQL, com a decisão registrada de nunca aceitar o drift que o Prisma propõe sobre eles.',
      },
      {
        title: 'Prompt é código',
        body: 'Prompts modulares por tarefa, cada um com teste unitário ao lado. Guia de voz com travas: nunca acusar pessoa concreta, nunca prescrever em saúde ou questão legal, só usar o que está no repertório entregue.',
      },
      {
        title: 'Testes em quatro camadas',
        body: '268 testes em Vitest, 30 specs Playwright em Chromium e mobile, integração contra Postgres real e módulos de teste em Python, tudo rodando com nx affected na CI com serviço pgvector.',
      },
      {
        title: 'Spec, plano e evidência por PR',
        body: '48 PRs em 16 dias, cada uma com desenho aprovado, plano com restrições e evidência arquivada: comando, exit code, capturas em desktop e mobile. O ciclo RED e GREEN fica registrado nos testes.',
      },
      {
        title: 'Deploy dividido',
        body: 'Front na Vercel com build via Nx; API em Docker multi-stage no Coolify, com migrations no boot, health check na imagem e áudio do curso em bucket privado com URL assinada.',
      },
    ],
    facts: [
      { value: '48', label: 'PRs mergeadas' },
      { value: '298', label: 'testes automatizados' },
      { value: '53', label: 'livros indexados' },
    ],
  },
];
