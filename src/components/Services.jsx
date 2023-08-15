import { servicesInfo } from '../data/mainServices';
import { useRef } from 'react';
import ServicesSmall from './small_components/ServicesSmall';
import { useAnimate,  returnHiddenEl } from './blog/functions/HelpfulFunctions';

function Services() {
    
    const hiddenElements = useRef([]);

    useAnimate('slide-in-elliptic-top-fwd', hiddenElements);

    return(
        <section className="services" id="servicesSection">
            <div className="container">
                <h2 className="headers service_mrgn" ref={(el) => returnHiddenEl(hiddenElements ,el)}>Services</h2>
                {servicesInfo.map((item, index)=>{
                    return (
                        <div className={`services_wrapper displ_none ${index % 2 !== 0 ? 'flex_direction' : ''}`} key={index}>
                            <div className="services_left" ref={(el) => returnHiddenEl(hiddenElements ,el)}>
                                <h2 className="services_header">{item.header}</h2>
                                <p className="services_text">{item.text}</p>
                            </div>
                            <div className="services_right">
                                <img src={item.image} alt={item.alt} ref={(el) => returnHiddenEl(hiddenElements ,el)}/>
                            </div>
                    </div>
                    )
                })
                }
                <ServicesSmall />
            </div>
        </section>
    )
}
export default Services;