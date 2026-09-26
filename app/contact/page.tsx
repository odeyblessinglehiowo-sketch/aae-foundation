import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactHero from "@/components/contact/ContactHero";
import ContactSection from "@/components/contact/ContactSection";
import ContactMap from "@/components/contact/ContactMap";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact AAE Foundation to learn more about our programmes, partnerships, community initiatives, and ways to get involved.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[var(--aae-background)]">
        <ContactHero />
        <ContactSection />
        <ContactMap />
      </main>

      <Footer />
    </>
  );
}