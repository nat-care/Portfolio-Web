import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Projects from './components/Projects';
import ContactSection from './components/ContactSection';
import './index.css'

function App() {
  return (
    <div className="bg-white min-h-screen text-pastel-text selection:bg-[#F4C2C2] selection:text-white">
      <Navbar />
      <HeroSection />
      <Projects />
      <ContactSection />
    </div>
  );
}

export default App;