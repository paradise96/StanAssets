import { portfolioInfo } from "../../data/PortfolioInfo"
import { useRef } from "react";
import { useAnimate, returnHiddenEl } from "../blog/functions/HelpfulFunctions";


function PortfolioSection() {
    
    const hiddenElements = useRef([]);

    useAnimate('flip-in-hor-bottom', hiddenElements);

    return(
        <section className="portfolio">
            <div className="container">
                {portfolioInfo.map((item, index)=>{
                    return(
                        <div className={`portfolio_item ${index % 2 !==0 ? 'flex' : 'border_r'}`} key={index} ref={(el) => returnHiddenEl(hiddenElements ,el)}>
                            <div className="portfolio_image">
                                <img src={item.image} alt={item.alt} />
                            </div>
                            <div className="portfolio_info">
                                <h2 className="portfolio_header">{item.header}</h2>
                                <p className="portfolio_text mrgb_10">{item.p1}</p>
                                <p className="portfolio_text">{item.p2}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default PortfolioSection;