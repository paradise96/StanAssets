import {serviceLayoutInfo} from '../../data/ServiceLayout';
import { useRef } from 'react';
import { useAnimate, returnHiddenEl } from '../blog/functions/HelpfulFunctions';

function ServiceLayout() {
    
    const hiddenElements = useRef([]);

    useAnimate('slide-in-fwd-center', hiddenElements);

    return(
        <section className="layout">
            <div className="container">
                <h2 className="headers hidden" ref={(el) => returnHiddenEl(hiddenElements ,el)}>Services</h2>
                <div className="layout_grid hidden" ref={(el) => returnHiddenEl(hiddenElements ,el)}>
                    {serviceLayoutInfo.map((item, index)=>{
                        return(
                            <div className="layout_wrapper hidden" key={index} >
                                <div className="layout_image">
                                    <img src={item.image} alt="services details" />
                                </div>
                                <h3 className="layout_text">{item.text}</h3>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default ServiceLayout;