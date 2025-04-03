
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';

export function About() {
  const [showDetailedBio, setShowDetailedBio] = useState(false);
  const [flipped, setFlipped] = useState(false);
  
  const toggleBio = () => {
    setShowDetailedBio(!showDetailedBio);
  };
  
  return (
    <section id="about" className="py-20 bg-secondary/30 dark:bg-secondary/10">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-gradient">About Me</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div 
            className={cn(
              "flip-card h-[350px] mx-auto max-w-[350px] w-full", 
              {"hover:cursor-pointer": !flipped}
            )}
            onClick={() => setFlipped(!flipped)}
          >
            <div className={cn("flip-card-inner relative h-full w-full", {
              "transform-y-180": flipped
            })}>
              <div className="flip-card-front h-full w-full rounded-2xl overflow-hidden shadow-xl border border-royal-200 dark:border-royal-800">
                <img 
                  src="/lovable-uploads/c429f889-7e54-4876-9795-c59c36bc0378.png" 
                  alt="Yashash Mathur" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flip-card-back h-full w-full bg-royal-100 dark:bg-royal-900 rounded-2xl shadow-xl p-8 flex flex-col justify-center items-center">
                <h3 className="text-2xl font-bold mb-4 text-royal-800 dark:text-royal-200">Fun Facts</h3>
                <ul className="space-y-3 text-left">
                  <li>✈️ I love to travel</li>
                  <li>🎵 Passionate about music & filmmaking</li>
                  <li>🏃‍♂️ Training for a half marathon</li>
                  <li>🧩 Can solve a Rubik's cube in under 30 seconds!</li>
                </ul>
                <Button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setFlipped(false);
                  }}
                  variant="ghost" 
                  className="mt-4"
                >
                  Flip back
                </Button>
              </div>
            </div>
          </div>
          
          <div>
            <Card className="p-6 bg-white/50 dark:bg-black/20 backdrop-blur-sm">
              <div className="prose dark:prose-invert max-w-none">
                {showDetailedBio ? (
                  <div className="space-y-4">
                    <p>
                      Motivated intern with a background in project management and research. I bring practical
                      experience from hands-on roles showcasing problem-solving, teamwork, and
                      adaptability skills.
                    </p>
                    <p>
                      My strong communication abilities have led to impactful contributions
                      to team projects. I maintain a diligent and quick-learning approach, committed to achieving
                      company goals.
                    </p>
                    <p>
                      Currently working as a Design Intern at Stitch Times, where I manipulate graphic images, 
                      animations, and video into consolidated multimedia programs. I develop mockups and product 
                      samples using digital and manual design equipment, applying creative abilities and trend 
                      knowledge to align designs with current demands.
                    </p>
                    <p>
                      I'm proficient in Java, Flutter, Python, and C, with expertise in graphic design and creative thinking.
                      My educational background includes a Bachelor of Engineering in Information Sciences from RV Institute 
                      of Technology and Management (2023-2027) with a GPA of 9.0/10.
                    </p>
                  </div>
                ) : (
                  <p>
                    Motivated intern with a background in project management and research. I bring practical
                    experience from hands-on roles showcasing problem-solving, teamwork, and
                    adaptability skills. My strong communication abilities have led to impactful contributions
                    to team projects. I maintain a diligent and quick-learning approach, committed to achieving
                    company goals.
                  </p>
                )}
                
                <Button 
                  onClick={toggleBio} 
                  variant="outline" 
                  className="mt-4 border-royal-400"
                >
                  {showDetailedBio ? "Show Less" : "Read More"}
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
