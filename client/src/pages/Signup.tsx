/**
 * Somasphere Learning Field Notes — signup page.
 * Ask only for the information needed to make the first learning space useful.
 */
import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link, useLocation } from "wouter";
import { supabase } from "../lib/supabase";

export default function Signup() {
  const [, navigate] = useLocation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    const { error } = await supabase.auth.signUp({ email, password, options: { data: { full_name: name } } });
    if (error) {
      setMessage(error.message);
      return;
    }
    navigate("/dashboard");
  }

  return <main className="mx-auto grid min-h-[calc(100vh-150px)] max-w-7xl gap-12 px-6 py-14 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:px-10"><div className="relative overflow-hidden rounded-[2rem] bg-acacia p-8 text-paper shadow-paper sm:p-12"><div className="absolute -right-16 -top-16 h-56 w-56 rounded-full border-[24px] border-sun/60" /><p className="relative text-xs font-bold uppercase tracking-[.24em] text-sun">Make space to learn</p><h1 className="relative mt-5 max-w-lg font-display text-6xl leading-[.9] tracking-[-.05em]">Your next chapter starts with one small step.</h1><div className="relative mt-12 space-y-4 text-paper/80"><p className="flex items-center gap-3"><CheckCircle2 size={19} className="text-sun" /> A personal place for your topics</p><p className="flex items-center gap-3"><CheckCircle2 size={19} className="text-sun" /> Practice that follows your pace</p><p className="flex items-center gap-3"><CheckCircle2 size={19} className="text-sun" /> Progress you can actually see</p></div></div><div className="mx-auto w-full max-w-md rounded-[2rem] border border-ink/10 bg-white/60 p-7 shadow-paper sm:p-10"><div className="mb-8"><p className="text-xs font-bold uppercase tracking-[.22em] text-terracotta">Create your space</p><h2 className="mt-3 font-display text-4xl">Let’s begin.</h2><p className="mt-3 text-ink/60">A few details, then you can start shaping your path.</p></div><form onSubmit={handleSubmit} className="space-y-5"><label className="block text-sm font-semibold">Your name<input required value={name} onChange={(event) => setName(event.target.value)} className="mt-2 w-full rounded-xl border border-ink/15 bg-paper px-4 py-3.5 outline-none transition focus:border-acacia focus:ring-4 focus:ring-acacia/10" placeholder="e.g. Akinyi" /></label><label className="block text-sm font-semibold">Email address<input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="mt-2 w-full rounded-xl border border-ink/15 bg-paper px-4 py-3.5 outline-none transition focus:border-acacia focus:ring-4 focus:ring-acacia/10" placeholder="you@example.com" /></label><label className="block text-sm font-semibold">Password<input required minLength={8} type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="mt-2 w-full rounded-xl border border-ink/15 bg-paper px-4 py-3.5 outline-none transition focus:border-acacia focus:ring-4 focus:ring-acacia/10" placeholder="At least 8 characters" /></label>{message && <p role="alert" className="rounded-xl bg-terracotta/10 px-4 py-3 text-sm text-terracotta">{message}</p>}<button type="submit" className="group flex w-full items-center justify-center gap-2 rounded-xl bg-acacia px-5 py-3.5 font-semibold text-paper shadow-soft transition hover:-translate-y-0.5">Create learning space <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></button></form><p className="mt-8 text-center text-sm text-ink/55">Already have a space? <Link href="/login" className="font-semibold text-acacia underline underline-offset-4">Sign in</Link></p></div></main>;
}
