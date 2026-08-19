import { useState } from "react";
import { ArrowLeft, ArrowRight, RotateCcw } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { completionPercent } from "@shared/studyLogic";

export default function Flashcards() {
  const { data: decks } = trpc.content.flashcardDecks.useQuery();
  const { data: cards = [] } = trpc.content.flashcards.useQuery({ deckId: decks?.[0]?.id || 1 });
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const card = cards[index];
  const move = (direction: number) => { setIndex((value) => Math.max(0, Math.min(cards.length - 1, value + direction))); setFlipped(false); };
  const reset = () => { setIndex(0); setFlipped(false); };
  if (!card) return <div className="mx-auto max-w-3xl rounded-3xl border border-[#e0e9df] bg-white p-10 text-center text-[#6b7f78]">Loading your study deck…</div>;
  const progress = completionPercent(index, cards.length);
  return <div className="mx-auto max-w-3xl"><div className="flex items-end justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e47d50]">Study deck</p><h1 className="mt-2 font-display text-4xl tracking-tight">{decks?.[0]?.title || "Foundations"}</h1></div><button onClick={reset} className="flex items-center gap-2 text-sm text-[#6b7f78] hover:text-[#173b36]"><RotateCcw size={16}/> Reset</button></div><div className="mt-8 flex items-center justify-between text-sm text-[#6b7f78]"><span>Card {index + 1} of {cards.length}</span><span>{progress}% complete</span></div><div className="mt-3 h-2 rounded-full bg-[#e5ece4]"><div className="h-2 rounded-full bg-[#75ad83] transition-all" style={{ width: `${progress}%` }}/></div><button onClick={() => setFlipped((value) => !value)} className="group mt-8 min-h-[340px] w-full [perspective:1000px]" aria-label="Flip flashcard"><div className={`relative min-h-[340px] w-full rounded-[2rem] text-left transition-transform duration-500 [transform-style:preserve-3d] ${flipped ? "[transform:rotateY(180deg)]" : ""}`}><div className="absolute inset-0 grid place-items-center rounded-[2rem] bg-[#173b36] p-10 text-center text-white shadow-[0_20px_50px_rgba(23,59,54,0.18)] [backface-visibility:hidden]"><div><p className="text-xs uppercase tracking-[0.2em] text-[#b7d6c1]">Tap to reveal</p><p className="mt-5 font-display text-3xl leading-tight md:text-4xl">{card.front}</p></div></div><div className="absolute inset-0 grid place-items-center rounded-[2rem] bg-[#f1b68f] p-10 text-center text-[#173b36] shadow-[0_20px_50px_rgba(228,125,80,0.18)] [backface-visibility:hidden] [transform:rotateY(180deg)]"><div><p className="text-xs uppercase tracking-[0.2em] text-[#6d4939]">Answer</p><p className="mt-5 font-display text-2xl leading-tight md:text-3xl">{card.back}</p></div></div></div></button><div className="mt-7 flex justify-center gap-3"><button disabled={index === 0} onClick={() => move(-1)} className="inline-flex items-center gap-2 rounded-xl border border-[#dfe8df] bg-white px-5 py-3 text-sm font-semibold text-[#173b36] disabled:opacity-40"><ArrowLeft size={16}/> Previous</button><button disabled={index === cards.length - 1} onClick={() => move(1)} className="inline-flex items-center gap-2 rounded-xl bg-[#173b36] px-5 py-3 text-sm font-semibold text-white disabled:opacity-40">Next <ArrowRight size={16}/></button></div></div>;
}
