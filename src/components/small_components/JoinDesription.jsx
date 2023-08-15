import {joinTeam} from '../../data/TeamInfo';
import { useRef } from "react";
import { useAnimate, returnHiddenEl } from "../blog/functions/HelpfulFunctions";


function JoinDescription() {
    const hiddenElements = useRef([]);

    useAnimate('tracking-in-expand', hiddenElements);

    return(
        <section className="join">
            <div className="container">
                <div className="join_wrapper">
                    <div className="join_left" ref={(el) => returnHiddenEl(hiddenElements ,el)}> 
                        <p className="join_text mrgn">{joinTeam[0]}</p>
                        <p className="join_text">{joinTeam[1]}</p>
                    </div>
                    <div className="join_right" ref={(el) => returnHiddenEl(hiddenElements ,el)}>
                        <p className="join_text">{joinTeam[2]}</p>
                        <p className="join_text join_bold">{joinTeam[3]}</p>
                        <p className="join_text">{joinTeam[4]}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JoinDescription;