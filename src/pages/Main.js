import FirstScreen from '../components/First_Screen';
import Techno from '../components/Techno';
import Clutch from '../components/Clutch';
import Services from '../components/Services';
import Solution from '../components/Solution';
import Achievements from '../components/Achievements';
import Partners from '../components/Partners';
import ContactForm from '../components/ContactForm';
import Links from '../components/small_components/Links';


function Main(){
  return (
    <>
      <FirstScreen />
      <Links />
      <Techno />
      <Clutch />
      <Services />
      <Solution />
      <Achievements />
      <Partners />
      <ContactForm />
    </>
  )
}

export default Main;