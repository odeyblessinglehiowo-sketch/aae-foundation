"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProgrammeSection from "@/components/programmes/ProgrammeSection";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const programmes = [
  {
    category: "Women Empowerment",
    title: "Makeup & Skills Empowerment",
    description:
      "The AAE Foundation launched a Skill Acquisition Programme empowering women through hands-on makeup and hairdressing training. Ten women were selected for the first batch and equipped with essential makeup tools to help them turn their skills into businesses and create sustainable income.",
    images: [
      {
        src: "/images/makeup-kits1.webp",
        alt: "Women receiving empowerment kits",
      },
      {
        src: "/images/makeup-kits2.webp",
        alt: "Empowerment kits presentation",
      },
      {
        src: "/images/makeup-kits3.webp",
        alt: "Women empowerment activity",
      },
      {
        src: "/images/makeup-kits4.webp",
        alt: "Women empowerment engagement",
      },
    ],
  },

  {
    category: "Education Support",
    title: "Scholarships & Educational Support",
    description:
      "AAE Foundation awarded full university scholarships to 100 female students in Ikot Okudom, Okon, Eket LGA, Akwa Ibom State. The beneficiaries had successfully passed their JAMB and WAEC examinations and were supported in pursuing higher education. This initiative builds on the Foundation’s previous effort of providing over 500 JAMB forms to students in the area, expanding access to tertiary education for disadvantaged young people.",
    images: [
      {
        src: "/images/learning-materials1.webp",
        alt: "Students receiving educational materials",
      },
      {
        src: "/images/learning-materials2.webp",
        alt: "Educational support activity",
      },
      {
        src: "/images/learning-materials3.webp",
        alt: "Students during an educational support activity",
      },
      {
        src: "/images/learning-materials4.webp",
        alt: "Education support engagement",
      },
    ],
  },

  {
    category: "Economic Empowerment",
    title: "Business Empowerment",
    description:
      "AAE Foundation extended its support to women entrepreneurs and young women with promising potential by providing cash grants to help strengthen existing businesses and startup capital to launch new ventures. Over 50 young women received support to pursue their ambitions and build greater economic independence through practical financial opportunities.",
    images: [
      {
        src: "/images/business1.webp",
        alt: "Community empowerment engagement",
      },
      {
        src: "/images/business2.webp",
        alt: "Women empowerment outreach",
      },
      {
        src: "/images/business3.webp",
        alt: "Empowerment programme activity",
      },
      {
        src: "/images/business4.webp",
        alt: "Community empowerment engagement",
      },
    ],
  },

  {
    category: "Community Health",
    title: "Free Medical Outreach",
    description:
      "The Eket Free Medical Outreach provided free healthcare services to widows, teenage girls, and other underserved residents in Eket LGA. The humanitarian initiative offered health consultations, medical screenings, basic treatments, and health education, helping vulnerable beneficiaries access timely care while promoting disease prevention, personal hygiene, and regular health check-ups.",
    images: [
      {
        src: "/images/medical-outreach-1.webp",
        alt: "Beneficiary receiving medical attention during the outreach",
      },
      {
        src: "/images/medical-outreach-2.webp",
        alt: "Healthcare professionals attending to residents",
      },
      {
        src: "/images/medical-outreach-3.webp",
        alt: "Participants receiving healthcare services",
      },
      {
        src: "/images/medical-outreach-4.webp",
        alt: "Community members participating in the medical outreach",
      },
    ],
  },

  {
    category: "Girls & Dignity",
    title: "International Day of the Girl Child",
    description:
      "The AAE Foundation commemorated the International Day of the Girl Child with a school intervention at two secondary schools in Eket LGA, providing hygiene and learning materials including sanitary pads, tissue paper, and notebooks. The outreach also featured sessions on hygiene, education, self-worth, and personal development, encouraging adolescent girls to build confidence, value education, and embrace their potential.",
    images: [
      {
        src: "/images/pads-donation1.webp",
        alt: "Sanitary pad distribution to young girls",
      },
      {
        src: "/images/pads-donation2.webp",
        alt: "Girls receiving dignity support",
      },
      {
        src: "/images/pads-donation3.webp",
        alt: "Girl child support activity",
      },
      {
        src: "/images/pads-donation4.webp",
        alt: "Community support for girls",
      },
    ],
  },

  {
    category: "Back-to-School Support",
    title: "Back-to-School Material Distribution",
    description:
      "AAE Foundation supported over 300 students and pupils across Eket Federal Constituency with back-to-school materials during a community initiative held in celebration of Lord U.D.U. Etuk’s 89th birthday. The intervention provided students with essential items for the new school year, promoting confidence, dignity, and continued access to education.",
    images: [
      {
        src: "/images/Back-to-School1.webp",
        alt: "Students receiving learning materials",
      },
      {
        src: "/images/Back-to-School2.webp",
        alt: "School support distribution",
      },
      {
        src: "/images/Back-to-School3.webp",
        alt: "Students receiving school materials",
      },
      {
        src: "/images/Back-to-School4.webp",
        alt: "Back-to-school support activity",
      },
    ],
  },
];

export default function ProgrammesPage() {
  return (
    <>
      <Navbar />

      <main className="overflow-hidden bg-[var(--aae-background)]">
        {/* =====================================================
            HERO
        ====================================================== */}
        <section className="relative min-h-[78svh] overflow-hidden bg-[var(--aae-navy-deep)]">
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src="/images/programme-hero.webp"
              alt=""
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-[var(--aae-navy-deep)]/75" />

            <div className="absolute inset-0 bg-gradient-to-r from-[var(--aae-navy-deep)] via-[var(--aae-navy-deep)]/85 to-[var(--aae-navy-deep)]/35" />

            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[var(--aae-navy-deep)] via-transparent to-transparent" />
          </div>

          {/* Decorative glow */}
          <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-[var(--aae-green)]/[0.10] blur-3xl" />

          <div className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full border border-white/[0.06]" />

          <div className="relative z-10 mx-auto flex min-h-[78svh] max-w-7xl items-center px-5 pb-20 pt-32 sm:px-8 sm:pb-24 lg:px-10">
            <div className="max-w-3xl">
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-[11px] font-bold uppercase tracking-[0.25em] text-[var(--aae-green)] sm:text-xs"
              >
                Our Programmes
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.06,
                }}
                className="mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl lg:text-7xl"
              >
                Turning Commitment Into{" "}
                <span className="text-[var(--aae-green)]">
                  Practical Action.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.14,
                }}
                className="mt-6 max-w-2xl text-sm leading-7 text-white/65 sm:text-base sm:leading-8 lg:text-lg"
              >
                From education and empowerment to healthcare and community
                support, our programmes are designed to respond to real needs
                and create opportunities for people to grow.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.22,
                }}
                className="mt-8 flex flex-wrap items-center gap-4"
              >
                <Link
                  href="#programmes"
                  className="group inline-flex items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--aae-navy)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--aae-green)] hover:text-white"
                >
                  Explore Our Programmes

                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--aae-navy)]/10 transition-colors duration-300 group-hover:bg-white/15">
                    <ArrowUpRight size={14} />
                  </span>
                </Link>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-7 left-1/2 z-10 -translate-x-1/2"
          >
            <ArrowDown
              size={20}
              className="text-white/40"
            />
          </motion.div>
        </section>

        {/* =====================================================
            INTRO
        ====================================================== */}
        <section
          id="programmes"
          className="bg-white py-8 sm:py-10 lg:py-14"
        >
          <div className="mx-auto max-w-3xl px-5 text-center sm:px-8 lg:px-10">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                margin: "-100px",
              }}
              transition={{ duration: 0.6 }}
              className="text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--aae-green-dark)] sm:text-xs"
            >
              What We Do
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: true,
                margin: "-100px",
              }}
              transition={{
                duration: 0.7,
                delay: 0.05,
              }}
              className="mt-2 text-2xl font-semibold leading-[1.06] tracking-[-0.045em] text-[var(--aae-navy)] sm:text-4xl lg:text-5xl"
            >
              Programmes Rooted In{" "}
              <span className="text-[var(--aae-green-dark)]">
                People.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="mt-2 text-sm leading-5 text-[var(--aae-text-muted)] sm:text-base sm:leading-6"
            >
              Each programme reflects our commitment to creating practical
              opportunities, strengthening communities, and supporting people
              in ways that can make a meaningful difference.
            </motion.p>
          </div>
        </section>

        {/* =====================================================
            PROGRAMMES
        ====================================================== */}
        <div>
          {programmes.map((programme, index) => (
            <div
              key={programme.title}
              className={
                index % 2 === 0
                  ? "bg-[var(--aae-background)]"
                  : "bg-white"
              }
            >
              <ProgrammeSection
                programme={programme}
                reverse={index % 2 === 1}
              />
            </div>
          ))}
        </div>

        {/* =====================================================
            CLOSING CTA
        ====================================================== */}
        <section className="relative overflow-hidden bg-[var(--aae-green)] py-10 sm:py-10 lg:py-14">
          <div className="pointer-events-none absolute -left-32 -top-32 h-72 w-72 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -right-20 bottom-[-100px] h-80 w-80 rounded-full bg-[var(--aae-navy)]/[0.08] blur-3xl" />

          <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/70 sm:text-xs"
            >
              Be Part of the Work
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.05,
              }}
              className="mt-2 text-2xl font-semibold leading-[1.05] tracking-[-0.02em] text-white sm:text-5xl"
            >
              Change Begins With People.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.1,
              }}
              className="mx-auto mt-2 max-w-3xl text-sm leading-5 text-white/75 sm:text-base sm:leading-7"
            >
              Join us in creating opportunities, strengthening communities,
              and helping more people move forward.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.16,
              }}
              className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
            >
              <Link
                href="/get-involved"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[var(--aae-navy)] transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--aae-navy)] hover:text-white sm:w-auto"
              >
                Get Involved
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 sm:w-auto"
              >
                Talk to Us
              </Link>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}