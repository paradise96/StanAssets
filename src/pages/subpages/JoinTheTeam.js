import FrontSection from '../../components/common/FrontSection';
import JoinDescription from '../../components/small_components/JoinDesription';
import picture from '../../assets/img/joinTheTeam.svg';
import JoinAccordeon from '../../components/small_components/JoinTeamAccordeon';


function JoinTeam(){
    return (
        <>
            <FrontSection header={'Join the team'} url={picture} alt={'Join the team logo'} />
            <JoinDescription />
            <JoinAccordeon />
        </>
    )
}

export default JoinTeam;