import { createBrowserRouter } from "react-router-dom";
import App from "../App";

import Home from "../pages/home/home";
import Servicos from "../pages/servicos/servicos";
import Projetos from "../pages/projetos/projetos";
import Sobre from "../pages/sobre/sobre";
import QuemSou from "../pages/quemSou/quemSou";
import Contatos from "../pages/contatos/contatos";
import Depoimentos from "../pages/depoimentos/depoimentos";
import Faqs from "../pages/faqs/faqs";
import Error from "../pages/error/error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/servicos",
        element: <Servicos />,
      },
      {
        path: "/projetos",
        element: <Projetos />,
      },
      {
        path: "/sobre",
        element: <Sobre />,
      },
      {
        path: "/quem-sou",
        element: <QuemSou />,
      },
      {
        path: "/contatos",
        element: <Contatos />,
      },
      {
        path: "/depoimentos",
        element: <Depoimentos />,
      },
      {
        path: "/faqs",
        element: <Faqs />,
      },
      {
        path: "*", // Rota coringa para capturar páginas não encontradas
        element: <Error />,
      },
    ],
  },
]);
