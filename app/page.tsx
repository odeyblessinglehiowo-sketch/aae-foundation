import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import ImpactStats from "@/components/home/ImpactStats";
import WhoWeAre from "@/components/home/WhoWeAre";
import ProgrammesPreview from "@/components/home/ProgrammesPreview";
import MissionVision from "@/components/home/MissionVision";
import GetInvolved from "@/components/home/GetInvolved";
import StoriesPreview from "@/components/home/StoriesPreview";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <ImpactStats />

      <WhoWeAre />

      <ProgrammesPreview />

      <MissionVision />

      <GetInvolved />
     <StoriesPreview />
<Footer />
    </main>
  );
}