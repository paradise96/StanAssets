import FrontSection from "../components/common/FrontSection";
import logo from '../assets/img/appFront/androidAppFront.svg';
import Information from "../components/common/Information";
import ServiceLayout from "../components/common/ServicesLayout";
import Solution from "../components/Solution";
import ContactForm from "../components/ContactForm";
import ServiceSlider from "../components/small_components/ServiceSlider";
import Accordion from "../components/common/Accordion";

import { mobDevInfo } from "../data/InfoAppServicesAndTechno";
import { mainInfo } from "../data/InfoAppServicesAndTechno";
import Clutch from "../components/Clutch";


function Technologies(){
    return(
        <>
        <FrontSection header={'unity technologies'} url={logo} alt={'unity technologies'} />
        <Information info={mobDevInfo} />
        <Clutch />
        <ServiceLayout />
        <Solution />
        <Information info={mainInfo} />
        <ContactForm />
        <ServiceSlider />
        <Accordion />
        </>
    )
}

export default Technologies;