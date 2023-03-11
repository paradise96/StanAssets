import content from './../../data/Header.json'
import { useLocation } from 'react-router-dom';

function Header(){
  const location = useLocation();

  const overlay = location.pathname === '/'
  ? <div className="overlay">
      <h6 className="subtitle">{content.subtitle}</h6>
      <h1 className="title">{content.title}</h1>
      <div className="buttons text-center">
          <a href="#service" className="btn btn-primary rounded w-lg btn-lg my-1">{content.btnService}</a>&nbsp;
          <a href="#contact" className="btn btn-outline-light rounded w-lg btn-lg my-1">{content.btnContact}</a>
      </div>
    </div>
   : <div className="overlay"></div> 
  const headerClass = 'header' + (location.pathname !== '/' ? ' small' : '')

  return (
    <header className={headerClass}>
        { overlay }
    </header>
  )
}

export default Header