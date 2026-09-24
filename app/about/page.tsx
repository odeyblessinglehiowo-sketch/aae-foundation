import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutHero from "@/components/about/AboutHero";
import WhoWeAre from "@/components/about/WhoWeAre";
import Founder from "@/components/about/Founder";
import WhatWeStandFor from "@/components/about/WhatWeStandFor";
import AreasOfImpact from "@/components/about/AreasOfImpact";
import OurReach from "@/components/about/OurReach";
import GetInvolved from "@/components/about/GetInvolved";

export const metadata = {
  title: "About Us | AAE Foundation",
  description:
    "Learn about the AAE Foundation, our vision, mission, leadership, areas of impact, and commitment to advancing education, empowerment, and equal opportunity for all.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden">
        <AboutHero />
        <WhoWeAre />
        <Founder />
        <WhatWeStandFor />
        <AreasOfImpact />
        <OurReach />
        <GetInvolved />
      </main>

      <Footer />
    </>
  );
}