/**
 * Somasphere Learning Field Notes — landing page.
 * Lead with a warm editorial composition, visible progress cues, and specific learner language.
 */
import { ArrowRight, Check, Compass, Layers3, Timer } from "lucide-react";
import { Link } from "wouter";

const features = [
  { icon: Compass, title: "Find your next step", body: "Turn a broad subject into a clear, manageable study route." },
  { icon: Layers3, title: "Practise the thinking", body: "Use quizzes and flashcards designed around competency, not cramming." },
  { icon: Timer, title: "Keep your rhythm", body: "Short, focused sessions that fit around school, home, and everything in between." },
];

export default function Landing() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-ink/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-[.88fr_1.12fr] lg:items-center lg:px-10 lg:py-20">
          <div className="relative z-10 max-w-xl animate-rise">
            <p className="mb-6 text-xs font-bold uppercase tracking-[.24em] text-terracotta">CBE learning, made clearer</p>
            <h1 className="font-display text-[clamp(3.6rem,7vw,6.8rem)] leading-[.9] tracking-[-.055em] text-ink">Study with a little more <em className="text-acacia">direction.</em></h1>
            <p className="mt-7 max-w-lg text-lg leading-8 text-ink/65">Somasphere helps Kenyan CBE students turn curiosity into confidence—one focused topic, practice session, and small win at a time.</p>
            <div className="mt-9 flex flex-wrap items-center gap-4"><Link href="/signup" className="group inline-flex items-center gap-3 rounded-full bg-acacia px-6 py-3.5 font-semibold text-paper shadow-soft transition-all hover:-translate-y-1">Build your study path <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" /></Link><a href="#how-it-works" className="font-semibold text-ink/60 underline decoration-terracotta/50 underline-offset-8 hover:text-acacia">See how it works</a></div>
            <div className="mt-12 flex items-center gap-7 border-t border-ink/10 pt-5 text-sm text-ink/55"><span><strong className="font-display text-2xl text-ink">4</strong> starter spaces</span><span><strong className="font-display text-2xl text-ink">1</strong> clear rhythm</span></div>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-[2rem] bg-acacia shadow-paper lg:min-h-[550px]">
            <img src="/manus-storage/somasphere-hero_49b50751.png" alt="Learner studying with a notebook and curriculum cards" className="absolute inset-0 h-full w-full object-cover mix-blend-multiply opacity-90" />
            <div className="absolute bottom-6 left-6 max-w-[210px] rounded-2xl border border-paper/30 bg-paper/90 p-4 shadow-soft backdrop-blur-sm"><p className="text-xs font-bold uppercase tracking-[.18em] text-terracotta">Today’s note</p><p className="mt-2 font-display text-xl leading-tight">Understanding is a practice, not a finish line.</p></div>
          </div>
        </div>
        <div className="pointer-events-none absolute -right-20 top-8 h-60 w-60 rounded-full border-[28px] border-sun/40" />
      </section>

      <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[.6fr_1.4fr]"><div><p className="text-xs font-bold uppercase tracking-[.24em] text-terracotta">A calmer way to revise</p><h2 className="mt-4 max-w-sm font-display text-5xl leading-[.95] tracking-[-.04em]">Your learning, in three useful moves.</h2></div><div className="grid gap-4 md:grid-cols-3">{features.map(({ icon: Icon, title, body }, index) => <article key={title} className="border-t-2 border-acacia pt-5"><div className="flex items-center justify-between"><Icon className="text-acacia" size={24} /><span className="font-display text-3xl text-ink/20">0{index + 1}</span></div><h3 className="mt-8 font-display text-2xl">{title}</h3><p className="mt-3 leading-7 text-ink/60">{body}</p></article>)}</div></div>
      </section>

      <section id="pathways" className="border-y border-ink/10 bg-sage/15"><div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[1fr_.9fr] lg:items-center lg:px-10"><div><p className="text-xs font-bold uppercase tracking-[.24em] text-terracotta">Make the path yours</p><h2 className="mt-4 max-w-xl font-display text-5xl leading-[.95] tracking-[-.04em]">A study space that remembers what matters.</h2><p className="mt-6 max-w-lg text-lg leading-8 text-ink/65">Start with the topic in front of you. Build a library around the questions you keep coming back to. Let your dashboard show the shape of your progress.</p><Link href="/signup" className="mt-8 inline-flex items-center gap-2 font-semibold text-acacia underline decoration-terracotta underline-offset-8">Open your learning space <ArrowRight size={17} /></Link></div><div className="relative overflow-hidden rounded-[2rem] bg-paper p-3 shadow-paper"><img src="/manus-storage/somasphere-journey_fedffd27.png" alt="Illustrated learning journey through reading, practice, and explanation" className="w-full rounded-[1.5rem]" /><div className="absolute right-7 top-7 rounded-full bg-sun px-3 py-1 text-xs font-bold text-ink">CBE pathway</div></div></div></section>

      <section className="mx-auto max-w-7xl px-6 py-20 text-center lg:px-10"><Check className="mx-auto text-acacia" size={28} /><h2 className="mx-auto mt-5 max-w-2xl font-display text-5xl leading-[.95] tracking-[-.04em]">Ready to turn today’s topic into tomorrow’s confidence?</h2><Link href="/signup" className="mt-8 inline-flex items-center gap-3 rounded-full bg-terracotta px-6 py-3.5 font-semibold text-paper shadow-soft transition-transform hover:-translate-y-1">Start with Somasphere <ArrowRight size={18} /></Link></section>
    </main>
  );
}
