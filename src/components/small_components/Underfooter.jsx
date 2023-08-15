import { Link } from "react-router-dom"

function Underfooter(){
    return(
        <section className="underfooter">
            <div className="container">
                <div className="underfooter_stan">© 2021 - Stan’s Assets. All Right Reserved</div>
                <div className="underfooter_text">
                    <Link to='https://google.com' target="_blank">Privacy policy</Link>
                    <Link to='https://google.com' target="_blank">Cookies policy</Link>
                </div>
            </div>
        </section>
    )
}

export default Underfooter;