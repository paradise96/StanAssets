import { createHashRouter } from "react-router-dom";
import App from './App';
import Main from "./pages/Main";
import About from './pages/About';
import Services from "./pages/Services";
import Products from './pages/Products';
import Technologies from './pages/Technologies';
import IosTechno from './pages/subpages/IosTechno';
import AndroidTechno from './pages/subpages/AndroidTechno';
import MobileApp from "./pages/subpages/MobileApp";
import GameDev from './pages/subpages/GameDev';
import VrApp from './pages/subpages/VrApp';
import SdkModeling from './pages/subpages/SdkModeling';
import Portfolio from "./pages/Portfolio";
import Team from "./pages/subpages/Team";
import JoinTeam from './pages/subpages/JoinTheTeam';
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/mobileApp",
        element: <MobileApp />
      },
      {
        path: "/gameDev",
        element: <GameDev />
      },
      {
        path: "/vrApp",
        element: <VrApp />
      },
      {
        path: "/sdkModeling",
        element: <SdkModeling />
      },
      {
        path: "/technologies",
        element: <Technologies />
      },
      {
        path: "/iosTechno",
        element: <IosTechno />
      },
      {
        path: "/android",
        element: <AndroidTechno />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/portfolio",
        element: <Portfolio />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/team",
        element: <Team />
      },
      {
        path: "/joinTeam",
        element: <JoinTeam />
      },
    ]
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

export default router