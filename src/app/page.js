import CustomScroll from "./components/CustomScrollbar";
import WhoAmI from "./components/sections/AboutMe/AboutMe";
import ContactMe from "./components/sections/Contact/ContactMe";
import HeroSection from "./components/sections/HeroSection/HeroSection";
import ProjectSection from "./components/sections/Projects/Projects";
import HowIWork from "./components/sections/HowIWork/HowIwork";
import Failures from "./components/sections/Failures/Failures";

export default function Home() {
  return (
    <>
      <CustomScroll />
      <HeroSection />
      <WhoAmI />
      <ProjectSection />
      <HowIWork />
      <Failures />
      <ContactMe />
    </>
  );
}
