import facebook from '../../assets/img/linksRight/linksFacebook.svg';
import insta from '../../assets/img/linksRight/linksInsta.svg';
import whatsapp from '../../assets/img/linksRight/linksWhatsapp.svg';
import skype from '../../assets/img/linksRight/linksSkype.svg';
import { Link } from 'react-router-dom';

function Links(){
    const icons = [facebook, insta, whatsapp, skype];

    return(
        <div className="links_wrapper">
            {icons.map((item, index)=>{
                return(
                    <div className="links_item" key={index}>
                        <Link to='https://www.instagram.com/' target='_blank'>
                            <img src={item} alt="social links logos" />
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default Links;