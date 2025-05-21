import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowBigRight, ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "Tomato Clone",
    description:
      "A stunning Restaurant Tomato clone built with React and Tailwind CSS, featuring a modern UI and seamless user experience.",
    image: "/projects/tomato-project-2.png",
    tags: ["React", "Tailwind CSS"],
    demoUrl: "https://geek-food-03.vercel.app/",
    githubUrl: "https://github.com/kumarsachinkain01/Geek_Food_03/tree/main/GeekFood",
  },
  {
    id: 2,
    title: "Juspay Clone",
    description:
      "A responsive frontend replica of the Juspay payment gateway, emphasizing clean UI/UX, component modularity, and responsiveness.",
    image: "/projects/juspay-project.png",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "Flexbox"],
    demoUrl: "https://juspay-sepia.vercel.app/index.html",
    githubUrl: "https://github.com/Raaazamit1701/Major_Project_jusPay",
  },
  {
    id: 3,
    title: "Marketo Eye Glass",
    description:
      "A visually appealing e-commerce site for eyewear, showcasing sunglasses and frames with a focus on product presentation and user interaction.",
    image: "/projects/eye-glass-project.png",
    tags: ["HTML5", "CSS3", "JavaScript"],
    demoUrl: "https://kumarsachinkain01.github.io/Eye-Glass-UI/",
    githubUrl: "https://github.com/kumarsachinkain01/Eye-Glass-UI",
  },
];

const ProjectSection = () => {
  return (
    <section
      id="project"
      className="py-16 sm:py-24 px-4 relative bg-gradient-to-b from-background/90 to-primary/10"
    >
      <div className="container mx-auto max-w-6xl">
        <h2
          className={cn(
            "text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-center text-foreground text-glow",
            "animate-[var(--animate-fade-in)]"
          )}
        >
          Featured{' '}
          <span
            className={cn(
              "inline-block logo-gradient py-3 text-glow font-extrabold mx-2 animate-[var(--animate-fade-in-delay-1)]"
            )}
          >
            Projects
          </span>
        </h2>
        <p
          className={cn(
            "text-center text-foreground/80 text-base sm:text-lg mb-12 max-w-2xl mx-auto",
            "animate-[var(--animate-fade-in-delay-2)]"
          )}
        >
          Explore my recent projects, each crafted with precision, focusing on performance, accessibility, and exceptional user experience.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={cn(
                "group gradient-border bg-gradient-to-br from-card/95 to-primary/5 rounded-lg overflow-hidden shadow-md card-hover",
                "transition-all duration-300 animate-[var(--animate-fade-in-delay-3)]"
              )}
            >
              <div className="h-48 sm:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-foreground text-glow mb-2">
                  {project.title}
                </h3>
                <p className="text-foreground/80 text-sm sm:text-base mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs sm:text-sm font-medium rounded-full bg-primary/20 text-primary text-glow"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
  <div className="flex space-x-4 ">
    <a
      href={project.demoUrl}
      className="flex items-center space-x-2 text-foreground/80 hover:text-primary transition-colors duration-300 text-sm sm:text-base font-medium"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="text-glow">Demo URL</span>
      <ExternalLink size={20} className="text-glow" />
    </a>
    <a
      href={project.githubUrl}
      className="flex items-center space-x-2 text-foreground/80 hover:text-primary transition-colors duration-300 text-sm sm:text-base font-medium"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="text-glow">Github Repo</span>
      <Github size={20} className="text-glow" />
    </a>
  </div>
</div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
  <a
    href="https://github.com/kumarsachinkain01"
    className={cn(
      "inline-flex items-center space-x-3 px-6 py-3 text-base sm:text-lg font-semibold text-foreground/80 bg-primary/10 rounded-full",
      "hover:bg-primary/20 hover:text-primary transition-all duration-300 text-glow group"
    )}
    target="_blank"
    rel="noopener noreferrer"
  >
    <span>Check My GitHub</span>
    <ArrowBigRight
      className={cn(
        "h-6 w-6 text-primary group-hover:translate-x-1 transition-transform duration-300 text-glow"
      )}
    />
  </a>
</div>
      </div>
    </section>
  );
};

export default ProjectSection;

