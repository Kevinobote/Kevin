import Hero from "../components/Hero";
import CTASection from "../components/CTA";
import Testimonials from "../components/Testimonials";

const Main = () => {
  return (
    <div className="min-h-screen bg-offwhite dark:bg-slate-900">
      <Hero />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default Main;
