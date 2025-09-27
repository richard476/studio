
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "../common/AnimatedSection";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8">
        <AnimatedSection>
          <h1 className="text-5xl font-extrabold font-headline tracking-tighter sm:text-7xl lg:text-8xl">
            Richard Abishekraj
          </h1>
          <p className="mt-6 text-lg text-primary max-w-2xl mx-auto sm:text-xl">
            A creative developer building elegant solutions in the digital space.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <a href="#projects">
                View My Work
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">
                Contact Me
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
