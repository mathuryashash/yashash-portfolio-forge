
import { ThemeProvider } from '@/context/ThemeContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { About } from '@/components/sections/About';
import { Skills } from '@/components/sections/Skills';
import { Projects } from '@/components/sections/Projects';
import { Experience } from '@/components/sections/Experience';
import { Resume } from '@/components/sections/Resume';
import { Contact } from '@/components/sections/Contact';
import { ParticleBackground } from '@/components/ParticleBackground';

const Index = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen overflow-x-hidden">
        <ParticleBackground />
        <Header />
        
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Resume />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
