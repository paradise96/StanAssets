import FrontSection from "../../components/common/FrontSection";
import Information from '../../components/common/Information';
import logo from '../../assets/img/appFront/sdkAppFront.svg';
import Clutch from "../../components/Clutch";
import Solution from '../../components/Solution';

import { sdkInfo } from "../../data/InfoAppServicesAndTechno";
import { mainInfo } from "../../data/InfoAppServicesAndTechno";
import ServiceLayout from "../../components/common/ServicesLayout";
import ServiceSlider from "../../components/small_components/ServiceSlider";
import Accordion from "../../components/common/Accordion";

function SdkModeling(){
    return (
        <>
            <FrontSection header={'sdk 3d modeling'}  url={logo} alt={'sdk 3d modeling'}/>
            <Information info={sdkInfo} />
            <Clutch />
            <ServiceLayout />
            <Solution />
            <Information info={mainInfo} />
             <ServiceSlider />
            <Accordion />
        </>
    )
}

export default SdkModeling;