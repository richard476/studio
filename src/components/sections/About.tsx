
import { AnimatedSection } from "../common/AnimatedSection";

export function About() {
  const aboutText = `Driven by a passion for crafting beautiful and functional web experiences, I'm a full-stack developer with a keen eye for design and a love for clean code. With a background in computer science, I've honed my skills in modern web technologies to build intuitive and performant applications. I thrive in collaborative environments, constantly learning and pushing the boundaries of what's possible on the web. My goal is to create digital products that not only meet user needs but also leave a lasting positive impact. When I'm not coding, I enjoy exploring the cosmos through my telescope and contributing to open-source projects.`;

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <AnimatedSection>
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl text-center">
            About Me
          </h2>
          <div className="mt-8 text-lg text-muted-foreground text-center leading-relaxed space-y-6">
            <p>{aboutText}</p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
