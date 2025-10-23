/* PAGE: Home/Index
 * Main landing page with all sections
 */

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSlider from "@/components/HeroSlider";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Trainers from "@/components/Trainers";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import AIChat from "@/components/AIChat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSlider />
        <About />
        <Programs />
        <Trainers />
        <Pricing />
        <Contact />
      </main>
      <Footer />
      <AIChat />
    </div>
  );
};

export default Index;
