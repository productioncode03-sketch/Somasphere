/**
 * Somasphere Learning Field Notes — application shell.
 * Use an editorial split layout, acacia green accents, warm paper tones, and calm motion.
 */
import { Route, Switch, Link } from "wouter";
import { BookOpen, LogIn } from "lucide-react";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

function Brand() {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="Somasphere home">
      <span className="grid h-10 w-10 place-items-center rounded-full bg-acacia text-paper shadow-soft">
        <img src="/manus-storage/somasphere-logo_721a5ff7.png" alt="" className="h-7 w-7 object-contain" />
      </span>
      <span className="font-display text-xl font-semibold tracking-tight"><span className="text-acacia">s</span>oma<span className="relative">sphere<span className="absolute -right-1 -top-1 h-1.5 w-1.5 rounded-full bg-terracotta" /></span></span>
    </Link>
  );
}

function SiteHeader() {
  return (
    <header className="border-b border-ink/10 bg-paper/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <Brand />
        <nav className="hidden items-center gap-7 text-sm font-semibold text-ink/65 md:flex" aria-label="Primary navigation">
          <a href="#how-it-works" className="transition-colors hover:text-acacia">How it works</a>
          <a href="#pathways" className="transition-colors hover:text-acacia">Learning pathways</a>
          <Link href="/login" className="inline-flex items-center gap-2 text-ink hover:text-acacia"><LogIn size={16} /> Sign in</Link>
          <Link href="/signup" className="rounded-full bg-acacia px-5 py-2.5 text-paper shadow-soft transition-transform active:scale-[.97] hover:-translate-y-0.5">Create account</Link>
        </nav>
      </div>
    </header>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <SiteHeader />
      <Switch>
        <Route path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/dashboard" component={Dashboard} />
        <Route>
          <div className="mx-auto max-w-3xl px-6 py-24 text-center"><BookOpen className="mx-auto mb-5 text-acacia" size={40} /><h1 className="font-display text-4xl">That page is still being written.</h1><Link href="/" className="mt-8 inline-flex rounded-full bg-acacia px-5 py-3 font-semibold text-paper">Back to Somasphere</Link></div>
        </Route>
      </Switch>
      <footer className="border-t border-ink/10 px-6 py-8 text-sm text-ink/55 lg:px-10"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 md:flex-row"><span>Built for Kenyan CBE learners.</span><span>Learn with context. Practise with purpose.</span></div></footer>
    </div>
  );
}

export default App;
