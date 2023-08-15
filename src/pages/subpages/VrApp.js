import Front from '../../components/common/FrontSection';
import logo from '../../assets/img/appFront/vrAppFront.svg';
import Information from '../../components/common/Information';
import Clutch from '../../components/Clutch';
import Solution from '../../components/Solution';
import ServiceLayout from '../../components/common/ServicesLayout';
import ServiceSlider from '../../components/small_components/ServiceSlider';
import Accordion from '../../components/common/Accordion';

import { mainInfo } from '../../data/InfoAppServicesAndTechno';
import { vrAppInfo } from '../../data/InfoAppServicesAndTechno';



function VrApp(){
    return(
        <>
            <Front header={'Vr app development'}  url={logo} alt={'Vr app development'}/>
            <Information info={vrAppInfo} />
            <Clutch />
            <ServiceLayout />
            <Solution />
            <Information info={mainInfo} />
            <ServiceSlider />
            <Accordion />
        </>
    )
}

export default VrApp;