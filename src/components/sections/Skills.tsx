
import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Code, Palette, Users } from 'lucide-react';

export function Skills() {
  const [isLoaded, setIsLoaded] = useState(false);
  
  const technicalSkills = [
    { name: "Java", level: 90 },
    { name: "Flutter", level: 85 },
    { name: "Python", level: 75 },
    { name: "C", level: 70 }
  ];
  
  const designSkills = [
    { name: "Graphic Design", level: 90 },
    { name: "Creative Thinking", level: 85 },
    { name: "Animation", level: 70 },
    { name: "Illustration", level: 80 }
  ];
  
  const softSkills = [
    { name: "Public Speaking", level: 85 },
    { name: "Team Collaboration", level: 90 },
    { name: "Problem Solving", level: 88 },
    { name: "Adaptability", level: 85 }
  ];
  
  setTimeout(() => setIsLoaded(true), 500);
  
  return (
    <section id="skills" className="py-20">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-gradient">My Skills</span>
        </h2>
        
        <Tabs defaultValue="technical" className="max-w-3xl mx-auto">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="technical" className="flex items-center gap-2">
              <Code size={16} /> Technical
            </TabsTrigger>
            <TabsTrigger value="design" className="flex items-center gap-2">
              <Palette size={16} /> Design
            </TabsTrigger>
            <TabsTrigger value="soft" className="flex items-center gap-2">
              <Users size={16} /> Soft Skills
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="technical">
            <Card className="p-6 bg-white/50 dark:bg-black/20 backdrop-blur-sm">
              <div className="space-y-8">
                {technicalSkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={isLoaded ? skill.level : 0} 
                      className="h-2 transition-all duration-1000 ease-out"
                    />
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="design">
            <Card className="p-6 bg-white/50 dark:bg-black/20 backdrop-blur-sm">
              <div className="space-y-8">
                {designSkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={isLoaded ? skill.level : 0} 
                      className="h-2 transition-all duration-1000 ease-out"
                    />
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
          
          <TabsContent value="soft">
            <Card className="p-6 bg-white/50 dark:bg-black/20 backdrop-blur-sm">
              <div className="space-y-8">
                {softSkills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={isLoaded ? skill.level : 0} 
                      className="h-2 transition-all duration-1000 ease-out"
                    />
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
