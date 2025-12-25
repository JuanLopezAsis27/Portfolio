import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export function Projects() {
  const projects = [
    {
      title: "Plataforma E-commerce",
      description:
        "Plataforma de comercio electrónico con carrito de compras, gestión de productos y de usuarios",
      technologies: ["React", "C#", ".NET", "SqlServer"],
      developers: ["Juan Manuel López Asis", "Maximiliano Vega"],
      github: "https://github.com/JuanLopezAsis27/Ecommerce",
      demo: "https://demo.com",
      image: "/modern-ecommerce-dashboard.png",
    },
    {
      title: "Web para Restaurante - Reservas",
      description:
        "Aplicación web para restaurante que permite a los clientes hacer reservas y al Admin gestionar los usuarios creados y las reservas",
      technologies: ["React", "Node.js", "MongoDB", ],
      developers: ["Juan Manuel López Asis"],
      github: "https://github.com/JuanLopezAsis27/Restaurante-frontend.git",
      demo: "https://restaurante-frontend-ten.vercel.app/",
      image: "/restaurante.png",
    },
    {
      title: "Web creada con WordPress",
      description: "Web creada con el CMS WordPress que permite gestionar contenido fácilmente, usando temas y plugins para personalizarlo facilmente",
      technologies: ["WordPress", "PHP"],
      developers: ["Juan Manuel López Asis"],
      demo: "https://srv1175174.hstgr.cloud/",
      image: "/wordpress.png",
    },
    {
      title: "Gestion interna para empresa de desarrollo de videojuegos",
      description: "Herramienta interna para gestionar proyectos, usuarios, plataformas y empleados en una empresa de desarrollo de videojuegos",
      technologies: ["Node.js", "TypeScript", "MySQL", "React", "Docker" ],
      developers: ["Juan Manuel López Asis", "Sarco Felipe Raul", "Pulido Luciano Nicolas"],
      github: "https://github.com/PulidoLuciano/WyvernSRL.git",
      demo: "https://drive.google.com/file/d/1n-pktFZgnw565uO6tJgTFwlYXIZsrkeU/view?usp=sharing",
      image: "/wyvern.png",
    },
    {
      title: "Landing Page - La Entrerriana",
      description: "Landing page para la empresa 'La Entrerriana'",
      technologies: ["JavaScript", "HTML", "CSS"],
      developers: ["Juan Manuel López Asis",],
      github: "https://github.com/PulidoLuciano/WyvernSRL.git",
      demo: "https://entrerriana.com.ar/",
      image: "/laentrerriana.png",
    },
  ]

 return (
    <section id="projects" className="py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Proyectos Destacados</h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="overflow-hidden border-border/50 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="aspect-video relative overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    <p className="text-muted-foreground text-sm leading-relaxed">Tecnologias:</p>
                    {project.technologies.map((tech) => (
                      <span key={tech} className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <p className="text-muted-foreground text-sm leading-relaxed">Desarrolladores:</p>
                    {project.developers.map((devs) => (
                        <span key={devs} className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded">
                          {devs}
                        </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3 pt-2">
                    {project.github && 
                      <Button size="sm" variant="outline" className="gap-2 bg-transparent" asChild>
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                          Código
                        </a>
                      </Button>}
                    {project.demo && (
                      <Button size="sm" className="gap-2" asChild>
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
