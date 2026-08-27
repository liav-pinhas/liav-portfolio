import Nav from "./Nav";
import Hero from "./Hero";
import CV from "./CV";
import Projects from "./Projects";
import Footer from "./Footer";

// The whole site, assembled in order. Each section is a separate file so any
// one of them can be edited on its own — this file just stacks them.
//
// Global page background/text color lives here (once) rather than repeating
// bg-[#0a0d12] on every section — each section still sets its own bg for
// safety when previewed in isolation, but this is the single source of
// truth for the page as a whole.

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0d12] font-sans text-[#edf1f6] antialiased">
      <Nav />
      <Hero />
      <CV />
      <Projects />
      <Footer />
    </div>
  );
}
