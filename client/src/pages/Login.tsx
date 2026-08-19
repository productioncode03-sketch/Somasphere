/**
 * Somasphere Learning Field Notes — login page.
 * Keep auth forms quiet, legible, and specific; focus the learner on returning to their rhythm.
 */
import { FormEvent, useState } from "react";
import { ArrowLeft, ArrowRight, LockKeyhole, Mail } from "lucide-react";
import { Link, useLocation } from "wouter";
import { supabase } from "../lib/supabase";

export default function Login() {
  const [, navigate] = useLocation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setMessage(error.message);
      return;
    }
    navigate("/dashboard");
  }

  return <main className="mx-auto grid min-h-[calc(100vh-150px)] max-w-7xl gap-12 px-6 py-14 lg:grid-cols-[.85fr_1.15fr] lg:items-center lg:px-10"><div className="hidden lg:block"><Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-ink/55 hover:text-acacia"><ArrowLeft size={16} /> Back to home</Link><p className="mt-20 text-xs font-bold uppercase tracking-[.24em] text-terracotta">Return to your notes</p><h1 className="mt-4 max-w-md font-display text-6xl leading-[.9] tracking-[-.05em]">Pick up where your thinking left off.</h1><p className="mt-6 max-w-sm text-lg leading-8 text-ink/60">Your topics, practice rhythm, and next small win are waiting.</p></div><div className="mx-auto w-full max-w-md rounded-[2rem] border border-ink/10 bg-white/60 p-7 shadow-paper sm:p-10"><div className="mb-8"><p className="text-xs font-bold uppercase tracking-[.22em] text-terracotta">Sign in</p><h2 className="mt-3 font-display text-4xl">Welcome back.</h2><p className="mt-3 text-ink/60">Use the email connected to your Somasphere account.</p></div><form onSubmit={handleSubmit} className="space-y-5"><label className="block text-sm font-semibold">Email address<div className="relative mt-2"><Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/35" size={18} /><input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="w-full rounded-xl border border-ink/15 bg-paper px-11 py-3.5 outline-none transition focus:border-acacia focus:ring-4 focus:ring-acacia/10" placeholder="you@example.com" /></div></label><label className="block text-sm font-semibold">Password<div className="relative mt-2"><LockKeyhole className="absolute left-4 top-1/2 -translate-y-1/2 text-ink/35" size={18} /><input required type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="w-full rounded-xl border border-ink/15 bg-paper px-11 py-3.5 outline-none transition focus:border-acacia focus:ring-4 focus:ring-acacia/10" placeholder="Your password" /></div></label>{message && <p role="alert" className="rounded-xl bg-terracotta/10 px-4 py-3 text-sm text-terracotta">{message}</p>}<button type="submit" className="group flex w-full items-center justify-center gap-2 rounded-xl bg-acacia px-5 py-3.5 font-semibold text-paper shadow-soft transition hover:-translate-y-0.5">Continue learning <ArrowRight size={17} className="transition-transform group-hover:translate-x-1" /></button></form><p className="mt-8 text-center text-sm text-ink/55">New to Somasphere? <Link href="/signup" className="font-semibold text-acacia underline underline-offset-4">Create an account</Link></p></div></main>;
}
