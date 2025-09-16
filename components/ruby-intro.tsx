import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Globe, Zap, Heart } from "lucide-react"

export function RubyIntro() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4 text-balance">O que é Ruby?</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
          Ruby é uma linguagem de programação dinâmica, orientada a objetos, criada por Yukihiro "Matz" Matsumoto em
          1995 no Japão. Sua filosofia é simples: tornar a programação mais produtiva e divertida.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="text-center">
          <CardHeader>
            <Heart className="w-12 h-12 mx-auto text-primary mb-2" />
            <CardTitle>Felicidade do Programador</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Ruby foi criada com foco na felicidade e produtividade do desenvolvedor
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <Code className="w-12 h-12 mx-auto text-primary mb-2" />
            <CardTitle>Sintaxe Elegante</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Código limpo e legível que se parece com linguagem natural</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <Zap className="w-12 h-12 mx-auto text-primary mb-2" />
            <CardTitle>Dinâmica</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Tipagem dinâmica e flexibilidade para desenvolvimento rápido
            </p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardHeader>
            <Globe className="w-12 h-12 mx-auto text-primary mb-2" />
            <CardTitle>Comunidade Ativa</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Grande comunidade e ecossistema de gems (bibliotecas)</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Onde Ruby é Aplicada?</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-primary mb-2">Desenvolvimento Web</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Ruby on Rails - framework web popular</li>
                <li>• Sinatra - framework minimalista</li>
                <li>• APIs RESTful e GraphQL</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">Automação e Scripts</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Scripts de automação</li>
                <li>• Processamento de dados</li>
                <li>• DevOps e deployment</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">Jogos</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• Jogos 2D com Gosu</li>
                <li>• Prototipagem rápida</li>
                <li>• Game engines simples</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-primary mb-2">Empresas que Usam</h4>
              <ul className="space-y-1 text-sm text-muted-foreground">
                <li>• GitHub</li>
                <li>• Shopify</li>
                <li>• Airbnb</li>
                <li>• Basecamp</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
