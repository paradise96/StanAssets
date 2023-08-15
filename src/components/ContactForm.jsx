import  {infoHeader}  from "../data/ContactsHeaderInfo";
import { infoNumbers } from "../data/ContactsHeaderInfo";
import { Link } from "react-router-dom";
import FeedbackForm from "./contacts/FeedbackForm";
import { useRef } from "react";
import { useAnimate, returnHiddenEl } from "./blog/functions/HelpfulFunctions";

function ContactForm() {
    const hiddenElements = useRef([]);

    useAnimate('tilt-in-fwd-bl', hiddenElements);

    return(
        <section className="contact" ref={(el) => returnHiddenEl(hiddenElements ,el)} id="formSection">
            <div className="container">
                <h2 className="headers">Contacts</h2>
                <h3 className="contact_header">{infoHeader[0]}</h3>
                <h4 className="contact_subheader">{infoHeader[1]}</h4>
                <div className="contact_wrapper">
                    <div className="contact_left">
                        {infoNumbers.map((item, index)=>{
                            return(
                                <div className="contact_item" key={index}>
                                    <img src={item.image} alt="contact numbers cell phone skype etc" />
                                    <Link to={item.to} target="_blank">{item.name}</Link>
                                </div>
                            )
                        })}
                    </div>
                    <div className="contact_right">
                        <FeedbackForm />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactForm;