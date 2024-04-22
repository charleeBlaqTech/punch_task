import './App.css';
import HeroSection from './components/HeroSection';
import TalentSection from './components/TalentSection';
import TestimonySection from './components/TestimonySection';
import FooterSection from './components/FooterSection';
import AssuranceSection from './components/AssuranceSection';
import JourneySection from './components/JourneySection';
import SlideSection from './components/SlidesSection';
import FaqSection from './components/FaqSection';

function App() {
  return (
    <main className="App">
      <HeroSection/>
      <TalentSection/>
      <TestimonySection/>
      <AssuranceSection/>
      <JourneySection/>
      <SlideSection/>
      <FaqSection/>
      <FooterSection/>
    </main>
  );
}

export default App;
