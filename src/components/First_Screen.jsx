import {screenInfo} from '../data/FirstScreenInfo';
import SlickSlider from './common/slickSlider/Slider';
import { Link } from 'react-scroll';

function FirstScreen(){
    const classSlider = ['_slider', '_second', '_third']
    return (
        <section className="first_screen">
            <SlickSlider dots={true} slidesToShow={1} arrow={false} responsive={null}>
                {classSlider.map((item, index)=>{
                    return(
                        <div className={`first_screen${item}`} key={index}>
                            <div className="container">
                                <div className="first_screen_header ">{screenInfo.header}</div>
                                <p className="first_screen_text large">{screenInfo.text}</p>
                                <div className="first_screen_buttons">
                                <Link to="servicesSection" smooth={true} duration={1000}>
                                    <button type="button" className="btn btn_white btn_text">More</button>
                                </Link>
                                <Link to="formSection" smooth={true} duration={1500}>
                                    <button type="button" className="btn btn_green btn_text">Contact us</button>
                                </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </SlickSlider>
            <p className='first_screen_text small'>{screenInfo.text}</p>
        </section>
    )
}

export default FirstScreen;