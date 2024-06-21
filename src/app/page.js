import About from "@/components/About";
import Contact from "@/components/Contact";
import Dialog from "@/components/Dialog";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Suspense>
        <Dialog />
      </Suspense>
      <Header />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
