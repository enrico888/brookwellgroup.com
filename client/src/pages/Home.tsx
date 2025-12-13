import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AIWorkflows from "@/components/sections/AIWorkflows";
import ClientStories from "@/components/sections/ClientStories";
import WhoWeServe from "@/components/sections/WhoWeServe";
import AITransitions from "@/components/sections/AITransitions";
import PainPoints from "@/components/sections/PainPoints";
import ProcessTimeline from "@/components/sections/ProcessTimeline";
import TransitionResults from "@/components/sections/TransitionResults";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const handleGetStarted = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLearnMore = () => {
    const workflowsSection = document.querySelector("#workflows");
    if (workflowsSection) {
      workflowsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div 
      className="min-h-screen bg-background relative"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.06) 1px, transparent 1px)`,
        backgroundSize: "24px 24px",
      }}
    >
      <Navigation />
      
      <main>
        <Hero onGetStarted={handleGetStarted} onLearnMore={handleLearnMore} />
        
        <WhoWeServe />
        
        <AIWorkflows />
        
        <ClientStories />
        
        <AITransitions />
        
        <PainPoints />
        
        <ProcessTimeline />
        
        <TransitionResults />
        
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
