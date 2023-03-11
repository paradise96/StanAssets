import content from './../../data/Header.json'
import { useLocation } from 'react-router-dom';
import { devHome, prodHome } from '../../config';

function Header(){
  const location = useLocation();

  const overlay = (location.pathname === devHome && window.location.hostname === 'localhost') ||
    (location.pathname === prodHome && window.location.hostname !== 'localhost')
  ? <div className="overlay">
      <h6 className="subtitle">{content.subtitle}</h6>
      <h1 className="title">{content.title}</h1>
      <div className="buttons text-center">
          <a href="#service" className="btn btn-primary rounded w-lg btn-lg my-1">{content.btnService}</a>&nbsp;
          <a href="#contact" className="btn btn-outline-light rounded w-lg btn-lg my-1">{content.btnContact}</a>
      </div>
    </div>
   : <div className="overlay"></div> 
  const headerClass = 'header' + ((location.pathname !== devHome && window.location.hostname === 'localhost') || (location.pathname !== prodHome && window.location.hostname !== 'localhost') ? ' small' : '')

  return (
    <header className={headerClass}>
        { overlay }
    </header>
  )
}

export default Header