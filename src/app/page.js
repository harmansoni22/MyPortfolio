import CustomScroll from "./components/CustomScrollbar";
import HeroSection from "./components/sections/HeroSection/HeroSection";
import ProjectSection from "./components/sections/Projects/Projects";

export default function Home() {
  return (
    <>
      <CustomScroll />
      <HeroSection />
      <ProjectSection />
    </>
  );
}
