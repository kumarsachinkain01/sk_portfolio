import React from 'react'
import { cn } from '@/lib/utils'
import { Briefcase, Code, User } from 'lucide-react'

const AboutSection = () => {
  const handleDownloadCV = () => {
  const fileUrl = 'public/resume/Sachin -1.pdf';
  // let resume = "src/assets/Sachin -1.pdf"

  // Open the file in a new tab
  window.open(fileUrl, '_blank');

  // Create a temporary <a> element for downloading
  const link = document.createElement('a');
  link.href = fileUrl;
  link.download = 'Sachin_Kumar_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <section id='about'  className='py-12 px-4 sm:px-6 md:px-12 lg:px-24 w-full'>
      {" "}
        <div className='max-w-6xl mx-auto w-full'>
          <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center animate-[var(--animate-fade-in)]'>
            About <span className={cn(
                'inline-block logo-gradient text-glow animate-[var(--animate-fade-in-delay-1)] font-extrabold mx-2'
              )}>Me</span>
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
             <div className='space-y-5'>
                 <h3 className='text-2xl font-semibold'>Passionate Web Developer & Tech Creator</h3>
                 <p className='text-muted-foreground'>
                  With hands-on experience in full-stack web development, I specialize in building responsive, accessible, and high-performing web applications using modern technologies like React, JavaScript, and Tailwind CSS.

                  On the backend, I work with Node.js, Express, and MongoDB to create robust RESTful APIs and scalable database solutions. I'm passionate about turning ideas into interactive user experiences and constantly improving my skills to stay updated with the latest in web technologies
                 </p>

                 <p className='text-muted-foreground'>
                  I'm passionate about creating elegant solutions to complex problems, and I'm constantly learning new technologies and techniques to stay at the forefront of the ever-evolving web landscape.
                 </p>
                 <div className='flex flex-col sm:flex-row   gap-4 justify-center'>
                  <a href="#contact"   className="cosmic-button inline-block">
                    {" "}
                    Get In Touch
                  </a>

                   <a href="/resume/Sachin -1.pdf"
                      download="Sachin_Kumar_CV.pdf"
                      className="cosmic-button inline-block px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 cursor-pointer text-glow"
                      aria-label="Download CV">
                      Download CV
                  </a>
                 </div>
             </div>


             <div className="grid grid-cols-1 gap-6">
  {/* Card 1 */}
  <div className="gradient-border p-6 card-hover">
    <div className="flex items-start gap-4 flex-wrap sm:flex-nowrap">
      <div className="p-3 rounded-full bg-[#171729] shrink-0">
        <Code className="h-6 w-6 text-[#7F7FD5]" />
      </div>
      <div className="text-left break-words max-w-full">
        <h4 className="font-semibold text-lg">Web Development</h4>
        <p className="text-muted-foreground">
          Creating responsive websites and applications with modern frameworks.
        </p>
      </div>
    </div>
  </div>

  {/* Card 2 */}
  <div className="gradient-border p-6 card-hover">
    <div className="flex items-start gap-4 flex-wrap sm:flex-nowrap">
      <div className="p-3 rounded-full bg-[#171729] shrink-0">
        <User className="h-6 w-6 text-[#7F7FD5]" />
      </div>
      <div className="text-left break-words max-w-full">
        <h4 className="font-semibold text-lg">UI/UX Design</h4>
        <p className="text-muted-foreground">
          Designing intuitive user interfaces and seamless user experience.
        </p>
      </div>
    </div>
  </div>

  {/* Card 3 */}
  <div className="gradient-border p-6 card-hover">
    <div className="flex items-start gap-4 flex-wrap sm:flex-nowrap">
      <div className="p-3 rounded-full bg-[#171729] shrink-0">
        <Briefcase className="h-6 w-6 text-[#7F7FD5]" />
      </div>
      <div className="text-left break-words max-w-full">
        <h4 className="font-semibold text-lg">Project Management</h4>
        <p className="text-muted-foreground">
          Leading projects from conception to completion with agile methodologies.
        </p>
      </div>
    </div>
  </div>
</div>

            

          </div>
        </div>
    </section>
  )
}

export default AboutSection