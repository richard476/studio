
import Image from "next/image";
import { projects } from "@/lib/data";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";
import { AnimatedSection } from "../common/AnimatedSection";

export function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 bg-card/20">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <AnimatedSection>
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl text-center">
            My Projects
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-center max-w-2xl mx-auto">
            Here are some of the projects I'm proud to have worked on.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <AnimatedSection key={project.id} style={{ transitionDelay: `${index * 100}ms` }}>
              <Card className="h-full flex flex-col overflow-hidden transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                <CardHeader>
                  <div className="aspect-video relative overflow-hidden rounded-lg mb-4">
                     <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                      data-ai-hint={project.imageHint}
                    />
                  </div>
                  <CardTitle className="font-headline text-2xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                   {/* Can add tags or other content here */}
                </CardContent>
                <CardFooter className="flex justify-end gap-2">
                  <Button variant="outline" asChild>
                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Source
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
