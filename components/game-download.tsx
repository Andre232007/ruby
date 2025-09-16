"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Github, ExternalLink, Gamepad2 } from "lucide-react"

export function GameDownload() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4 text-balance">Super Bombinhas</h2>
        <p className="text-lg text-muted-foreground text-pretty">
          Um jogo de plataforma 2D completo desenvolvido inteiramente em Ruby!
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <Gamepad2 className="w-8 h-8 text-primary" />
              <CardTitle>Sobre o Jogo</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Super Bombinhas é um jogo de plataforma retrô inspirado em clássicos como Super Mario World, mas com uma
              mecânica única de troca de personagens. Foi construído usando Ruby com as bibliotecas Gosu e MiniGL.
            </p>

            <div className="space-y-3">
              <h4 className="font-semibold">Características:</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Jogo de plataforma 2D completo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Mecânica única de troca de personagens</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Editor de níveis incluído</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Múltiplos modos de jogo</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Código fonte aberto (GPL-3.0)</span>
                </li>
              </ul>
            </div>

            <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
              <h5 className="font-semibold text-accent mb-2">Tecnologias Utilizadas</h5>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">Ruby</span>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">Gosu</span>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">MiniGL</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Downloads e Links</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <Button
                className="w-full justify-start gap-3"
                size="lg"
                onClick={() =>
                  window.open("https://github.com/victords/super-bombinhas/archive/refs/heads/master.zip", "_blank")
                }
              >
                <Download className="w-5 h-5" />
                Baixar Código Fonte (ZIP)
              </Button>

              <Button
                variant="outline"
                className="w-full justify-start gap-3 bg-transparent"
                size="lg"
                onClick={() => window.open("https://github.com/victords/super-bombinhas", "_blank")}
              >
                <Github className="w-5 h-5" />
                Ver no GitHub
              </Button>

              <Button
                variant="outline"
                className="w-full justify-start gap-3 bg-transparent"
                size="lg"
                onClick={() => window.open("https://github.com/victords/super-bombinhas/releases", "_blank")}
              >
                <ExternalLink className="w-5 h-5" />
                Releases Oficiais
              </Button>

              <Button
                variant="secondary"
                className="w-full justify-start gap-3"
                size="lg"
                onClick={() => window.open("https://victords.itch.io/super-bombinhas", "_blank")}
              >
                <ExternalLink className="w-5 h-5" />
                Jogar no itch.io
              </Button>

              <Button
                variant="secondary"
                className="w-full justify-start gap-3"
                size="lg"
                onClick={() => window.open("https://store.steampowered.com/app/1553840", "_blank")}
              >
                <ExternalLink className="w-5 h-5" />
                Comprar no Steam
              </Button>
            </div>

            <div className="bg-muted/50 p-4 rounded-lg">
              <h5 className="font-semibold mb-2">Como Executar:</h5>
              <ol className="text-sm space-y-1 text-muted-foreground">
                <li>1. Instale Ruby em seu sistema</li>
                <li>2. Instale as gems Gosu e MiniGL</li>
                <li>3. Baixe o código fonte</li>
                <li>
                  4. Execute: <code className="bg-background px-1 rounded">ruby game.rb</code>
                </li>
              </ol>
            </div>

            <div className="text-center pt-4">
              <p className="text-sm text-muted-foreground">⭐ 310 estrelas no GitHub | 🍴 16 forks</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
