import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Briefcase, Code, User } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-12 px-4 sm:px-6 md:px-12 lg:px-24 w-full bg-gradient-to-b from-background/95 to-primary/10"
    >
      <div className="max-w-6xl mx-auto w-full">
        <h2
          className={cn(
            'text-3xl sm:text-4xl md:text-5xl font-bold mb-12 text-center text-foreground text-glow',
            isVisible ? 'animate-[var(--animate-fade-in)]' : 'opacity-0'
          )}
        >
          About{' '}
          <span
            className={cn(
              'inline-block logo-gradient text-glow animate-[var(--animate-fade-in-delay-1)] font-extrabold mx-2'
            )}
          >
            Me
          </span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div
            className={cn(
              'space-y-5',
              isVisible ? 'animate-[var(--animate-fade-in-delay-2)]' : 'opacity-0'
            )}
          >
            <div className="flex justify-center mb-6">
  <div className="relative">
    <img
      src="/Sachin-Profile.png"
      alt="Sachin Kumar"
      className={cn(
        'w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-[20%] object-cover border-4 border-primary/20 shadow-lg',
        'transition-transform duration-500 hover:scale-105 hover:shadow-xl'
      )}
    />
    <div
      className={cn(
        'absolute -inset-4 sm:-inset-5 md:-inset-6 border-2 border-primary/10 rounded-[20%]',
        'animate-[spin_8s_linear_infinite] opacity-50'
      )}
    />
    <div
      className={cn(
        'absolute -inset-6 sm:-inset-7 md:-inset-8 border-2 border-dashed border-primary/15 rounded-[20%]',
        'animate-[spin_12s_linear_infinite_reverse] opacity-30'
      )}
    />
  </div>
</div>
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground text-glow text-center sm:text-left">
              Passionate Web Developer & Tech Creator
            </h3>
            <p
              className={cn(
                'text-foreground/80 text-sm sm:text-base md:text-lg leading-relaxed bg-background/20 p-4 sm:p-6 rounded-xl shadow-md',
                'transition-all duration-300 hover:bg-background/30 hover:shadow-lg'
              )}
            >
              With hands-on experience in <span className="text-primary font-semibold text-glow">full-stack web development</span>, I specialize in building{' '}
              <span className="text-primary font-semibold text-glow">responsive</span>,{' '}
              <span className="text-primary font-semibold text-glow">accessible</span>, and{' '}
              <span className="text-primary font-semibold text-glow">high-performing</span> web applications using modern technologies like{' '}
              <span className="text-primary font-semibold text-glow">React</span>,{' '}
              <span className="text-primary font-semibold text-glow">JavaScript</span>, and{' '}
              <span className="text-primary font-semibold text-glow">Tailwind CSS</span>.
            </p>
            <p
              className={cn(
                'text-foreground/80 text-sm sm:text-base md:text-lg leading-relaxed bg-background/20 p-4 sm:p-6 rounded-xl shadow-md',
                'transition-all duration-300 hover:bg-background/30 hover:shadow-lg'
              )}
            >
              On the backend, I work with <span className="text-primary font-semibold text-glow">Node.js</span>,{' '}
              <span className="text-primary font-semibold text-glow">Express</span>, and{' '}
              <span className="text-primary font-semibold text-glow">MongoDB</span> to create robust RESTful APIs and scalable database solutions. I'm passionate about turning ideas into{' '}
              <span className="text-primary font-semibold text-glow">interactive user experiences</span> and constantly improving my skills to stay at the forefront of the{' '}
              <span className="text-primary font-semibold text-glow">web landscape</span>.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <a
                href="#contact"
                className={cn(
                  'cosmic-button inline-block px-6 py-3 text-base sm:text-lg font-medium text-primary-foreground',
                  'transition-all duration-300 hover:shadow-lg'
                )}
              >
                Get In Touch
              </a>
              <a
                href="/resume/Sachin -1.pdf"
                download="Sachin_Kumar_CV.pdf"
                className={cn(
                  'inline-block px-6 py-3 text-base sm:text-lg font-medium rounded-full border border-primary text-primary',
                  'hover:bg-primary/10 hover:shadow-lg transition-all duration-300 text-glow cursor-pointer'
                )}
                aria-label="Download CV"
              >
                Download CV
              </a>
            </div>
          </div>

          <div
            className={cn(
              'grid grid-cols-1 gap-6',
              isVisible ? 'animate-[var(--animate-fade-in-delay-3)]' : 'opacity-0'
            )}
          >
            <div className="gradient-border p-5 sm:p-6 bg-gradient-to-br from-card/95 to-primary/10 rounded-xl shadow-md card-hover">
              <div className="flex items-start gap-4 flex-wrap sm:flex-nowrap">
                <div className="p-3 rounded-full bg-primary/10 shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <Code className="h-6 w-6 text-primary text-glow" />
                </div>
                <div className="text-left break-words max-w-full">
                  <h4 className="font-semibold text-lg text-foreground text-glow">Web Development</h4>
                  <p className="text-foreground/80 text-sm sm:text-base">
                    Creating <span className="text-primary font-semibold">responsive</span> websites and applications with modern frameworks like React and Tailwind CSS.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-5 sm:p-6 bg-gradient-to-br from-card/95 to-primary/10 rounded-xl shadow-md card-hover">
              <div className="flex items-start gap-4 flex-wrap sm:flex-nowrap">
                <div className="p-3 rounded-full bg-primary/10 shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <User className="h-6 w-6 text-primary text-glow" />
                </div>
                <div className="text-left break-words max-w-full">
                  <h4 className="font-semibold text-lg text-foreground text-glow">UI/UX Design</h4>
                  <p className="text-foreground/80 text-sm sm:text-base">
                    Designing <span className="text-primary font-semibold">intuitive</span> user interfaces and{' '}
                    <span className="text-primary font-semibold">seamless</span> user experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-5 sm:p-6 bg-gradient-to-br from-card/95 to-primary/10 rounded-xl shadow-md card-hover">
              <div className="flex items-start gap-4 flex-wrap sm:flex-nowrap">
                <div className="p-3 rounded-full bg-primary/10 shrink-0 group-hover:bg-primary/20 transition-colors duration-300">
                  <Briefcase className="h-6 w-6 text-primary text-glow" />
                </div>
                <div className="text-left break-words max-w-full">
                  <h4 className="font-semibold text-lg text-foreground text-glow">Project Management</h4>
                  <p className="text-foreground/80 text-sm sm:text-base">
                    Leading projects with <span className="text-primary font-semibold">agile methodologies</span> from conception to completion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


// import React from 'react'
// import { cn } from '@/lib/utils'
// import { Briefcase, Code, User } from 'lucide-react'

// const AboutSection = () => {
// //   const handleDownloadCV = () => {
// //   const fileUrl = 'public/resume/Sachin -1.pdf';
// //   // let resume = "src/assets/Sachin -1.pdf"

// //   // Open the file in a new tab
// //   window.open(fileUrl, '_blank');

// //   // Create a temporary <a> element for downloading
// //   const link = document.createElement('a');
// //   link.href = fileUrl;
// //   link.download = 'Sachin_Kumar_CV.pdf';
// //   document.body.appendChild(link);
// //   link.click();
// //   document.body.removeChild(link);
// // };

//   return (
//     <section id='about'  className='py-12 px-4 sm:px-6 md:px-12 lg:px-24 w-full'>
//       {" "}
//         <div className='max-w-6xl mx-auto w-full'>
//           <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center animate-[var(--animate-fade-in)]'>
//             About <span className={cn(
//                 'inline-block logo-gradient text-glow animate-[var(--animate-fade-in-delay-1)] font-extrabold mx-2'
//               )}>Me</span>
//           </h2>

//           <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
//              <div className='space-y-5'>
//                  <h3 className='text-2xl font-semibold'>Passionate Web Developer & Tech Creator</h3>
//                  <p className='text-muted-foreground'>
//                   With hands-on experience in full-stack web development, I specialize in building responsive, accessible, and high-performing web applications using modern technologies like React, JavaScript, and Tailwind CSS.

//                   On the backend, I work with Node.js, Express, and MongoDB to create robust RESTful APIs and scalable database solutions. I'm passionate about turning ideas into interactive user experiences and constantly improving my skills to stay updated with the latest in web technologies
//                  </p>

//                  <p className='text-muted-foreground'>
//                   I'm passionate about creating elegant solutions to complex problems, and I'm constantly learning new technologies and techniques to stay at the forefront of the ever-evolving web landscape.
//                  </p>
//                  <div className='flex flex-col sm:flex-row   gap-4 justify-center'>
//                   <a href="#contact"   className="cosmic-button inline-block">
//                     {" "}
//                     Get In Touch
//                   </a>

//                    <a href="/resume/Sachin -1.pdf"
//                       download="Sachin_Kumar_CV.pdf"
//                       className="cosmic-button inline-block px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 cursor-pointer text-glow"
//                       aria-label="Download CV">
//                       Download CV
//                   </a>
//                  </div>
//              </div>


//              <div className="grid grid-cols-1 gap-6">
//   {/* Card 1 */}
//   <div className="gradient-border p-6 card-hover">
//     <div className="flex items-start gap-4 flex-wrap sm:flex-nowrap">
//       <div className="p-3 rounded-full bg-[#171729] shrink-0">
//         <Code className="h-6 w-6 text-[#7F7FD5]" />
//       </div>
//       <div className="text-left break-words max-w-full">
//         <h4 className="font-semibold text-lg">Web Development</h4>
//         <p className="text-muted-foreground">
//           Creating responsive websites and applications with modern frameworks.
//         </p>
//       </div>
//     </div>
//   </div>

//   {/* Card 2 */}
//   <div className="gradient-border p-6 card-hover">
//     <div className="flex items-start gap-4 flex-wrap sm:flex-nowrap">
//       <div className="p-3 rounded-full bg-[#171729] shrink-0">
//         <User className="h-6 w-6 text-[#7F7FD5]" />
//       </div>
//       <div className="text-left break-words max-w-full">
//         <h4 className="font-semibold text-lg">UI/UX Design</h4>
//         <p className="text-muted-foreground">
//           Designing intuitive user interfaces and seamless user experience.
//         </p>
//       </div>
//     </div>
//   </div>

//   {/* Card 3 */}
//   <div className="gradient-border p-6 card-hover">
//     <div className="flex items-start gap-4 flex-wrap sm:flex-nowrap">
//       <div className="p-3 rounded-full bg-[#171729] shrink-0">
//         <Briefcase className="h-6 w-6 text-[#7F7FD5]" />
//       </div>
//       <div className="text-left break-words max-w-full">
//         <h4 className="font-semibold text-lg">Project Management</h4>
//         <p className="text-muted-foreground">
//           Leading projects from conception to completion with agile methodologies.
//         </p>
//       </div>
//     </div>
//   </div>
// </div>

            

//           </div>
//         </div>
//     </section>
//   )
// }

// export default AboutSection