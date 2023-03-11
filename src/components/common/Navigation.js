import { Link } from 'react-router-dom';
import logo from './../../assets/imgs/logo.png';

function Navigation(){
  return (
    <nav className="navbar custom-navbar navbar-expand-lg navbar-dark" data-spy="affix" data-offset-top="20">
      <div className="container">
          <Link className="navbar-brand" to={'/'}>
              <img src={ logo } alt="" />
          </Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                      <Link className="nav-link" to={'/'}>Home</Link>
                  </li>
                  <li className="nav-item">
                      {/* <a className="nav-link" href={'/about'}>About</a> */}
                      <Link to={'/about'} className="nav-link">About</Link>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#service">Service</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#portfolio">Portfolio</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#team">Team</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#testimonial">Testimonial</a>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to={'/blog'}>Blog</Link>
                  </li>
                  <li className="nav-item">
                      <Link className="nav-link" to={'/contacts'}>Contact</Link>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link btn btn-primary btn-sm ml-lg-3" href="components.html">Components</a>
                  </li>
              </ul>
          </div>
      </div>
  </nav>
  )
}

export default Navigation