import { Gem } from "lucide-react"

export function RubyHeader() {
  return (
    <header className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-4 mb-6">
          <Gem className="w-16 h-16" />
          <h1 className="text-5xl font-bold text-balance">Aprenda Ruby</h1>
          <Gem className="w-16 h-16" />
        </div>
        <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto text-pretty">
          Descubra a elegância e simplicidade da linguagem de programação Ruby - uma linguagem criada para a felicidade
          do programador
        </p>
      </div>
    </header>
  )
}
