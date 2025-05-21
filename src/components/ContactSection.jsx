import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';

const service_id = import.meta.env.VITE_APP_SERVICE_ID;
const template_id = import.meta.env.VITE_APP_TEMPLATE_ID;
const user_id = import.meta.env.VITE_APP_USER_ID;


const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  console.log(service_id)
  const form = useRef(null);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    console.log(form.current)
    emailjs.sendForm(service_id, template_id, form.current, user_id)
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!");
      }, (error) => {
          console.log(error.text);
          alert("Failed to send message. Try again.");
      });

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Message Sent!",
      description: "Thank you for your message. I'll get back to you soon.",
    });
    setIsSubmitting(false);
    e.target.reset();
  };

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
      id="contact"
      ref={sectionRef}
      className="py-16 sm:py-24 px-4 relative bg-gradient-to-br from-background/95 to-primary/10"
    >
      <div className="container mx-auto max-w-6xl">
        <h2
          className={cn(
            "text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-center text-foreground text-glow",
            isVisible ? "animate-[var(--animate-fade-in)]" : "opacity-0"
          )}
        >
          Get In <span className="logo-gradient text-glow">Touch</span>
        </h2>
        <p
          className={cn(
            "text-center text-foreground/80 text-base sm:text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed",
            isVisible ? "animate-[var(--animate-fade-in-delay-1)]" : "opacity-0"
          )}
        >
          Have a project in mind or want to collaborate? I'm excited to connect and discuss new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          <div
            className={cn(
              "space-y-8",
              isVisible ? "animate-[var(--animate-fade-in-delay-2)]" : "opacity-0"
            )}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground text-glow">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Mail className="h-6 w-6 text-primary text-glow" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Email</h4>
                  <a
                    href="mailto:kumarsachinkain2000@gmail.com"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300 text-sm sm:text-base"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    kumarsachinkain2000@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 group">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Phone className="h-6 w-6 text-primary text-glow" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Phone</h4>
                  <a
                    href="tel:+919012584214"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300 text-sm sm:text-base"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +91 9012584214
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4 group">
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <MapPin className="h-6 w-6 text-primary text-glow" />
                </div>
                <div>
                  <h4 className="font-medium text-foreground">Location</h4>
                  <span className="text-foreground/80 text-sm sm:text-base">
                    Agra, India
                  </span>
                </div>
              </div>
            </div>
            <div className="pt-6">
  <h4 className="font-medium text-foreground text-center mb-4 text-glow">Connect With Me</h4>
  <div className="flex space-x-4 justify-center">
    <a
      href="https://www.linkedin.com/in/sachinkumarkain/"
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full bg-primary/10 text-foreground/80 hover:bg-primary/20 hover:text-primary transition-all duration-300"
    >
      <Linkedin className="h-6 w-6 text-glow" />
    </a>
    <a
      href="https://twitter.com"
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full bg-primary/10 text-foreground/80 hover:bg-primary/20 hover:text-primary transition-all duration-300"
    >
      <Twitter className="h-6 w-6 text-glow" />
    </a>
    <a
      href="https://github.com/kumarsachinkain01"
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-full bg-primary/10 text-foreground/80 hover:bg-primary/20 hover:text-primary transition-all duration-300"
    >
      <Github className="h-6 w-6 text-glow" />
    </a>
  </div>
</div>
          </div>

          <div
            className={cn(
              "gradient-border bg-gradient-to-br from-card/95 to-primary/10 p-6 sm:p-8 rounded-xl shadow-lg",
              isVisible ? "animate-[var(--animate-fade-in-delay-3)]" : "opacity-0"
            )}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-foreground text-glow mb-6">
              Send a Message
            </h3>
            <form ref={form} className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground/80 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className={cn(
                    "w-full px-4 py-3 rounded-md border border-primary/20 bg-background/50 text-foreground",
                    "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300",
                    "placeholder:text-foreground/50"
                  )}
                  placeholder="Enter your name..."
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground/80 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className={cn(
                    "w-full px-4 py-3 rounded-md border border-primary/20 bg-background/50 text-foreground",
                    "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300",
                    "placeholder:text-foreground/50"
                  )}
                  placeholder="example@gmail.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground/80 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className={cn(
                    "w-full px-4 py-3 rounded-md border border-primary/20 bg-background/50 text-foreground",
                    "focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300",
                    "placeholder:text-foreground/50 resize-none"
                  )}
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2 py-3 text-base font-medium",
                  "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg transition-all duration-300",
                  isSubmitting && "opacity-70 cursor-not-allowed"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="h-5 w-5 text-glow" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;







































// import {
//   Github,
//   Linkedin,
//   Mail,
//   MapPin,
//   Phone,
//   Send,
//   Twitch,
//   Twitter,
// } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { useToast } from "@/hooks/use-toast";
// import { useState } from "react";

//  const ContactSection = () => {
//   const { toast } = useToast();
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     setIsSubmitting(true);

//     setTimeout(() => {
//       toast({
//         title: "Message sent!",
//         description: "Thank you for your message. I'll get back to you soon.",
//       });
//       setIsSubmitting(false);
//     }, 1500);
//   };
//   return (
//     <section id="contact" className="py-24 px-4 relative bg-secondary/30">
//       <div className="container mx-auto max-w-5xl">
//         <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
//           Get In <span className="text-primary"> Touch</span>
//         </h2>

//         <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
//           Have a project in mind or want to collaborate? Feel free to reach out.
//           I'm always open to discussing new opportunities.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
//           <div className="space-y-8">
//             <h3 className="text-2xl font-semibold mb-6">
//               {" "}
//               Contact Information
//             </h3>

//             <div className="space-y-6 justify-center">
//               <div className="flex items-start space-x-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <Mail className="h-6 w-6 text-primary" />{" "}
//                 </div>
//                 <div>
//                   <h4 className="font-medium"> Email</h4>
//                   <a
//                     href="https://mail.google.com/mail"
//                     className="text-muted-foreground hover:text-primary transition-colors"
//                     target="_blank"
//                   >
//                     kumarsachinkain2000@gmail.com
//                   </a>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <Phone className="h-6 w-6 text-primary" />{" "}
//                 </div>
//                 <div>
//                   <h4 className="font-medium"> Phone</h4>
//                   <a
//                     href="tel:+9012584214"
//                     className="text-muted-foreground hover:text-primary transition-colors"
//                     target="_blank"
//                   >
//                     +91(123) 456-7890
//                   </a>
//                 </div>
//               </div>
//               <div className="flex items-start space-x-4">
//                 <div className="p-3 rounded-full bg-primary/10">
//                   <MapPin className="h-6 w-6 text-primary" />{" "}
//                 </div>
//                 <div>
//                   <h4 className="font-medium"> Location</h4>
//                   <a className="text-muted-foreground hover:text-primary transition-colors">
//                     Agra , India
//                   </a>
//                 </div>
//               </div>
//             </div>

//             <div className="pt-8">
//               <h4 className="font-medium mb-4"> Connect With Me</h4>
//               <div className="flex space-x-4 justify-center">
//                 <a href="#" target="_blank">
//                   <Linkedin />
//                 </a>
//                 <a href="https://www.linkedin.com/in/sachinkumarkain/" target="_blank">
//                   <Twitter />
//                 </a>
//                 <a href="https://github.com/kumarsachinkain01" target="_blank">
//                   <Github />
//                 </a>
//                 <a href="https://www.twitch.tv/" target="_blank">
//                   <Twitch />
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div
//             className="bg-card p-8 rounded-lg shadow-xs"
//             onSubmit={handleSubmit}
//           >
//             <h3 className="text-2xl font-semibold mb-6"> Send a Message</h3>

//             <form className="space-y-6">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium mb-2"
//                 >
//                   {" "}
//                   Your Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   name="name"
//                   required
//                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
//                   placeholder="Enter your name..."
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium mb-2"
//                 >
//                   {" "}
//                   Your Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   required
//                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary"
//                   placeholder="example@gmail.com"
//                 />
//               </div>

//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium mb-2"
//                 >
//                   {" "}
//                   Your Message
//                 </label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   required
//                   className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden foucs:ring-2 focus:ring-primary resize-none"
//                   placeholder="Hello, I'd like to talk about..."
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={isSubmitting}
//                 className={cn(
//                   "cosmic-button w-full flex items-center justify-center gap-2"
//                 )}
//               >
//                 {isSubmitting ? "Sending..." : "Send Message"}
//                 <Send size={16} />
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ContactSection