import Navigation from "../components/common/Navigation";
import Footer from "../components/common/Footer";
import Solution from "../components/Solution";
import ContactForm from "../components/ContactForm";
import { Link } from "react-router-dom"

function NotFound(){
  return (
    <>
      <Navigation />
      <section className="notfound">
        <div className="container">
          <div className="notfound_wrapper">
            <h1>it looks like you are lost</h1>
            <button type="button" className="btn btn_green">
              <Link to={'/'}>Return to homepage</Link>
            </button>
          </div>
        </div>
      </section>
      <Solution />
      <ContactForm />
      <Footer />
    </>
    
    
  )
}

export default NotFound;