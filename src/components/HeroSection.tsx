import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p 
            className="text-primary font-medium mb-4 animate-fade-up text-lg"
            style={{ animationDelay: "0.1s" }}
          >
            Hello, I'm
          </p>

          {/* Name */}
          <h1 
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="gradient-text">Prajwal</span>
            <br />
            <span className="text-foreground">Bhattarai</span>
          </h1>

          {/* Description */}
          <p 
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            A FullStack Web and App Developer crafting beautiful, responsive, and user-friendly web experiences 
            with React, Next.js, TypeScript, and Tailwind CSS & mobile apps with Flutter.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">Let's Connect</a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#about">Learn More</a>
            </Button>
          </div>

          {/* Social Links */}
          <div 
            className="flex justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary" asChild>
              <a href="https://github.com/bhattaraiprazwall" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary" asChild>
              <a href="https://www.linkedin.com/in/prajwal-bhattarai-3a28a8248/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </Button>
            <Button variant="ghost" size="icon" className="rounded-full hover:bg-primary/10 hover:text-primary" asChild>
              <a href="mailto:prajwalbhattarai80@gmail.com" aria-label="Email">
                <Mail size={20} />
              </a>
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
