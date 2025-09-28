
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "../common/AnimatedSection";
import { ArrowDown, Download, Eye } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8">
        <AnimatedSection>
          <h1 className="text-5xl font-extrabold font-headline tracking-tighter sm:text-7xl lg:text-8xl bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            Richard Abishekraj
          </h1>
          <p className="mt-6 text-lg text-cyan-300/90 max-w-3xl mx-auto sm:text-xl">
            Full-Stack Developer | UI/UX Enthusiast | Creative Coder
          </p>
          <p className="mt-4 text-base text-muted-foreground max-w-2xl mx-auto">
            A final-year Computer Science student passionate about crafting beautiful and functional web experiences.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <a href="#contact">
                Let's Collaborate
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#projects">
                <Eye className="mr-2" />
                View My Work
              </a>
            </Button>
             <Button size="lg" variant="outline" asChild>
              <a href="https://drive.google.com/drive/folders/1LkmGTqKxfllryzfDQR_IE4jIHItaGQ53" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2" />
                View My Resume
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </div>
       <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <a href="#about" aria-label="Scroll to about section">
          <ArrowDown className="h-8 w-8 text-primary animate-bounce" />
        </a>
      </div>
    </section>
  );
}
