import Navigation from './components/common/Navigation';
import Footer from './components/common/Footer';
import { Outlet } from 'react-router-dom';
import ScrollToTop from './components/common/ScrollToTop';
import { ScrollRestoration } from 'react-router-dom';
import Links from './components/small_components/Links';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Links />
      <ScrollRestoration />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
