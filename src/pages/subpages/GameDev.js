import Solution from "../../components/Solution";
import FrontSection from '../../components/common/FrontSection';
import Information from "../../components/common/Information";
import Clutch from "../../components/Clutch";
import logo from '../../assets/img/appFront/gameAppFront.svg';
import ServiceLayout from "../../components/common/ServicesLayout";
import ServiceSlider from "../../components/small_components/ServiceSlider";
import Accordion from "../../components/common/Accordion";

import { gameDevInfo } from "../../data/InfoAppServicesAndTechno";
import { mainInfo } from "../../data/InfoAppServicesAndTechno";

function GameDev(){
    return(
        <>
            <FrontSection header={'Game development outsourcing'}  url={logo} alt={'Game development outsourcing'}/>
            <Information info={gameDevInfo} />
            <Clutch />
            <ServiceLayout />
            <Solution />
            <Information info={mainInfo} />
            <ServiceSlider />
            <Accordion />
        </>
    )
}

export default GameDev;