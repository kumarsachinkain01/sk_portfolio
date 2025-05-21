import React from 'react'
import { cn } from '@/lib/utils'
import { Briefcase, Code, User } from 'lucide-react'

const AboutSection = () => {
  return (
    <section id='about'  className='py-24 px-24 relative '>
      {" "}
        <div className='container mx-auto mx-w-5xl'>
          <h2 className='text-3xl md:text-4xl font-bold mb-12 text-center animate-[var(--animate-fade-in)]'>
            About <span className={cn(
                'inline-block logo-gradient text-glow animate-[var(--animate-fade-in-delay-1)] font-extrabold mx-2'
              )}>Me</span>
          </h2>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
             <div className='space-y-6'>
                 <h3 className='text-2xl font-semibold'>Passionate Web Developer & Tech Creator</h3>
                 <p className='text-muted-foreground'>
                  With over 5 years of experience in web development , I specialize in creating responsive , accessible, add performant web applications using modern technologies.
                 </p>

                 <p className='text-muted-foreground'>
                  I'm passionate about creating elegant solutions to complex problems, and I'm constantly learning new technologies and techniques to stay at the forefront of the ever-evolving web landscape.
                 </p>
                 <div className='flex flex-col sm:flex-row   gap-4 justify-center'>
                  <a href="#contact"   className="cosmic-button inline-block">
                    {" "}
                    Get In Touch
                  </a>

                  <a href="#contact"  className="cosmic-button inline-block px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                    {" "}
                    Download CV
                  </a>
                 </div>
             </div>

             <div className='grid grid-cols-1 gap-6 '>
              <div className="gradient-border p-6 card-hover">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-[#171729]">
                    <Code className="h-6 w-6 text-[#7F7FD5]" />
                  </div>
                  <div className='text-left'>
                   <h4 className='font-semibold text-lg'>Web Development</h4>
                   <p className='text-muted-foreground'>
                    {" "}
                    Creating responsive websites and applications with modern frameworks.
                   </p>
                  </div>
                </div>
              </div>
              <div className='gradient-border p-6 card-hover'>
                <div className='flex items-start gap-4'>
                   <div className='p-3 rounded-full bg-[#171729]'>
                   <User className='h-6 w-6 text-[#7F7FD5] rounded-full'/>
                   </div>
                   <div className='text-left'>
                   <h4 className='font-semibold text-lg'>UI/UX design</h4>
                   <p className='text-muted-foreground'>
                    {" "}
                    Designing intuitive user interfaces and seamless user experience.
                   </p>
                  </div>
                </div>
              </div>
              <div className='gradient-border p-6 card-hover'>
                <div className='flex items-start gap-4'>
                   <div className='p-3 rounded-full bg-[#171729]'>
                   <Briefcase className='h-6 w-6 text-[#7F7FD5]'/>
                   </div>
                   <div className='text-left'>
                   <h4 className='font-semibold text-lg'>Project Management</h4>
                   <p className='text-muted-foreground'>
                    {" "}
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