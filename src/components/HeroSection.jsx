import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowDown } from 'lucide-react';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center"
    >
      <div className="container max-w-4xl text-center z-10 space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground text-glow">
          <span className="inline-block animate-[var(--animate-fade-in)]">
            Hi, I'm
          </span>
          <span
  className={cn(
    'inline-block logo-gradient text-glow animate-[var(--animate-fade-in-delay-1)] font-extrabold mx-2'
  )}
>
  {" "}
  Sachin
</span>
          <span className="inline-block text-gradient animate-[var(--animate-fade-in-delay-2)]">
            Kumar
          </span>
        </h1>
        <p
          className={cn(
            'text-xl md:text-2xl text-foreground/80 font-medium leading-relaxed bg-background/10 p-4 rounded-lg shadow-lg',
            'animate-[var(--animate-fade-in-delay-3)] transition-all duration-300 hover:bg-background/20 hover:shadow-xl hover:text-foreground'
          )}
        >
          A <span className="text-primary font-semibold">passionate developer</span> building{' '}
          <span className="text-primary font-semibold">innovative web solutions</span> with{' '}
          <span className="text-primary font-semibold">modern technologies</span>. Specializing in{' '}
          <span className="text-primary font-semibold">front-end development</span>, I build{' '}
          <span className="text-primary font-semibold">interfaces</span> that are both{' '}
          <span className="text-primary font-semibold">beautiful</span> and{' '}
          <span className="text-primary font-semibold">functional</span>.
        </p>
        <a
          href="#project"
          className="cosmic-button inline-block animate-[var(--animate-fade-in-delay-4)]"
        >
          View My Work
        </a>
      </div>
      <div
        className={cn(
          'absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer',
          'text-foreground/80 hover:text-primary transition-all duration-300'
        )}
      >
        <a
          href="#about"
          className="flex flex-col items-center space-y-2 p-2 rounded-lg hover:bg-background/100 hover:shadow-md"
        >
          <span
            className="text-lg font-semibold text-glow"
          >
            Scroll
          </span>
          <ArrowDown className="h-7 w-10 text-primary text-glow" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

// Sᴋ᭄☠ŞΔĆĦIŇ☠ᴮᴼˢˢ