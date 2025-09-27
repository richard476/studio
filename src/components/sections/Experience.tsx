
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { AnimatedSection } from "../common/AnimatedSection";
import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    role: "Data Science and Analytics Intern",
    company: "Opportive Technologies",
    date: "July 2025 – August 2025",
    location: "Chennai, Tamil Nadu",
    description: [
      "Gained hands-on experience in data collection, cleaning, and analysis to extract meaningful business insights.",
      "Worked with Python, Pandas, and visualization libraries to support data-driven decision-making.",
      "Improved skills in problem-solving, data interpretation, and teamwork through real-world applications.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <AnimatedSection>
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl text-center">
            Relevant Experience
          </h2>
        </AnimatedSection>

        <div className="mt-12 space-y-8">
          {experiences.map((exp, index) => (
            <AnimatedSection key={index} style={{ transitionDelay: `${index * 100}ms` }}>
              <Card className="transition-all hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10">
                <CardHeader>
                  <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
                    <CardTitle className="font-headline text-2xl">{exp.role}</CardTitle>
                    <Badge variant="outline" className="w-fit">{exp.date}</Badge>
                  </div>
                  <CardDescription className="text-lg">{exp.company} - {exp.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                    {exp.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
