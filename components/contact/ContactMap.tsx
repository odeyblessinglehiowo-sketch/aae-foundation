"use client";

import { motion } from "framer-motion";

export default function LocationMap() {
  const address = "85 Eket Etinan Road, Okon Eket, Akwa Ibom State";

  const mapUrl = `https://www.google.com/maps?q=${encodeURIComponent(
    address
  )}&output=embed`;

  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}`;

  return (
    <section className="relative overflow-hidden bg-white py-8 sm:py-10 lg:py-14">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[var(--aae-green)]/[0.04] blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full border border-[var(--aae-green)]/[0.07]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--aae-green-dark)] sm:text-xs"
          >
            Find Us
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.7,
              delay: 0.05,
            }}
            className="mt-3 text-3xl font-semibold leading-[1.06] tracking-[-0.045em] text-[var(--aae-navy)] sm:text-4xl lg:text-5xl"
          >
            Come{" "}
            <span className="text-[var(--aae-green-dark)]">
              Visit Us.
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
            className="mx-auto mt-3 max-w-2xl text-sm leading-5 text-[var(--aae-text-muted)] sm:text-base sm:leading-7"
          >
            Our office is located at 85 Eket Etinan Road, Okon Eket,
            Akwa Ibom State.
          </motion.p>
        </div>

        {/* Map */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-8 sm:mt-10"
        >
          <div className="relative overflow-hidden rounded-[0.2rem] border border-[var(--aae-border)] bg-[var(--aae-background)] shadow-[0_25px_70px_rgba(16,42,67,0.08)]">
            {/* Map */}
            <div className="relative h-[360px] sm:h-[430px] lg:h-[500px]">
              <iframe
                src={mapUrl}
                title="AAE Foundation location"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}