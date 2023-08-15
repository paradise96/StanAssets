import data from '../../data/AccordeonInfo.json';
import { useState } from 'react';
function Accordion() {
    
    const [isActive, setActive] = useState([]);

    const handleClick = (index) => ()=>{
       setActive(prev => isActive.includes(index) ? prev.filter(item => item !== index) : [...prev, index]);
    }
    
    return(
        <section className="accordion">
            <h2 className='headers'>FAQ'S</h2>
            <div className="container">
                <div className="accordion_block">
                    {data.map((item, index)=>{
                        return(
                            <div className="wrapper" key={index}>
                                <h2 className={`header ${isActive.includes(index) ? 'arrow_down' : 'arrow_acc'} `} onClick={handleClick(index)}>{item.question}</h2>
                                {isActive.includes(index) && <p className="text">{item.answer}</p>}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Accordion;