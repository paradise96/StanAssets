import { createHashRouter } from "react-router-dom";
import App from './App';
import Main from "./pages/Main";
import About from './pages/About';
import Blog from "./pages/Blog";
import Contacts from "./pages/Contacts";
import NotFound from "./pages/NotFound";
import { devHome, prodHome } from "./config";

const router = createHashRouter([
  {
    path: window.location.hostname === 'localhost' ? devHome : prodHome,
    element: <App />,
    children: [
      {
        index: true,
        element: <Main />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "blog",
        element: <Blog />
      },
      {
        path: "contacts",
        element: <Contacts />
      },
      
    ]
  }// ,
  // {
  //   path: "*",
  //   element: <NotFound />
  // }
]);

export default router