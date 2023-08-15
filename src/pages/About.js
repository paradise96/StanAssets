import FrontTeam from '../components/small_components/FrontTeam';
import Night from '../components/small_components/Night';
import Mission from '../components/small_components/Mission';
import Solution from '../components/Solution';
import ServiceSlider from '../components/small_components/ServiceSlider';
import family from '../assets/img/Join.svg';

function About(){
  return (
    <>
      <FrontTeam url={family} alt={'logo of the team'}/>
      <Night />
      <Mission />
      <Solution />
      <ServiceSlider />
    </>
  )
}

export default About