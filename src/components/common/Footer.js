import { Link, NavLink } from 'react-router-dom';
import FooterLinks from './FooterLinks';
import logo from '../../assets/img/footer/footerlogo.png';
import Underfooter from '../small_components/Underfooter';

function Footer(){
  return (
    <>
        <footer className='footer'>
            <div className='container'>
                <div className='footer_wrapper'>
                    <div className='footer_socials'>
                        <Link to={'/'} className="logo">
                            <img src={logo} alt="Stan assets logo" />
                        </Link>
                        <div className='footer_linksWrapper'>
                            <FooterLinks />
                        </div>
                    </div>
                    <ul className='footer_list'>
                        <li className='footer_link'>
                            <NavLink className='footer_link_main' to={'/services'}>Services</NavLink>
                            <ul className='footer_submenu'>
                                <li className='footer_link'><NavLink to={'/mobileApp'}>MOBILE APPLICATION DEVELOPMENT</NavLink></li>
                                <li className='footer_link'><NavLink to={'/gameDev'}>GAME DEVELOPMENT OUTSOURCING</NavLink></li>
                                <li className='footer_link'><NavLink to={'/vrApp'}>VR APP DEVELOPMENT</NavLink></li>
                                <li className='footer_link'><NavLink to={'/sdkModeling'}>SDK 3D MODELING</NavLink></li>
                            </ul>
                        </li>
                        <li className='footer_link'>
                            <NavLink className='footer_link_main' to={'/technologies'}>Technologies</NavLink>
                            <ul className='footer_submenu'>
                                <li className='footer_link'><NavLink to={'/android'}>Android technologies</NavLink></li>
                                <li className='footer_link'><NavLink to={'/iosTechno'}>ios technologies</NavLink></li>
                            </ul>
                        </li>
                        <ul className='footer_other'>
                            <li>
                                <NavLink className='footer_link_main' to={'/products'}>Products</NavLink>
                            </li>
                            <li >
                                <NavLink className='footer_link_main' to={'/portfolio'}>Portfolio</NavLink>
                            </li>
                            <li >
                                <NavLink className='footer_link_main' to={'/blog'}>Blog</NavLink>
                            </li>
                        </ul>
                        <li className='footer_link '>
                            <NavLink className='footer_link_main' to={'/about'}>About us</NavLink>
                            <ul className='footer_submenu'>
                                <li className='footer_link'><NavLink to={'/team'}>Team</NavLink></li>
                                <li className='footer_link'><NavLink to={'/joinTeam'}>Join the team</NavLink></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
        <Underfooter />
    </>
  )
}

export default Footer