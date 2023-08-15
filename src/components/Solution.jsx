import { useRef } from 'react';
import solutionData from '../data/LookForaPartner.json';
import { Link } from 'react-scroll';
import { useAnimate, returnHiddenEl } from './blog/functions/HelpfulFunctions';


function Solution() {
    const hiddenElements = useRef([]);

    useAnimate('show', hiddenElements);
    
    return (
        <section className="solution">
            <div className="container">
                <h2 className="solution_header hidden" ref={(el) => returnHiddenEl(hiddenElements ,el)}>{solutionData.main}</h2>
                <h3 className="solution_subheader hidden" ref={(el) => returnHiddenEl(hiddenElements, el)}>{solutionData.text}</h3>
                <Link to="formSection" smooth={true} duration={1500}>
                    <button type='button' className='btn btn_talk hidden' ref={(el) => returnHiddenEl(hiddenElements ,el)}>{solutionData.button}</button>
                </Link>
            </div>
        </section>
    )
}
export default Solution;