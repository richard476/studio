
import { socialLinks } from "@/lib/data";
import { ContactForm } from "../ContactForm";
import { Button } from "../ui/button";
import { AnimatedSection } from "../common/AnimatedSection";

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <AnimatedSection>
          <h2 className="text-3xl font-bold font-headline tracking-tight sm:text-4xl text-center">
            Get In Touch
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-center">
            Have a project in mind or just want to say hi? Feel free to reach out.
          </p>
        </AnimatedSection>

        <div className="mt-12">
          <ContactForm />
        </div>

        <AnimatedSection className="mt-16 text-center">
          <h3 className="text-xl font-semibold">Connect with me</h3>
          <div className="mt-4 flex justify-center gap-4">
            {socialLinks.map((link) => (
              <Button
                key={link.name}
                variant="outline"
                size="icon"
                asChild
                className="rounded-full"
              >
                <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                  <link.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
