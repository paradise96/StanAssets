import FrontSection from '../../components/common/FrontSection';
import logo from '../../assets/img/appFront/mobileAppFront.svg';
import Clutch from '../../components/Clutch';
import Information from '../../components/common/Information';
import Solution from '../../components/Solution';
import ServiceLayout from '../../components/common/ServicesLayout';
import ServiceSlider from '../../components/small_components/ServiceSlider';
import Accordion from '../../components/common/Accordion';


import { mobDevInfo } from '../../data/InfoAppServicesAndTechno';
import { mainInfo } from '../../data/InfoAppServicesAndTechno';
function MobileApp(){
    return (
        <>
        <FrontSection header={'Mobile Application Development'}  url={logo} alt={'Mobile Application Development'}/>
        <Information info={mobDevInfo}/>
        <Clutch />
        <ServiceLayout />
        <Solution />
        <Information info={mainInfo}/>
        <ServiceSlider />
        <Accordion />
        </>
    )
}
export default MobileApp;