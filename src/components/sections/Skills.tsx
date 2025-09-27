
import { skills } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection } from "../common/AnimatedSection";

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <AnimatedSection>
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl text-center">
            My Tech Stack
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-center">
            I work with modern technologies to build amazing products.
          </p>
        </AnimatedSection>
        <AnimatedSection className="mt-12">
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="outline"
                className="py-2 px-4 text-md border-primary/50 bg-primary/10 text-primary transition-all hover:bg-primary/20"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
