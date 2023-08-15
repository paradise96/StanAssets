import { facebook, insta, whatsapp, skype, github } from "../../data/FooterLinks";
import { Link } from "react-router-dom";

function FooterLinks(){
    const socialLinks  = [ facebook , insta, whatsapp, skype, github];
    return (
        <>
        {socialLinks.map((item, index)=>{
                return(
<                       div className="footer_links_Wrapper" key={index}> 
                            <Link to={'https://uk-ua.facebook.com/'} target="_blank">{item}</Link>
                        </div>
                )
            })}
        </>
    )
}

export default FooterLinks;