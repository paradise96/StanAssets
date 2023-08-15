import {Link} from 'react-router-dom';
import clutch from '../assets/img/clutch/clutch.png';
import star from '../assets/img/clutch/starGreen.svg';
import star_half from '../assets/img/clutch/starHalf.png';
import { useRef } from 'react';
import { useAnimate, returnHiddenEl } from './blog/functions/HelpfulFunctions';


function Clutch() {
    const hiddenElements = useRef([]);

    useAnimate('show_x', hiddenElements);

    return(
        <section className="clutch hidden_x" ref={(el) => returnHiddenEl(hiddenElements ,el)}>
            <div className="container">
                <div className="clutch_wrapper hidden_x" ref={(el) => returnHiddenEl(hiddenElements ,el)}>
                    <div className="clutch_logo">
                        <img src={clutch} alt="clutch logo" />
                    </div>
                    <div className="clutch_stars">
                        <div className="clutch_evaluation">4.5</div>
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star} alt="star" />
                        <img src={star_half} alt="half of the star" />
                        <div className="clutch_reviews">2 reviews</div>
                    </div>
                    <button type="button" className="btn btn_green"><Link to="https://clutch.co/">Check out reviews</Link></button>
                </div>
            </div>
        </section>
    )
}

export default Clutch;