---
version: 1
slug: "src-pages-aboutpage-index-tsx"
primary_target: "src/pages/AboutPage/index.tsx"
related_targets: ["src/data/story.ts","src/components/StoryFigure/index.tsx"]
---

# Surface brief: /sobre (página "Minha trajetória")

Scope: rota `/sobre`, página inteira. Visitor mode: Experience (a trajetória é o artefato; a interface recua).
Audience: recrutadores e gestores técnicos com pouco tempo. Job: entender de onde o Gabriel vem e por que a experiência de campo sustenta o trabalho técnico. Action: seguir para Projetos ou Contato.
Proof/content: nove etapas em `src/data/story.ts`, confirmadas pelo Gabriel em 2026-09-23 e pelo GitHub. Sem depoimentos, sem métricas de contratação.
Constraints: tom profissional e direto; sem nomes de transportadoras ou clientes; visual incumbente (escuro, acento verde, Poppins, superfícies com borda fina); funcionar com movimento reduzido.

## Direction contract

THESIS: A trajetória contada como uma rota com paradas. A página recusa a linha do tempo de cartões iguais empilhados; o leitor atravessa a história rolando, e a página registra o quanto já percorreu.

OWN-WORLD: Fundo escuro com brilho verde nos cantos, painel de ilustração com grade fina de 28px, ilustrações em traço único (2px, cantos redondos) em cinza esverdeado com o elemento em foco em verde, trilho vertical de 2px que se preenche de verde, pontos de parada que acendem. Poppins, títulos com tracking negativo, números tabulares.

STORY: O visitante entende que o Gabriel programa desde a adolescência, que voltou pela via de um produto real, que estudou de forma estruturada, que passou três anos na rota e que o Donaldo OPS nasceu disso. Acredita que a experiência de campo é parte do argumento técnico. Age indo para Projetos ou Contato.

FIRST VIEWPORT: Cabeçalho fixo; título "Minha trajetória" (clamp 32–56px) com um parágrafo de duas linhas; abaixo, a grade de três colunas já visível: painel fixo à esquerda com o período em 44px e a primeira ilustração se desenhando, trilho no meio com o primeiro ponto aceso, e a primeira etapa à direita (título 30px, dois parágrafos). A ação primária está no fim da página, na última etapa.

FORM: Scrollytelling com painel fixo e trilho de progresso, estrutura pedida explicitamente pelo Gabriel; escolhida diretamente, sem rodada de conceitos (pedido preciso). Seed key: nenhum (sem concept-seed). Build path: code-led, único caminho (sem geração de imagem no ambiente).

Signature interaction: a troca de etapa ao cruzar o centro da viewport: o período grande muda, a ilustração anterior some e a nova se desenha traço a traço, o ponto do trilho acende e o texto da etapa passa de cinza a branco. Motion grammar: só transform, opacity e stroke-dashoffset; tudo dentro de `prefers-reduced-motion: no-preference`; sem movimento reduzido, o conteúdo nasce visível e completo.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
