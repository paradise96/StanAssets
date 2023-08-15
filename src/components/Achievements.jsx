import { useRef } from "react";
import { useAnimate, returnHiddenEl } from "./blog/functions/HelpfulFunctions";

function Achievements() {

    const hiddenElements = useRef([]);

    useAnimate('show_ach', hiddenElements);

    return (
        <section className="achievements">
            <div className="container">
                <h2 className="headers hidden_ach" ref={(el) => returnHiddenEl(hiddenElements ,el)}>Achievements</h2>
                <div className="achievements_flex">
                    <div className="achievements_item bg_puzzles hidden_ach" ref={(el) => returnHiddenEl(hiddenElements ,el)}>
                        <div className="achievements_text">
                            Collaboration with <span className="dark">Moon Studios</span> on WotW AAA Unity game.
                        </div>
                    </div>
                    <div className="achievements_item bg_rocket hidden_ach" ref={(el) => returnHiddenEl(hiddenElements ,el)}>
                        <div className="achievements_text">
                          <span className="medium_blue">50+ </span>successfully launched projects on the the market.
                        </div>
                    </div>
                    <div className="achievements_item bg_phone hidden_ach" ref={(el) => returnHiddenEl(hiddenElements ,el)}>
                        <div className="achievements_text">
                            Asset store publisher since<span className="medium_blue"> 2013</span>
                        </div>
                    </div>
                    <div className="achievements_item bg_box hidden_ach" ref={(el) => returnHiddenEl(hiddenElements ,el)}>
                        <p className="achievements_text">
                            Our products (packages) used by<span className="medium_blue"> 100k+ </span>devs in <span className="medium_blue">5k+ </span> commercial projects worldwide
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Achievements;