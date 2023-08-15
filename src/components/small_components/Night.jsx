import night from '../../assets/img/aboutNight.svg';
import { useRef } from 'react';
import { useAnimate, returnHiddenEl } from '../blog/functions/HelpfulFunctions';

function Night() {
    
    const hiddenElements = useRef([]);

    useAnimate('show_x', hiddenElements);

    return (
        <section className="night">
            <div className="container">
                <div className="night_wrapper">
                    <div className="night_picture hidden_x" ref={(el) => returnHiddenEl(hiddenElements ,el)}>
                        <img src={night} alt='Stan working in the night' />
                    </div>
                    <div className="night_info hidden_x" ref={(el) => returnHiddenEl(hiddenElements ,el)}>
                        <p className="night_text mrgb_20">Stan's Assets were <span className='bold'>founded in 2013</span>  with the story of Stan, who worked at night after his main job and developed the<span className='bold'> first Unity packages</span>. Later other developers who have shared Stan’s passion joined the company and became our co-founders.</p>
                        <p className='night_text'>Hundreds of thousands of developers are using them in their development. That’s how we’ve understood we can really save developer’s time and help them become more <span className='bold'>effective</span> at their job.</p>
                    </div>
                </div>               
            </div>
        </section>
    )
}
export default Night;