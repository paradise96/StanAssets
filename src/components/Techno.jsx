import { useRef } from 'react';
import { useAnimate, returnHiddenEl } from './blog/functions/HelpfulFunctions';

import image1 from '../assets/img/main/techno/mTechnoRobot.svg';
import  image2 from '../assets/img/main/techno/mTechnoApple.svg';
import  image3 from '../assets/img/main/techno/mTechnoUnity.svg';

function Techno() {
    
    const hiddenElements = useRef([]);

    useAnimate('show', hiddenElements);

    return(
       <section className="techno">
        <div className="container">
            <h2 className="headers right_hidden"  ref={(el) => returnHiddenEl(hiddenElements ,el)}>Technologies</h2>
            <h3 className="techno_assets techno_styles right_hidden"  ref={(el) => returnHiddenEl(hiddenElements ,el)}>
                <span className="bark_blue">Stan’s</span> <span className="blue_color">Assets</span> is a team of developers that are committed to developing high quality and engaging entertainment software
            </h3>
            <div className="techno_flex right_hidden"  ref={(el) => returnHiddenEl(hiddenElements ,el)}>
                <div className="techno_item techno_green">
                    <img src={image1} alt="robot" />
                </div>
                <div className="techno_item techno_blue">
                    <img src={image2} alt="apple" />
                </div>
                <div className="techno_item techno_gray">
                    <img src={image3} alt="unity" />
                </div>
            </div>
            <p className="techno_text techno_styles right_hidden"  ref={(el) => returnHiddenEl(hiddenElements ,el)}>Our engineers develop applications for the most popular platforms.</p>
        </div>
       </section>
    )
}

export default Techno;