import './App.css';
import HeroSection from './components/HeroSection';
import TalentSection from './components/TalentSection';
import TestimonySection from './components/TestimonySection';
import FooterSection from './components/FooterSection';

function App() {
  return (
    <main className="App">
      <HeroSection/>
      <TalentSection/>
      <TestimonySection/>
      <FooterSection/>
    </main>
  );
}

export default App;
