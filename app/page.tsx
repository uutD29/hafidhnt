import Hero from "./sections/hero";
import About from "./sections/about";
import Services from "./sections/services";
import Skills from "./sections/skills";
import Plan from "./sections/plan";
import PlanPart2 from "./sections/plan2";
import Project from "./sections/project";
import Project2 from "./sections/project2";
import Future from "./sections/future";

export default function Home() {
  return (
    <main>
      <Hero/>
      <About/>
      <Services/>
      <Skills/>
      <Plan/>
      <PlanPart2/>
      <Project/>
      <Project2/>
      <Future/>
    </main>
  );
}
