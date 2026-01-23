import Hero from "../components/Hero";
import SkillsSection from "../components/skills";
import CTASection from "../components/CTA";
import Testimonials from "../components/Testimonials";

import { useState } from "react";
import Expertise from "../components/Expertise";
import Team from "../components/Team";

const Main = () => {
  const [isDarkTheme] = useState(true);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Hero isDarkTheme={isDarkTheme} />
      <Expertise />
      {/* <SkillsSection /> */}
      <Team />
      <CTASection />
      <Testimonials />
    </div>
  );
};

export default Main;