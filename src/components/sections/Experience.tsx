
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string[];
  skills: string[];
}

export function Experience() {
  const experiences: ExperienceItem[] = [
    {
      role: "Design Intern",
      company: "Stitch Times",
      period: "2024 - Present",
      description: [
        "Manipulated graphic images, animations and video into consolidated and seamless multimedia programs",
        "Developed mockups or product samples using digital or manual design equipment",
        "Applied creative abilities and trend knowledge to realign designs with current demands",
        "Created logos, icons, illustrations, infographics, and other graphics"
      ],
      skills: ["Graphic Design", "Animation", "Illustration", "Branding"]
    }
  ];
  
  return (
    <section id="experience" className="py-20">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-gradient">Experience</span>
        </h2>
        
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-8 relative">
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-royal-300 dark:bg-royal-800"></div>
              
              <div className="relative md:pl-8">
                <div className="hidden md:flex absolute -left-2 top-6 h-4 w-4 rounded-full bg-royal-500 dark:bg-royal-400"></div>
                
                <Card className="shadow-md bg-white/50 dark:bg-black/20 backdrop-blur-sm">
                  <CardHeader>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                      <div>
                        <CardTitle className="text-xl font-bold">{exp.role}</CardTitle>
                        <CardDescription className="text-base">{exp.company}</CardDescription>
                      </div>
                      <Badge variant="outline" className="self-start sm:self-auto bg-royal-100 dark:bg-royal-900 border-royal-300 dark:border-royal-700 text-royal-800 dark:text-royal-200">
                        {exp.period}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 mb-4">
                      {exp.description.map((item, i) => (
                        <li key={i} className="text-sm sm:text-base">{item}</li>
                      ))}
                    </ul>
                    
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
