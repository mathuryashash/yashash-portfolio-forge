
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Project {
  title: string;
  description: string;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  technologies: string[];
}

export function Projects() {
  const projects: Project[] = [
    {
      title: "Rescue Path Finder",
      description: "An application that finds the optimal path using pathfinding algorithms like A-star, Dijkstra's, DFS, and BFS.",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
      githubUrl: "https://github.com",
      technologies: ["Java", "SQL", "Pathfinding Algorithms"]
    },
    {
      title: "Music Player",
      description: "A custom music player application with play, pause, next, and previous functionality for songs in the playlist.",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2070&auto=format&fit=crop",
      githubUrl: "https://github.com",
      technologies: ["Java", "Media Handling"]
    }
  ];
  
  return (
    <section id="projects" className="py-20 bg-secondary/30 dark:bg-secondary/10">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-gradient">My Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="flip-card h-[450px]"
            >
              <div className="flip-card-inner h-full w-full">
                <div className="flip-card-front rounded-xl overflow-hidden shadow-lg">
                  <div className="relative h-full w-full group">
                    <div 
                      className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10"
                      style={{ opacity: 0.7 }}
                    ></div>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute bottom-0 left-0 right-0 p-6 z-20 text-white">
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            className="bg-royal-600/80 hover:bg-royal-700/80"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-sm text-gray-200 line-clamp-2">{project.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flip-card-back rounded-xl overflow-hidden shadow-lg">
                  <Card className="h-full flex flex-col">
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="outline" 
                            className="border-royal-400"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <CardDescription className="text-base">
                        {project.description}
                      </CardDescription>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                      {project.demoUrl && (
                        <Button asChild>
                          <a 
                            href={project.demoUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center gap-2"
                          >
                            <ExternalLink size={16} /> 
                            Live Demo
                          </a>
                        </Button>
                      )}
                      
                      {project.githubUrl && (
                        <Button asChild variant="outline">
                          <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center gap-2"
                          >
                            <Github size={16} /> 
                            GitHub
                          </a>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
