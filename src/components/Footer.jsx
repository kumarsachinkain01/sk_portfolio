import { ArrowUp, Github, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

const Footer = () => {
  return (
    <footer
      className={cn(
        "py-12 px-4 sm:px-6 bg-gradient-to-t from-background/95 to-primary/10 border-t border-primary/20 mt-12",
        "flex flex-col sm:flex-row justify-between items-center gap-6"
      )}
    >
      <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
        <p className="text-sm sm:text-base text-foreground/80 font-medium">
          © {new Date().getFullYear()} Sachin Kumar. All rights reserved.
        </p>
        <p className="text-xs sm:text-sm text-foreground/60 mt-2">
          Built with <span className="text-primary text-glow">React</span> & <span className="text-primary text-glow">Tailwind CSS</span>
        </p>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex space-x-4">
          <a
            href="https://github.com/kumarsachinkain01"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary/10 text-foreground/80 hover:bg-primary/20 hover:text-primary transition-all duration-300 text-glow"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/sachinkumarkain/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary/10 text-foreground/80 hover:bg-primary/20 hover:text-primary transition-all duration-300 text-glow"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-primary/10 text-foreground/80 hover:bg-primary/20 hover:text-primary transition-all duration-300 text-glow"
          >
            <Twitter className="h-5 w-5" />
          </a>
        </div>
        <a
          href="#hero"
          className={cn(
            "p-3 rounded-full bg-primary/10 text-primary hover:bg-primary/20 hover:shadow-lg",
            "transition-all duration-300 transform hover:-translate-y-1 text-glow"
          )}
        >
          <ArrowUp className="h-6 w-6" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;












































// import { ArrowUp } from "lucide-react";

//  const Footer = () => {
//   return (
//     <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center">
//       {" "}
//       <p className="text-sm text-muted-foreground">
//         {" "}
//         &copy; {new Date().getFullYear()} Pedrotech.co. All rights reserved.
//       </p>
//       <a
//         href="#hero"
//         className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
//       >
//         <ArrowUp size={20} />
//       </a>
//     </footer>
//   );
// };

// export default Footer