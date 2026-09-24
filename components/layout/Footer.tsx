"use client";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Programmes", href: "/programmes" },
  { name: "Our Impact", href: "/impact" },
  { name: "Stories", href: "/stories" },
  { name: "Contact Us", href: "/contact" },
];

const getInvolvedLinks = [
  { name: "Partner With Us", href: "/get-involved" },
  { name: "Volunteer", href: "/get-involved" },
  { name: "Support Our Work", href: "/get-involved" },
];

export default function Footer() {
  return (
    <footer className="bg-[var(--aae-navy-deep)] text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* =====================================================
            DESKTOP / TABLET FOOTER
        ====================================================== */}
        <div className="hidden lg:grid lg:grid-cols-[1.35fr_0.75fr_1fr] lg:gap-20 lg:py-16">

          {/* Brand */}
          <div className="text-left">
            <Link
              href="/"
              className="inline-flex items-center rounded-xl bg-white px-3 py-2.5"
              aria-label="AAE Foundation home"
            >
              <img
                src="/images/aae-logo.webp"
                alt="AAE Foundation"
                className="h-12 w-auto object-contain"
              />
            </Link>

            <h2 className="mt-5 max-w-md text-2xl font-semibold leading-tight tracking-[-0.03em] xl:text-3xl">
              Empower. Engage.{" "}
              <span className="text-[var(--aae-green)]">Evolve.</span>
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-white/55">
              Advancing education, empowerment, and equal opportunity for all
              — especially women and youth.
            </p>

            {/* Socials */}
            <div className="mt-6 flex gap-2">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--aae-green)]/40 hover:bg-[var(--aae-green)] hover:text-white"
              >
                <FaFacebookF size={15} />
              </a>

              <a
                href="https://www.instagram.com/aae.foundation/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--aae-green)]/40 hover:bg-[var(--aae-green)] hover:text-white"
              >
                <FaInstagram size={17} />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--aae-green)]/40 hover:bg-[var(--aae-green)] hover:text-white"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="text-left">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--aae-green)]">
              Explore
            </p>

            <nav className="mt-5">
              <ul className="space-y-3.5">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="group inline-flex items-center gap-2 text-sm text-white/60 transition-colors duration-300 hover:text-white"
                    >
                      {item.name}

                      <ArrowUpRight
                        size={13}
                        className="opacity-0 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Get In Touch */}
          <div className="text-left">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[var(--aae-green)]">
              Get In Touch
            </p>

            <div className="mt-5 space-y-5">

              {/* Address */}
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.05] text-[var(--aae-green)]">
                  <MapPin size={15} />
                </span>

                <p className="max-w-sm text-sm leading-6 text-white/60">
                  85 Eket Etinan Road, Okon Eket, Akwa Ibom State
                </p>
              </div>

              {/* Email */}
              <a
                href="mailto:aaefoundation25@gmail.com"
                className="flex items-center gap-3 text-sm text-white/60 transition-colors duration-300 hover:text-white"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.05] text-[var(--aae-green)]">
                  <Mail size={15} />
                </span>

                <span className="break-all">
                  aaefoundation25@gmail.com
                </span>
              </a>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/[0.05] text-[var(--aae-green)]">
                  <Phone size={15} />
                </span>

                <div className="text-sm leading-6 text-white/60">
                  <a
                    href="tel:09037171305"
                    className="block transition-colors hover:text-white"
                  >
                    09037171305
                  </a>

                  <a
                    href="tel:09122222377"
                    className="block transition-colors hover:text-white"
                  >
                    09122222377
                  </a>
                </div>
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/contact"
              className="group mt-6 inline-flex items-center gap-3 rounded-full bg-[var(--aae-green)] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--aae-green-dark)]"
            >
              Contact Us

              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </span>
            </Link>
          </div>
        </div>

        {/* =====================================================
            MOBILE FOOTER
        ====================================================== */}
        <div className="py-10 lg:hidden">

          {/* Brand */}
          <div className="text-left">
            <Link
              href="/"
              className="inline-flex items-center rounded-xl bg-white px-3 py-2.5"
              aria-label="AAE Foundation home"
            >
              <img
                src="/images/aae-logo.webp"
                alt="AAE Foundation"
                className="h-12 w-auto object-contain"
              />
            </Link>

            <h2 className="mt-5 text-2xl font-semibold leading-tight tracking-[-0.03em]">
              Empower. Engage.{" "}
              <span className="text-[var(--aae-green)]">Evolve.</span>
            </h2>

            <p className="mt-3 max-w-md text-sm leading-6 text-white/55">
              Advancing education, empowerment, and equal opportunity for all
              — especially women and youth.
            </p>

            {/* Socials */}
            <div className="mt-6 flex gap-2">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition-all duration-300 hover:bg-[var(--aae-green)] hover:text-white"
              >
                <FaFacebookF size={15} />
              </a>

              <a
                href="https://www.instagram.com/aae.foundation/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition-all duration-300 hover:bg-[var(--aae-green)] hover:text-white"
              >
                <FaInstagram size={17} />
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/60 transition-all duration-300 hover:bg-[var(--aae-green)] hover:text-white"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-8 border-t border-white/10 pt-8" />

          {/* Explore */}
          <div>
            <p className="text-[14px] font-bold uppercase tracking-[0.22em] text-[var(--aae-green)]">
              Explore
            </p>

            <nav className="mt-5">
              <ul className="space-y-4">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-lg font-medium tracking-[-0.02em] text-white/80 transition-colors duration-300 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Get Involved */}
          <div className="mt-10">
            <p className="text-[14px] font-bold uppercase tracking-[0.22em] text-[var(--aae-green)]">
              Get Involved
            </p>

            <nav className="mt-5">
              <ul className="space-y-4">
                {getInvolvedLinks.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-lg font-medium tracking-[-0.02em] text-white/80 transition-colors duration-300 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Contact */}
          <div className="mt-10">
            <p className="text-[14px] font-bold uppercase tracking-[0.22em] text-[var(--aae-green)]">
              Contact Us
            </p>

            <div className="mt-5 space-y-6">

              <div>
                <p className="text-base font-semibold text-white">
                  Office Address
                </p>

                <p className="mt-2 text-base leading-7 text-white/60">
                  85 Eket Etinan Road,
                  <br />
                  Okon Eket,
                  <br />
                  Akwa Ibom State
                </p>
              </div>

              <div>
                <p className="text-base font-semibold text-white">
                  Email
                </p>

                <a
                  href="mailto:aaefoundation25@gmail.com"
                  className="mt-2 block break-all text-base leading-7 text-white/60 transition-colors hover:text-white"
                >
                  aaefoundation25@gmail.com
                </a>
              </div>

              <div>
                <p className="text-base font-semibold text-white">
                  Phone
                </p>

                <div className="mt-2 space-y-1">
                  <a
                    href="tel:09037171305"
                    className="block text-base leading-7 text-white/60 transition-colors hover:text-white"
                  >
                    09037171305
                  </a>

                  <a
                    href="tel:09122222377"
                    className="block text-base leading-7 text-white/60 transition-colors hover:text-white"
                  >
                    09122222377
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <Link
            href="/contact"
            className="group mt-9 flex w-full items-center justify-between rounded-2xl bg-[var(--aae-green)] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[var(--aae-green-dark)]"
          >
            <span>Start a Conversation</span>

            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </span>
          </Link>
        </div>

        {/* =====================================================
            BOTTOM BAR
        ====================================================== */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col items-center gap-4 text-center sm:flex-row sm:justify-between sm:text-left">

            <p className="text-[11px] leading-5 text-white/35">
              © {new Date().getFullYear()} AAE Foundation. All rights reserved.
            </p>

            <div className="flex items-center gap-5 text-[11px] text-white/35">
              <Link
                href="/privacy"
                className="transition-colors duration-300 hover:text-white/70"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="transition-colors duration-300 hover:text-white/70"
              >
                Terms of Use
              </Link>
            </div>

            <p className="hidden text-[11px] text-white/35 sm:block">
              Empower. Engage. Evolve.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}