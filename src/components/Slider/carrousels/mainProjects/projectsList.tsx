import homeYou from '../../../../assets/projectsVideos/HomeYou.mp4';
import homeYouLogo from '../../../../assets/projectsVideos/homeYouLogo.jpg';
import eCommerceLogo from '../../../../assets/projectsVideos/eCommerceLogo.png';
import kenzieHubLogo from '../../../../assets/projectsVideos/kenzieHubLogo.png';
import KenzieHub from '../../../../assets/projectsVideos/KenzieHub.mp4';
import Hamburgueria from '../../../../assets/projectsVideos/Hamburgueria.mp4';
import controlePontosLogo from '../../../../assets/projectsVideos/controledepontosLogo.png';
import controlePontos from '../../../../assets/projectsVideos/controlePontos.mp4';

export const projectsList = [
  {
    name: 'Controle de Pontos',
    description:
      'Projeto a principio pessoal para estudos, que acabou evoluindo e se tornando meu primeiro trabalho freelance como desenvolvedor. <br/> <br/> Aplicação Front End, utilizando React.js, consome a API do discord para mapear pontos de entrada e saída de serviço. Trata esses dados e exibe de forma intuitiva e simples a quantidade de horas e os dias que determinado funcionário esteve presente, sendo possível aplicar filtros por data, nome, id. <br/> <br/> É possível ver em um gráfico a quantidade e quem quem esteve em serviço em cada dia, entre outras funcionalidades melhores apresentadas no vídeo.',
    video: controlePontos,
    thumbnail: controlePontosLogo,
  },
  {
    name: 'HomeYou',
    description:
      'Resultado do trabalho de conclusão do curso de Front End da Kenzie Academy Brasil. Uma plataforma intuitiva, ágil e responsiva para aluguel de casas. Onde o usuário pode se cadastrar, fazer login, acessar o acervo de casas e datas disponíveis, cadastrar, editar, deletar casas que possui e realizar, editar ou cancelar reservas. <br/> <br/> Projeto realizado em equipe no modelo Mínimo Produto Viável com prazo definido para planejamento e execução em aproximadamente uma semana. Configuramos um Json Server para ser o database, tecnologias usadas no Front End:  React, Javascript, Typescript, CSS e HTML.',
    video: homeYou,
    thumbnail: homeYouLogo,
    deploy: 'https://home-you-kenzie-m3.vercel.app',
    repository: 'https://github.com/HomeYou-Kenzie-Academy-t15-g4/HomeYou-Kenzie-m3',
  },
  {
    name: 'E Commerce - Hamburgueria',
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
    description:
      'Um dashboard para desenvolvedores registrarem suas informações pessoais e tecnologias que dominam. O site permite o cadastro, login, adicionar, editar e remover tecnologias. <br/> <br/> Projeto MVP, realizado como entrega de uma Sprint do módulo de React no curso da Kenzie, consumindo uma API que armazena a lista de usuários e suas tecnologias. Tecnologias usadas no Front End:  React, Javascript, CSS e HTML. ',
    video: KenzieHub,
    thumbnail: kenzieHubLogo,
    deploy: 'https://react-entrega-kenzie-hub-pongsu.vercel.app/login',
    repository:
      'https://github.com/Kenzie-Academy-Brasil-Developers/react-entrega-kenzie-hub--pongsu',
  },
];
