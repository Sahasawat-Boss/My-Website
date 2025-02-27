import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stack from "@/components/Stack";
import Project1 from "@/components/Project1";
import Project2 from "@/components/Project2";
import Services from "@/components/Services";
import ProjectOther from "@/components/ProjectOther";
import Contact from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Stack />
      <Project1 />
      <Project2 />
      <Services />
      <ProjectOther/>
      <Contact />
      <Footer />
    </>
  );
}
