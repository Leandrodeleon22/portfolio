import About from "@/components/About";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
