import { servicesInfoSmall } from "../../data/mainServices";

function ServicesSmall() {
    return (
        <>
                {servicesInfoSmall.map((item, index)=>{
                    return (
                        <div className={`services_wrapper disp_small ${index % 2 !== 0 ? 'flex_direction' : ''}`} key={index}>
                            <div className="services_left">
                                <h2 className="services_header">{item.header}</h2>
                                <p className="services_text">{item.text}</p>
                            </div>
                            <div className="services_right">
                                <img src={item.image} alt={item.alt} />
                            </div>
                    </div>
                    )
                })
                }
        </>
    )
}
export default ServicesSmall;