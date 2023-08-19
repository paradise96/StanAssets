import { useState } from "react";
import { infoJoinAccordeon } from "../../data/JoinTeamInfoApply";

function JoinAccordeon() {
    const [openedIndex, setOpenedIndex] = useState([]);

    const handleClick = (index) => ()=>{
        setOpenedIndex(prev => openedIndex.includes(index) ? prev.filter(item => item !== index) : [...prev, index]);
    }
    
    return (
        <section className="joint">
            <div className="container">
                <h2 className="headers">Current openings</h2>
                <div className="joint_wrapper">
                    {infoJoinAccordeon.map((item, index) => {
                        return (
                            <div className={`joint_item`} key={index}>
                                <h2 className={`joint_header ${openedIndex.includes(index) ? 'border arrow_below' : 'arrow_upp'}`} onClick={handleClick(index)}>
                                    {item.header}
                                </h2>
                                {openedIndex.includes(index) && <div className={`joint_info ${openedIndex.includes(index) ? 'joint_opened' : 'joint_closed'}`}>
                                    {item.infoToApply.map((subItem, subIndex) => {
                                        return (
                                            <div className="" key={subIndex}>
                                                <h2 className="joint_subheader">{subItem.subheader}</h2>
                                                <ul className="joint_list">
                                                    {subItem.list.map((listItem, listIndex) => {
                                                        return <li key={listIndex}>{listItem}</li>;
                                                    })}
                                                </ul>
                                            </div>
                                        );
                                    })}
                                </div>}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default JoinAccordeon;
