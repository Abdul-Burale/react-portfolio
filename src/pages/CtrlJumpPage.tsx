import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";

const controls = [
  { key: "A", action: "Move left" },
  { key: "D", action: "Move right" },
  { key: "Space", action: "Jump" },
  { key: "X", action: "Dash" },
  { key: "ESC", action: "Quit" },
];

const features = [
  "Responsive platformer movement",
  "Wall-sliding and dash mechanics",
  "Enemy patrols and projectile behaviour",
  "Particles, sparks, screenshake, and transitions",
  "JSON tilemap-based levels",
];

const techNotes = [
  {
    title: "Game Loop",
    body:
      "The project uses a classic update-render loop to handle input, movement, collisions, enemies, particles, camera movement, and drawing each frame.",
  },
  {
    title: "Tilemap System",
    body:
      "Levels are loaded from JSON tilemaps, separating level data from the main game logic and making the game easier to extend.",
  },
  {
    title: "Browser Build",
    body:
      "The Python/Pygame project was packaged with Pygbag so it can run in the browser through WebAssembly.",
  },
];

export default function CtrlJumpPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-[#f5f3ef] text-[#0d0c0a]">
        <div className="max-w-6xl mx-auto px-6 py-10">
          <Link
            to="/"
            className="inline-flex text-sm text-[#777] hover:text-[#0d0c0a] transition-colors"
          >
            ← Back to portfolio
          </Link>

          <section className="mt-10">
            <p className="text-xs uppercase tracking-[0.2em] text-[#999] mb-4">
              Game Project
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-10 items-center">
              <div>
                <h1 className="text-4xl md:text-6xl font-black tracking-[-0.05em] leading-[0.95]">
                  Ctrl + Jump
                </h1>

                <p className="mt-6 text-lg md:text-xl text-[#555] leading-8 max-w-2xl">
                  A browser-playable 2D platformer built with Python and
                  Pygame, focused on responsive movement, game feel, enemies,
                  particles, and level progression.
                </p>

                <div className="flex flex-wrap gap-2 mt-6">
                  {[
                    "Python",
                    "Pygame",
                    "Pygbag",
                    "WebAssembly",
                    "2D Platformer",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="bg-[#151513] text-white text-xs px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-[#e8e3dc] rounded-2xl overflow-hidden shadow-sm">
                <img
                  src="/Ctrl_Jump.png"
                  alt="Ctrl + Jump 2D platformer preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </section>

          <section className="mt-14 bg-[#0d0c0a] rounded-3xl p-4 md:p-6">
            <div className="flex items-center justify-between gap-4 mb-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                  Playable Demo
                </p>
                <h2 className="text-2xl font-bold text-white mt-1">
                  Try it in the browser
                </h2>
              </div>

              <a
                href="https://abdul-burale.github.io/WebGame/"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex rounded-lg bg-white px-4 py-2 text-sm font-medium text-[#0d0c0a] hover:bg-[#f5f3ef] transition-colors"
              >
                Open Fullscreen
              </a>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10 bg-black">
              <iframe
                src="https://abdul-burale.github.io/WebGame/"
                title="Ctrl + Jump playable game"
                className="w-full h-[520px] bg-black"
              />
            </div>

            <a
              href="https://abdul-burale.github.io/WebGame/"
              target="_blank"
              rel="noopener noreferrer"
              className="sm:hidden mt-4 inline-flex rounded-lg bg-white px-4 py-2 text-sm font-medium text-[#0d0c0a]"
            >
              Open Fullscreen
            </a>
          </section>

          <section className="mt-16 grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-10">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#999] mb-3">
                Overview
              </p>
              <h2 className="text-3xl font-bold tracking-[-0.03em]">
                What I built
              </h2>
            </div>

            <div className="text-[#555] leading-8 space-y-5">
              <p>
                Ctrl + Jump is a small but complete platformer project. The
                focus was not just getting a character on screen, but making the
                movement feel responsive through dashing, wall-sliding,
                particles, camera movement, and visual feedback.
              </p>

              <p>
                The game was built in Python using Pygame, then packaged for the
                browser with Pygbag so it can be played without installing a
                local Python environment.
              </p>
            </div>
          </section>

          <section className="mt-16">
            <div className="mb-8">
              <p className="text-xs uppercase tracking-[0.2em] text-[#999] mb-3">
                Gameplay
              </p>
              <h2 className="text-3xl font-bold tracking-[-0.03em]">
                Controls and features
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-8">
              <article className="bg-white border border-[#e8e3dc] rounded-3xl p-6 md:p-8">
                <h3 className="text-2xl font-bold tracking-[-0.03em]">
                  Controls
                </h3>

                <div className="mt-6 space-y-3">
                  {controls.map((control) => (
                    <div
                      key={control.key}
                      className="flex items-center justify-between gap-4 border-b border-[#eee9e1] pb-3 last:border-b-0 last:pb-0"
                    >
                      <kbd className="min-w-16 rounded-xl border border-[#d8d2c8] bg-[#f5f3ef] px-3 py-2 text-center text-sm font-bold text-[#0d0c0a] shadow-sm">
                        {control.key}
                      </kbd>

                      <span className="text-sm md:text-base text-[#555] font-medium">
                        {control.action}
                      </span>
                    </div>
                  ))}
                </div>
              </article>

              <article className="bg-white border border-[#e8e3dc] rounded-3xl p-6 md:p-8">
                <h3 className="text-2xl font-bold tracking-[-0.03em]">
                  Gameplay features
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                  {features.map((feature) => (
                    <div
                      key={feature}
                      className="rounded-2xl bg-[#f5f3ef] border border-[#e8e3dc] p-4 text-sm text-[#555] leading-6"
                    >
                      <span className="inline-block h-2 w-2 rounded-full bg-[#e05252] mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>
              </article>
            </div>
          </section>

          <section className="mt-16">
            <p className="text-xs uppercase tracking-[0.2em] text-[#999] mb-3">
              Technical Notes
            </p>
            <h2 className="text-3xl font-bold tracking-[-0.03em] mb-8">
              How it works
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {techNotes.map((note) => (
                <article
                  key={note.title}
                  className="bg-white border border-[#e8e3dc] rounded-2xl p-6"
                >
                  <h3 className="text-xl font-bold tracking-[-0.03em]">
                    {note.title}
                  </h3>
                  <p className="text-[#555] leading-7 mt-3">{note.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-16 bg-white border border-[#e8e3dc] rounded-3xl p-8 md:p-10">
            <p className="text-xs uppercase tracking-[0.2em] text-[#999] mb-3">
              Reflection
            </p>

            <h2 className="text-3xl font-bold tracking-[-0.03em]">
              What I learned
            </h2>

            <p className="text-[#555] leading-8 mt-5 max-w-3xl">
              This project improved my understanding of game loops, collision
              handling, animation systems, tilemaps, entity behaviour, visual
              feedback, and deploying Python games to the web.
            </p>
          </section>

          <section className="mt-16 border-t border-[#e1ddd5] pt-8 pb-4">
            <p className="text-xs uppercase tracking-[0.2em] text-[#999] mb-4">
              Resources
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://abdul-burale.github.io/WebGame/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg bg-[#151513] px-4 py-2 text-sm font-medium text-white hover:bg-[#333] transition-colors"
              >
                Play Game
              </a>

              <a
                href="https://github.com/Abdul-Burale/WebGame"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-[#d8d2c8] px-4 py-2 text-sm font-medium text-[#0d0c0a] hover:bg-white transition-colors"
              >
                GitHub
              </a>

              <Link
                to="/"
                className="rounded-lg border border-[#d8d2c8] px-4 py-2 text-sm font-medium text-[#0d0c0a] hover:bg-white transition-colors"
              >
                Back to Projects
              </Link>
            </div>
          </section>
        </div>
      </main>
    </PageTransition>
  );
}