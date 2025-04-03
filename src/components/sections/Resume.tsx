
import { FileBadge, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export function Resume() {
  const education = {
    degree: "Bachelor of Engineering in Information Sciences",
    school: "RV Institute of Technology and Management",
    period: "2023-2027",
    gpa: "9.0/10"
  };
  
  return (
    <section id="resume" className="py-20 bg-secondary/30 dark:bg-secondary/10">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-gradient">Resume</span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Card className="p-8 shadow-lg bg-white/70 dark:bg-black/40 backdrop-blur-sm">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
              <div className="flex items-center gap-3">
                <FileBadge className="h-8 w-8 text-royal-600 dark:text-royal-400" />
                <h3 className="text-2xl font-bold">Education & Resume</h3>
              </div>
              
              <Button className="bg-royal-600 hover:bg-royal-700">
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-8 mb-8">
              <Avatar className="w-32 h-32 border-4 border-royal-500">
                <AvatarImage 
                  src="/lovable-uploads/f7a7700e-f1e0-42e8-8921-965197d43059.png" 
                  alt="Yashash Mathur" 
                  className="object-cover"
                />
                <AvatarFallback>YM</AvatarFallback>
              </Avatar>
              
              <div>
                <p className="font-medium">{education.degree}</p>
                <p className="text-muted-foreground">{education.school}</p>
                <div className="flex justify-between text-sm mt-2">
                  <span>{education.period}</span>
                  <span className="font-medium">GPA: {education.gpa}</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-2">Skills Highlight</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <h5 className="font-medium mb-2">Technical Skills</h5>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Java</li>
                    <li>Flutter</li>
                    <li>Python</li>
                    <li>C</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-medium mb-2">Other Skills</h5>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Graphic design</li>
                    <li>Creative thinking</li>
                    <li>Public speaking</li>
                    <li>Team collaboration</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <Button variant="outline" className="border-royal-500">
                View Interactive Resume
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

