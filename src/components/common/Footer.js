import logo from './../../assets/imgs/logo.png'
import { Link } from 'react-router-dom';

function Footer(){
  const year = new Date().getFullYear();
  return (
    <section className="has-bg-img py-0">
        <div className="container">
            <div className="footer">
                <div className="footer-lists">
                    <ul className="list">
                        <li className="list-head">
                            <h6 className="font-weight-bold">ABOUT US</h6>
                        </li>
                        <li className="list-body">
                            <Link to={'/'} className="logo">
                                <img src={logo} alt="" />
                                <h6>Creative Studio</h6>
                            </Link>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae nobis fugit maxime deleniti minus optio accusamus, quam maiores explicabo sunt.</p> 
                            <p className="mt-3">
                                Copyright {year} &copy; <a className="d-inline text-primary" href="http://www.devcrud.com">DevCRUD</a>
                            </p>                   
                        </li>
                    </ul>
                    <ul className="list">
                        <li className="list-head">
                            <h6 className="font-weight-bold">USEFUL LINKS</h6>
                        </li>
                        <li className="list-body">
                            <div className="row">
                                <div className="col">
                                    <Link to={'/about'}>About</Link>
                                    <Link to={'/'}>Service</Link>
                                    <Link to={'/'}>Portfolio</Link>
                                    <Link to={'/'}>Testimonial</Link>
                                </div>
                                <div className="col">
                                    <Link to={'/'}>Team</Link>
                                    <Link to={'/'}>Blog</Link>
                                    <Link to={'/'}>Faq</Link>
                                    <Link to={'/'}>Privacy Policy</Link>                  
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul className="list">
                        <li className="list-head">
                            <h6 className="font-weight-bold">CONTACT INFO</h6>
                        </li>
                        <li className="list-body">
                            <p>Contact us and we'll get back to you within 24 hours.</p>
                            <p><i className="ti-location-pin"></i> 12345 Fake ST NoWhere AB Country</p>
                            <p><i className="ti-email"></i>  info@website.com</p>
                            <div className="social-links">
                                <a href="https://facebook.com" className="link"><i className="ti-facebook"></i></a>
                                <a href="https://facebook.com" className="link"><i className="ti-twitter-alt"></i></a>
                                <a href="https://facebook.com" className="link"><i className="ti-google"></i></a>
                                <a href="https://facebook.com" className="link"><i className="ti-pinterest-alt"></i></a>
                                <a href="https://facebook.com" className="link"><i className="ti-instagram"></i></a>
                                <a href="https://facebook.com" className="link"><i className="ti-rss"></i></a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>    
        </div>
    </section>
  )
}

export default Footer