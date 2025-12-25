import { Card } from "@/components/ui/card"
import { Calendar, MapPin, Code } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="space-y-12">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Sobre mí</h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="p-8 space-y-6 border-border/50 hover:border-primary/50 transition-colors">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold">Juan Manuel López Asis</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Desarrollador de software apasionado por crear soluciones digitales elegantes y eficientes. 
                  Siempre en busca de aprender nuevas tecnologías y mejorar mis habilidades para ofrecer el mejor valor en cada proyecto.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span>23 años</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Tucumán, Argentina</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 space-y-6 border-border/50 bg-card/50">
              <h3 className="text-xl font-semibold">Experiencia</h3>

              <div className="space-y-6">
                <div className="space-y-2 border-l-2 border-primary pl-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">Desarrollador Freelancer</h4>
                    <span className="text-sm text-muted-foreground">2023 - Presente</span>
                  </div>
                </div>

                <div className="space-y-2 border-l-2 border-primary pl-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">Estudiante - Ingenieria en sistemas - 4to año</h4>
                  </div>
                  <p className="text-sm text-muted-foreground">UTN - FRT </p>
                </div>

                <div className="space-y-2 border-l-2 border-primary pl-4">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">Desarrollador Junior</h4>
                    <span className="text-sm text-muted-foreground">2025 - Presente</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Waichatt</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
