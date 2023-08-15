import { useState, useEffect } from 'react';
import { useRef } from 'react';
import { useAnimate, returnHiddenEl } from './blog/functions/HelpfulFunctions';
import { Link } from 'react-router-dom';
import { partnersArray } from '../data/PartnersData';

function Partners() {
    const [showPictures, setShowPictures] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleTogglePictures = () => {
        setShowPictures(!showPictures);
    };

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const numberPartnersToShow = windowWidth < 950 ? (showPictures ? partnersArray.length : 8) : partnersArray.length;

    const hiddenElements = useRef([]);

    useAnimate('show_x', hiddenElements);

    return (
        <section className="partners">
            <div className="container">
                <h2 className="headers">Partners</h2>
                <div className={`partners_grid`}>
                    {partnersArray.slice(0, numberPartnersToShow).map((item, index) => {
                        return (
                            <div className={`partners_item ${windowWidth > 950 ? 'hidden_x' : ''} ${showPictures ? 'show' : ''}`} key={index} ref={(el) => returnHiddenEl(hiddenElements, el)}>
                                <Link to={item.site} target='_blank'>
                                    <img src={item.img} alt="company logos" />
                                </Link>
                            </div>
                        );
                    })}
                </div>
                {windowWidth < 950 && (
                    <button onClick={handleTogglePictures} className={`btn  ${showPictures ? 'btn_toggle' : 'btn_rotate'}`}>
                        {showPictures ? 'Close' : 'Show more'}
                    </button>
                )}
            </div>
        </section>
    );
}

export default Partners;