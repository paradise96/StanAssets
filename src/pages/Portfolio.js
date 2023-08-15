import FrontSection from "../components/common/FrontSection";
import PortfolioSection from "../components/common/PortfolioSection";
import logo from '../assets/img/appFront/portfolioAppFront.svg';
import Solution from "../components/Solution";
import ContactForm from "../components/ContactForm";


function Portfolio(){
  return (
      <>
         <FrontSection header={'stan assets portfolio'} url={logo} alt={'stan assets portfolio'}/>
      <PortfolioSection />
      <Solution />
      <ContactForm />
      </>
  )
}

export default Portfolio;