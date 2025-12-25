import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React", "JavaScript", "TypeScript", "HTML", "CSS"],
    },
    {
      title: "Backend",
      skills: ["Node.js", ".NET", "C#", "MongoDB", "MySQL"],
    },
    {
      title: "DevOps & Tools",
      skills: ["Git", "Docker"],
    },
    {
      title: "Otros",
      skills: ["Automatizaciones con n8n", "Chatbots con n8n", "Agile", "REST APIs"],
    },
  ]

  return (
    <section id="skills" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Habilidades</h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category) => (
              <Card
                key={category.title}
                className="p-6 space-y-4 border-border/50 hover:border-primary/50 transition-colors"
              >
                <h3 className="text-xl font-semibold text-primary">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="secondary"
                      className="text-sm px-3 py-1 bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
