import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Skills } from "./components/Skills";
import { ArtGallery } from "./components/ArtGallery";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <div className="size-full">
      <Hero />
      <About />
      <Skills />
      <ArtGallery />
      <Projects />
      <Contact />
    </div>
  );
}