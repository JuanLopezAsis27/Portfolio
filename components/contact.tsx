import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Hablemos</h2>
            <div className="h-1 w-20 bg-primary rounded-full mx-auto" />
            <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
              Estoy siempre abierto a nuevas oportunidades y colaboraciones. No dudes en contactarme.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 space-y-6 border-border/50 hover:border-primary/50 transition-colors">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Información de Contacto</h3>

                <div className="space-y-3">
                  <a
                    href="mailto:juan@ejemplo.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <span>juan.lopezasis27@hotmail.com</span>
                  </a>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold">Redes Sociales</h4>
                <div className="flex items-center gap-4">
                  <a
                    href="https://github.com/JuanLopezAsis27"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/juan-lopez-asis-02ab33285"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-8 space-y-6 border-border/50 bg-gradient-to-br from-primary/10 to-chart-2/5">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">¿Listo para colaborar?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Si tienes un proyecto en mente o simplemente quieres charlar sobre tecnología, estaré encantado de
                  escucharte.
                </p>
                <Button size="lg" className="w-full gap-2" asChild>
                  <a href="mailto:juan.lopezasis27@hotmail.com">
                    <Mail className="w-4 h-4" />
                    Enviar Mensaje
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      <div className="container mx-auto max-w-4xl mt-16 pt-8 border-t border-border/50">
        <p className="text-center text-sm text-muted-foreground">© 2025 Juan Manuel López Asis. Todos los derechos reservados.</p>
      </div>
    </section>
  )
}
