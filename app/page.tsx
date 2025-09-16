import { RubyHeader } from "@/components/ruby-header"
import { RubyIntro } from "@/components/ruby-intro"
import { RubyConcepts } from "@/components/ruby-concepts"
import { GameDownload } from "@/components/game-download"
import { YoutubePlaylist } from "@/components/youtube-playlist"
import { RubyFooter } from "@/components/ruby-footer"

export default function RubyLearningPage() {
  return (
    <div className="min-h-screen bg-background">
      <RubyHeader />
      <main className="container mx-auto px-4 py-8 space-y-12">
        <RubyIntro />
        <RubyConcepts />
        <GameDownload />
        <YoutubePlaylist />
      </main>
      <RubyFooter />
    </div>
  )
}
