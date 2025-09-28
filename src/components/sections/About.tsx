
import { GraduationCap, School } from "lucide-react";
import { AnimatedSection } from "../common/AnimatedSection";

const education = [
  {
    institution: "SRM Institute of Science and Technology",
    degree: "B.Tech CSE, AI & Machine Learning",
    duration: "Sep 2022 – May 2026",
    location: "Chennai, Tamil Nadu",
    description: "CGPA: 8.10 (Till 6th semester)",
    icon: GraduationCap,
  },
  {
    institution: "Ebenezer Marcus Matriculation Higher Secondary School",
    degree: "State Board",
    duration: "Sep 2021 – May 2022",
    location: "Chennai, Tamil Nadu",
    description: "Completed my higher secondary education with a focus on science, mathematics, and computer science.",
    icon: School,
  },
];

export function About() {
  const aboutText = `Driven by a passion for crafting beautiful and functional web experiences, I'm a full-stack developer with a keen eye for design and a love for clean code. With a background in computer science, I've honed my skills in modern web technologies to build intuitive and performant applications. I thrive in collaborative environments, constantly learning and pushing the boundaries of what's possible on the web.`;

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <AnimatedSection>
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl text-center">
            About Me
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-center">
            My journey into the world of technology.
          </p>
        </AnimatedSection>
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <AnimatedSection>
            <div className="text-lg text-muted-foreground leading-relaxed space-y-6">
              <p>{aboutText}</p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="relative" style={{ transitionDelay: '200ms' }}>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-border -z-10"></div>
              
              <div className="space-y-12">
                {education.map((edu, index) => (
                  <div key={index} className="relative flex items-start">
                    <div className="absolute left-0 top-0 mt-1 flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 border border-primary/20">
                      <edu.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="ml-16">
                      <h3 className="text-lg font-semibold text-foreground">{edu.institution}</h3>
                      <p className="text-primary font-medium">{edu.degree}</p>
                      <p className="text-sm text-muted-foreground mt-1">{edu.duration}</p>
                      <p className="mt-2 text-muted-foreground">{edu.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
