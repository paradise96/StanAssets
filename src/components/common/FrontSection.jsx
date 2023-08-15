function FrontSection(props){
    const {header, url, alt} = props;
    return (
        <section className="front">
            <div className="container">
                <div className="front_wrapper">
                    <h2 className="front_header">{header}</h2>
                    <div className="front_picture">
                        <img src={url} alt={alt} />
                    </div>
                </div>               
            </div>
        </section>
    )
}

export default FrontSection;