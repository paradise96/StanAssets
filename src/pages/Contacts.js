import BlockTitle from "../components/common/BlockTitle"
import Information from "../components/contacts/Information"
import FeedbackForm from "../components/contacts/FeedbackForm"
import ContactsMap from "../components/contacts/ContactsMap"

function Contacts(){
  return (
    <div className="contact-page">
      <section id="contact">
        <div className="container">
            <div className="contact-card">
                <div className="infos">
                  <BlockTitle title={'Get Here'} subtitle={'Contact Us'} marginBottom="4" />
                  <Information />
                </div>
                <div className="form">
                  <BlockTitle title={'Available 24/7'} subtitle={'Get In Touch'} marginBottom="4" />
                  <FeedbackForm />  
                </div>
            </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div id="map" style={{height: '500px'}}>
            <ContactsMap />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contacts