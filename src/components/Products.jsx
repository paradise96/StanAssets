import { useRef } from 'react';
import { products } from '../data/ProductsInfo';
import unity from '../assets/img/products/unity.svg';
import github from '../assets/img/products/github.svg';
import { Link } from 'react-router-dom';
import { useAnimate, returnHiddenEl } from './blog/functions/HelpfulFunctions';

function ProductsItems() {

    const hiddenElements = useRef([]);

    useAnimate('flip-in-hor-bottom', hiddenElements);

    return(
        <section className="products">
            <div className="container">
                <div className="grid">
                    {products.map((main, index)=>{
                        return(
                            <div className="products_item" key={index} ref={(el) => returnHiddenEl(hiddenElements ,el)}>
                                <div className="products_img" key={index}>
                                    <img src={main.src} alt={main.alt} />
                                    <div className="products_icons">
                                        <div className="products_icon products_border">
                                            <Link to='https://unity.com/' target='_blank'><img src={unity} alt="unity" /></Link>
                                        </div>
                                        <div className="products_icon">
                                            <Link to='https://github.com/' target='_blank'><img src={github} alt="github" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="products_description">
                                    <h2>{main.header}</h2>
                                    <p>{main.text}</p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default ProductsItems;