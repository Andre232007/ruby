import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play, ExternalLink } from "lucide-react"

export function YoutubePlaylist() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4 text-balance">Aprenda Ruby no YouTube</h2>
        <p className="text-lg text-muted-foreground text-pretty">Playlist completa para iniciantes em Ruby</p>
      </div>

      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Play className="h-6 w-6 text-ruby-600" />
            Ruby para Iniciantes - Playlist Completa
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="aspect-video rounded-lg overflow-hidden bg-muted">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/bLDH3NypOVo?list=PLnV7i1DUV_zOit4a_tEDf1_PcRd25dL7e"
              title="Ruby para Iniciantes"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>

          <div className="text-center space-y-4">
            <p className="text-muted-foreground">
              Esta playlist contém uma série completa de vídeos para aprender Ruby do zero, cobrindo desde conceitos
              básicos até tópicos mais avançados.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-ruby-600 hover:bg-ruby-700">
                <a
                  href="https://www.youtube.com/watch?v=bLDH3NypOVo&list=PLnV7i1DUV_zOit4a_tEDf1_PcRd25dL7e&index=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <Play className="h-4 w-4" />
                  Assistir Playlist Completa
                </a>
              </Button>

              <Button variant="outline" asChild>
                <a
                  href="https://www.youtube.com/playlist?list=PLnV7i1DUV_zOit4a_tEDf1_PcRd25dL7e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="h-4 w-4" />
                  Ver no YouTube
                </a>
              </Button>
            </div>
          </div>

          <div className="bg-muted/50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2">O que você vai aprender:</h4>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Instalação e configuração do Ruby</li>
              <li>• Sintaxe básica e estruturas de dados</li>
              <li>• Programação orientada a objetos</li>
              <li>• Manipulação de arquivos e exceções</li>
              <li>• Desenvolvimento de aplicações práticas</li>
              <li>• Boas práticas e padrões de código</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}
