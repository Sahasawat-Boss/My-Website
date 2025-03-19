import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stack from "@/components/Stack";
import Project1 from "@/components/Project1";
import Project2 from "@/components/Project2";
import Project3 from "@/components/Project3";
import Project4 from "@/components/Project4";
import Services from "@/components/Services";
import ProjectOther from "@/components/OtherProject";
import Contact from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Stack />
      <Project4/>
      <Project1 />
      <Project3 />
      <Project2 />
      <ProjectOther/>
      <Services />
      <Contact />
      <Footer />
    </>
  );
}
