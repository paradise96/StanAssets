function FrontTeam(props){
    const {url, alt} = props;
    return (
        <section className="front">
            <div className="container">
                <div className="front_wrapper">
                    <h2 className="front_header team_wide"><span>We are an outsourcing team focused on</span> Games, VR, 3D, SDK, <span>and</span> Unity packages.</h2>
                    <div className="front_picture">
                        <img src={url} alt={alt} />
                    </div>
                </div>               
            </div>
        </section>
    )
}

export default FrontTeam;