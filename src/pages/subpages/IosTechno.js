import FrontSection from "../../components/common/FrontSection";
import Information from "../../components/common/Information";
import Solution from "../../components/Solution";
import Clutch from "../../components/Clutch";
import ServiceSlider from "../../components/small_components/ServiceSlider";
import Accordion from "../../components/common/Accordion";
import ServiceLayout from "../../components/common/ServicesLayout";

import logo from '../../assets/img/appFront/iosAppFront.svg';
import { iosInfo } from "../../data/InfoAppServicesAndTechno";
import { mainInfo } from "../../data/InfoAppServicesAndTechno";



function IosTechno(){
    return (
        <>
            <FrontSection header={'ios technologies'} url={logo} alt={'ios technologies'}/>
            <Information info={iosInfo} />
            <Clutch />
            <ServiceLayout />
            <Solution />
            <Information info={mainInfo} />
            <ServiceSlider />
            <Accordion />
        </>
    )
}

export default IosTechno;