import picture from '../../assets/img/aboutRobot.svg';
import { useRef } from 'react';
import { useAnimate, returnHiddenEl } from '../blog/functions/HelpfulFunctions';

function Mission() {

    const hiddenElements = useRef([]);

    useAnimate('show_x', hiddenElements);

    return (
        <section className="night">
            <div className="container">
                <div className="night_wrapper row_reverse">
                    <div className="night_picture hidden_x" ref={(el) => returnHiddenEl(hiddenElements ,el)}>
                        <img src={picture} alt='robot technology' />
                    </div>
                    <div className="night_info hidden_x" ref={(el) => returnHiddenEl(hiddenElements ,el)}>
                        <p className="night_text mrgb_20"> Thank for our plugins we became recognizible and started working with top worlknown companies like <span className='bold'>Moon Studios, Roomful and others.</span></p>
                        <p className='night_text'>Now our team has more than<span className='bold'> 15 developers </span>who create <span className='bold'>games, VR spaces, mobile applications</span>for our clients.</p>
                        <p className="night_text blue">If you share our values we'd love to see you as a part of our team!</p>
                        <h2 className='night_header'>Our mission</h2>
                        <p className="night_text">To create slick code that will be understandable to all developers who may work on a project after us and to make the developer's life easier with our plugins.</p>
                    </div>
                </div>               
            </div>
        </section>
    )
}

export default Mission;

