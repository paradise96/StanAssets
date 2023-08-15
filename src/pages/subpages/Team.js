import { team } from "../../data/TeamInfo";
import ContactForm from '../../components/ContactForm';
import { useRef } from "react";
import { useAnimate, returnHiddenEl } from "../../components/blog/functions/HelpfulFunctions";

function Team() {
    
    const hiddenElements = useRef([]);

    useAnimate('swing-in-top-fwd', hiddenElements);

    return (
       <>
            <section className="team">
                <div className="container">
                    <h2 className="headers">Core team</h2>
                    <div className="team_grid">
                        {team.map((item, index)=>{
                            return(
                                <div className="team_item" key={index} ref={(el) => returnHiddenEl(hiddenElements ,el)}>
                                    <div className="team_image">
                                        <img src={item.img} alt={item.alt} />
                                    </div>
                                    <div className="team_info">
                                        <div className="team_header">
                                            {item.position}
                                        </div>
                                        <div className="team_description">
                                            {item.description}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>
            <ContactForm />
        </>
        
    )
}

export default Team;