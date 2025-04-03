
import { useEffect, useState } from 'react';
import { SocialIcons } from '@/components/SocialIcons';
import { Button } from '@/components/ui/button';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  const [clickCount, setClickCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);
  
  useEffect(() => {
    if (clickCount >= 5) {
      setShowEasterEgg(true);
      const timer = setTimeout(() => {
        setShowEasterEgg(false);
        setClickCount(0);
      }, 5000);
      
      return () => clearTimeout(timer);
    }
  }, [clickCount]);
  
  return (
    <section id="home" className="min-h-[90vh] flex flex-col justify-center items-center relative py-20">
      <div className="absolute inset-0 bg-grid -z-10"></div>
      
      <div className="container max-w-4xl mx-auto text-center px-4 z-10">
        <h1 
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 relative inline-block"
          onClick={() => setClickCount(prev => prev + 1)}
        >
          <span className="text-gradient">Yashash Mathur</span>
          
          {showEasterEgg && (
            <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-royal-500 text-white p-2 rounded-lg text-sm animate-float">
              ✨ I can solve a cube in under 30 seconds! ✨
            </div>
          )}
        </h1>
        
        <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
          Innovating with Code & Creativity
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button asChild className="bg-royal-600 hover:bg-royal-700 text-white">
            <a href="#projects">View Projects</a>
          </Button>
          
          <Button asChild variant="outline" className="border-royal-500">
            <a href="#contact">Get in Touch</a>
          </Button>
        </div>
        
        <SocialIcons iconSize={24} className="justify-center" />
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll to About section"
      >
        <ArrowDown className="h-6 w-6 text-royal-600 dark:text-royal-400" />
      </a>
    </section>
  );
}
