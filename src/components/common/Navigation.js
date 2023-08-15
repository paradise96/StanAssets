import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-scroll';
import { useLocation } from 'react-router-dom';
import Hamburger from './hamburger/Hamburger';
import logo from '../../assets/img/logoNavigation.svg';
import logoActive from '../../assets/img/logoNavigationActive.svg';

function Navigation(){
    const location = useLocation();
    const [hamburgerOpen, setHamburgerOpen] = useState(false);
    const [scrolling, setScrolling] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen);
    };

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setScrolling(true);
        } else {
            setScrolling(false);
        }
    };

    useEffect(() => {
        setHamburgerOpen(false);
        setScrolling(false);

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [location.pathname]);

  return (
    <header className={`nav ${location.pathname !== '/' ? 'unactive' : ''}${scrolling && location.pathname === '/' ? 'bg_black' : ''}`}>
        <div className='container'>
              <nav className={`nav_wrapper`}>
                <NavLink to={'/'} className='nav_usual'>
                    <img src={ logo } alt="stan assets logo" />
                </NavLink>
                <NavLink to={'/'} className='hidden unactive'>
                    <img  src={ logoActive } alt="stan assets logo" />
                  </NavLink>
                  <div className='hamburger' onClick={toggleHamburger}>
                      <Hamburger isOpen={ hamburgerOpen} />
                  </div>
                  <ul className={`nav_list ${hamburgerOpen ? 'nav_ham' : ''}` }>
                    <li className='nav_link arrow mrgr16'>
                        <NavLink className='hovered' to={'/services'}>Services</NavLink>
                        <ul className='nav_submenu'>
                            <li className='nav_link'><NavLink to={'/mobileApp'}>MOBILE APPLICATION DEVELOPMENT</NavLink></li>
                            <li className='nav_link'><NavLink to={'/gameDev'}>GAME DEVELOPMENT OUTSOURCING</NavLink></li>
                            <li className='nav_link'><NavLink to={'/vrApp'}>VR APP DEVELOPMENT</NavLink></li>
                            <li className='nav_link'><NavLink to={'/sdkModeling'}>SDK 3D MODELING</NavLink></li>
                        </ul>
                    </li>
                    <li className='nav_link arrow mrgr16'>
                        <NavLink className='hovered' to={'/technologies'}>Technologies</NavLink>
                        <ul className='nav_submenu'>
                            <li className='nav_link'><NavLink to={'/android'}>Android technologies</NavLink></li>
                            <li className='nav_link'><NavLink to={'/iosTechno'}>ios technologies</NavLink></li>
                        </ul>
                    </li>
                    <li className='nav_link'>
                        <NavLink to={'/products'}>Products</NavLink>
                    </li>
                    <li className='nav_link'>
                        <NavLink to={'/portfolio'}>Portfolio</NavLink>
                    </li>
                    <li className='nav_link'>
                        <NavLink to={'/blog'}>Blog</NavLink>
                    </li>
                    <li className='nav_link arrow'>
                        <NavLink className='hovered' to={'/about'}>About us</NavLink>
                        <ul className='nav_submenu'>
                            <li className='nav_link'><NavLink to={'/team'}>Team</NavLink></li>
                            <li className='nav_link'><NavLink to={'/joinTeam'}>Join the team</NavLink></li>
                        </ul>
                    </li>
                  </ul>
                  <Link to="formSection" smooth={true} duration={1500} className='smooth'>
                    <button type='button' className='btn btn_white btn_navigation mrgt12'>Contact us</button>
                  </Link>
            </nav>
        </div>
    </header>
  )
}

export default Navigation
