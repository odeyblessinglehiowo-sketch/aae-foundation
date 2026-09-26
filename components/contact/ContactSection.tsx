"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { FormEvent } from "react";

export default function ContactSection() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Form submission can be connected to your email service/API later.
  };

  return (
    <section className="relative overflow-hidden bg-[var(--aae-background)] py-16 sm:py-20 lg:py-28">
      {/* Decorative elements */}
      <div className="pointer-events-none absolute -left-32 top-20 h-80 w-80 rounded-full bg-[var(--aae-green)]/[0.05] blur-3xl" />

      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full border border-[var(--aae-green)]/[0.07]" />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-start gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">

          {/* =====================================================
              CONTACT INFORMATION
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="max-w-lg">
              {/* Eyebrow */}
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-[var(--aae-green-dark)] sm:text-xs">
                Get in Touch
              </p>

              {/* Heading */}
              <h2 className="mt-3 text-2xl font-semibold leading-[1.06] tracking-[-0.045em] text-[var(--aae-navy)] sm:text-3xl lg:text-4xl">
                We&apos;d love to{" "}
                <span className="text-[var(--aae-green-dark)]">
                  hear from you.
                </span>
              </h2>

              {/* Description */}
              <p className="mt-3 max-w-md text-sm leading-5 text-[var(--aae-text-muted)] sm:text-base sm:leading-6">
                Have a question about our programmes, interested in working
                with us, or looking for ways to support our work? Reach out
                and let&apos;s start a conversation.
              </p>

              {/* Contact details */}
              <div className="mt-9 space-y-5">
                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--aae-green)]/10 text-[var(--aae-green-dark)]">
                    <MapPin size={19} strokeWidth={1.8} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--aae-navy)]">
                      Visit Us
                    </p>

                    <p className="mt-1 text-sm leading-6 text-[var(--aae-text-muted)]">
                      85 Eket Etinan Road, Okon Eket,
                      <br />
                      Akwa Ibom State
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--aae-green)]/10 text-[var(--aae-green-dark)]">
                    <Mail size={19} strokeWidth={1.8} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--aae-navy)]">
                      Email Us
                    </p>

                    <a
                      href="mailto:aaefoundation25@gmail.com"
                      className="mt-1 inline-block text-sm text-[var(--aae-text-muted)] transition-colors duration-300 hover:text-[var(--aae-green-dark)]"
                    >
                      aaefoundation25@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--aae-green)]/10 text-[var(--aae-green-dark)]">
                    <Phone size={19} strokeWidth={1.8} />
                  </div>

                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--aae-navy)]">
                      Call Us
                    </p>

                    <div className="mt-1 flex flex-col">
                      <a
                        href="tel:09037171305"
                        className="text-sm text-[var(--aae-text-muted)] transition-colors duration-300 hover:text-[var(--aae-green-dark)]"
                      >
                        09037171305
                      </a>

                      <a
                        href="tel:09122222377"
                        className="text-sm text-[var(--aae-text-muted)] transition-colors duration-300 hover:text-[var(--aae-green-dark)]"
                      >
                        09122222377
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="mt-9 border-t border-[var(--aae-border)] pt-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[var(--aae-text-light)]">
                  Follow Our Work
                </p>

                <a
                  href="https://www.instagram.com/aae.foundation/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="AAE Foundation on Instagram"
                  className="mt-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--aae-border)] bg-white text-[var(--aae-navy)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--aae-green)] hover:bg-[var(--aae-green)] hover:text-white"
                >
                  <FaInstagram size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* =====================================================
              CONTACT FORM
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              delay: 0.05,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <div className="rounded-[0.5rem] border border-[var(--aae-border)] bg-white p-6 shadow-[0_25px_70px_rgba(16,42,67,0.07)] sm:p-8 lg:p-10">
              <div className="mb-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--aae-green-dark)] sm:text-xs">
                  Send a Message
                </p>

                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.03em] text-[var(--aae-navy)] sm:text-3xl">
                  How can we help?
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-semibold text-[var(--aae-navy)]"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your full name"
                    required
                    className="h-12 w-full rounded-xl border border-[var(--aae-border)] bg-[var(--aae-background)] px-4 text-sm text-[var(--aae-navy)] outline-none transition-all duration-300 placeholder:text-[var(--aae-text-light)] focus:border-[var(--aae-green)] focus:bg-white focus:ring-2 focus:ring-[var(--aae-green)]/10"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-semibold text-[var(--aae-navy)]"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    required
                    className="h-12 w-full rounded-xl border border-[var(--aae-border)] bg-[var(--aae-background)] px-4 text-sm text-[var(--aae-navy)] outline-none transition-all duration-300 placeholder:text-[var(--aae-text-light)] focus:border-[var(--aae-green)] focus:bg-white focus:ring-2 focus:ring-[var(--aae-green)]/10"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-xs font-semibold text-[var(--aae-navy)]"
                  >
                    Subject
                  </label>

                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What would you like to talk about?"
                    required
                    className="h-12 w-full rounded-xl border border-[var(--aae-border)] bg-[var(--aae-background)] px-4 text-sm text-[var(--aae-navy)] outline-none transition-all duration-300 placeholder:text-[var(--aae-text-light)] focus:border-[var(--aae-green)] focus:bg-white focus:ring-2 focus:ring-[var(--aae-green)]/10"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-semibold text-[var(--aae-navy)]"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Tell us how we can help..."
                    required
                    className="w-full resize-none rounded-xl border border-[var(--aae-border)] bg-[var(--aae-background)] px-4 py-3 text-sm leading-7 text-[var(--aae-navy)] outline-none transition-all duration-300 placeholder:text-[var(--aae-text-light)] focus:border-[var(--aae-green)] focus:bg-white focus:ring-2 focus:ring-[var(--aae-green)]/10"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[var(--aae-green)] px-6 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--aae-green-dark)]"
                >
                  Send Message

                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 transition-colors duration-300 group-hover:bg-white/15">
                    <ArrowUpRight size={14} />
                  </span>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}