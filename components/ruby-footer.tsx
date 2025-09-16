"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Book, Users, Code } from "lucide-react"

export function RubyFooter() {
  return (
    <footer className="bg-muted/30 py-12 mt-16">
      <div className="container mx-auto px-4">
        <Card>
          <CardContent className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4">Continue Aprendendo Ruby</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore mais recursos para aprofundar seus conhecimentos em Ruby
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Book className="w-12 h-12 mx-auto text-primary mb-3" />
                <h4 className="font-semibold mb-2">Documentação</h4>
                <p className="text-sm text-muted-foreground mb-3">Documentação oficial completa da linguagem Ruby</p>
                <Button variant="outline" size="sm" onClick={() => window.open("https://ruby-doc.org/", "_blank")}>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  ruby-doc.org
                </Button>
              </div>

              <div className="text-center">
                <Users className="w-12 h-12 mx-auto text-primary mb-3" />
                <h4 className="font-semibold mb-2">Comunidade</h4>
                <p className="text-sm text-muted-foreground mb-3">Participe da comunidade Ruby brasileira</p>
                <Button variant="outline" size="sm" onClick={() => window.open("https://rubyonrailsbrasil.com.br/comunidades/", "_blank")}>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  ruby.org.br
                </Button>
              </div>

              <div className="text-center">
                <Code className="w-12 h-12 mx-auto text-primary mb-3" />
                <h4 className="font-semibold mb-2">Ruby on Rails</h4>
                <p className="text-sm text-muted-foreground mb-3">Framework web mais popular do Ruby</p>
                <Button variant="outline" size="sm" onClick={() => window.open("https://rubyonrails.org/", "_blank")}>
                  <ExternalLink className="w-4 h-4 mr-2" />
                  rubyonrails.org
                </Button>
              </div>
            </div>

            <div className="text-center text-sm text-muted-foreground border-t pt-6">
              <p>
                Criado para ensinar Ruby • Super Bombinhas Criado por{" "}
                <a
                  href="https://github.com/Andre232007"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  3IPI1
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </footer>
  )
}
