import SlickSlider from '../common/slickSlider/Slider';
import {infoSlider} from '../../data/SliderInfo';


function ServiceSlider (){
    return(
        <section className="servslider">
        <div className="container">
            <h2 className="headers">recent projects</h2>
            <SlickSlider arrows={true} dots={false} slidesToShow={3} >
                {infoSlider.map((item, index)=>{
                    return(
                        <div className="servslider_item" key={index}>
                            <div className="servslider_img">
                                <img src={item.img} alt={item.alt} />
                            </div>
                            <div className="servslider_info">
                                <h2>{item.header}</h2>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    )
                })}
            </SlickSlider>
        </div>
    </section>
    )
}

export default ServiceSlider;