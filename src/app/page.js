import About from "@/components/About";
import Header from "@/components/Header";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Header />
      <About />
      <Projects />
    </main>
  );
}
