import TrybeWallet from '../assets/img/wallet.png';
import TrybeTunes from '../assets/img/tunes.png';
import TrybeFutebol from '../assets/img/futebol.png';
import DeliveryApp from '../assets/img/delivery.png';
import WalletVideo from '../assets/video/Wallet.mp4';
import TunesVideo from '../assets/video/Tunes.mp4';
import DeliveryVideo from '../assets/video/Delivery.mp4';
import FutebolVideo from '../assets/video/Futebol.mp4';

export const projects = [
  {
    id: 3,
    title: 'Trybe Wallet',
    img: TrybeWallet,
    video: WalletVideo,
    description: 'Trybe Wallet é uma carteira de controle de gastos com conversor de moedas,o usuário poderá: Adicionar, remover e editar um gasto; Visualizar uma tabelas com seus gastos; Visualizar o total de gastos convertidos para uma moeda de escolha.',
    gitLink: 'https://github.com/allpha23/trybewallet',
    deployLink: 'https://allpha23.github.io/trybewallet/',
  },
  {
    id: 2,
    title: 'Trybe Tunes',
    img: TrybeTunes,
    video: TunesVideo,
    description: 'TrybeTunes é um site onde você pode pesquisar, ouvir e salvar suas musicas favoritas. O projeto foi feito consumindo dados da Itunes API e exibindo-os usando todos os ciclos de vida de um componente React, JavaScript e CSS',
    gitLink: 'https://github.com/allpha23/trybetunes',
    deployLink: 'https://allpha23.github.io/trybetunes/',
  },
  {
    id: 1,
    title: 'Trybe Futebol',
    img: TrybeFutebol,
    video: FutebolVideo,
    description: 'O TFC é um site informativo sobre partidas e classificações de futebol. No desenvolvimento deste projeto fui responsável por desenvolver uma API (de forma TDD) e também integrar (através do docker-compose) front-end e back-end para que trabalhem juntos consumindo um banco de dados(MySQL).',
    gitLink: 'https://github.com/allpha23/trybe-futebol-clube',
    deployLink: '',
  },
];

export const moreProjects = [
  {
    id: 1,
    title: 'Delivery App',
    img: DeliveryApp,
    video: DeliveryVideo,
    description: 'DeliveryApp é aplicativo de gerenciamento de vendas, onde você pode comprar e vender bebidas. O app usa uma API para gerenciar diferentes fluxos de acessos e regras de negócio. É possível criar, listar, atualizar e deletar vendas do banco de dados.',
    gitLink: 'https://github.com/allpha23/delivery-app',
    deployLink: '',
  },
];
