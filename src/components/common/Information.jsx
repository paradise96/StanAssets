import { useRef } from "react";
import { useAnimate, returnHiddenEl } from "../blog/functions/HelpfulFunctions";


function Information(props) {
    const {info} = props;

    const hiddenElements = useRef([]);

    useAnimate('tracking-in-expand', hiddenElements);
   
    return(
        <section className="info">
            <div className="container">
                <div className="info_wrapper">
                    <div className="info_item" ref={(el) => returnHiddenEl(hiddenElements ,el)}>
                        <h2 className="info_header">{info[0].header}</h2>
                        <p className="info_text mrgn_bottom">{info[0].p1}</p>
                        <p className="info_text">{info[0].p2}</p>
                    </div>
                    <div className="info_item" ref={(el) => returnHiddenEl(hiddenElements ,el)}>
                        <h2 className="info_header">{info[1].header}</h2>
                        <p className="info_text mrgn_bottom">{info[1].p1}</p>
                        <p className="info_text">{info[1].p2}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Information;