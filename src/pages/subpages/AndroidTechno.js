import FrontSection from "../../components/common/FrontSection";
import Information from '../../components/common/Information';
import Solution from '../../components/Solution';

import logo from '../../assets/img/appFront/androidAppFront.svg';
import { androidInfo } from "../../data/InfoAppServicesAndTechno";
import { mainInfo } from "../../data/InfoAppServicesAndTechno";
import Clutch from "../../components/Clutch";
import ServiceLayout from "../../components/common/ServicesLayout";
import ServiceSlider from "../../components/small_components/ServiceSlider";
import Accordion from "../../components/common/Accordion";

function AndroidTechno(){
    return(
        <>
            <FrontSection header={'Android technologies'} url={logo} alt={'Android technologies'}/>
            <Information info={androidInfo} />
            <Clutch />
            <ServiceLayout />
            <Solution />
            <Information info={mainInfo} />
            <ServiceSlider />
            <Accordion />
        </>
    )
}

export default AndroidTechno;