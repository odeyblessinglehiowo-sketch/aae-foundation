"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Programmes", href: "/programmes" },
  { name: "Stories", href: "/stories" },
  { name: "Get Involved", href: "/get-involved" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

 const isActive = (href: string) => {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
};

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent background scrolling while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close menu when route changes
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header
  className={`fixed inset-x-0 top-0 z-[70] transition-all duration-500 ${
          scrolled
            ? "border-b border-white/10 bg-[var(--aae-navy-deep)]/90 shadow-lg backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
          <nav
            className={`flex items-center justify-between transition-all duration-500 ${
              scrolled ? "h-20" : "h-24"
            }`}
          >
            {/* Logo */}
            <Link
              href="/"
              className="relative z-[60] flex items-center"
              aria-label="AAE Foundation home"
              onClick={() => setOpen(false)}
            >
              <div
                className={`rounded-sm bg-white/80 px-3 py-2 shadow-lg shadow-black/10 transition-all duration-500 ${
                  scrolled ? "scale-95" : "scale-100"
                }`}
              >
                <img
                  src="/images/aae-logo.webp"
                  alt="AAE Foundation"
                  className="h-10 w-auto object-contain sm:h-12"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-1 lg:flex">
              {navigation.map((item) => {
                const active = isActive(item.href);

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`group relative rounded-full px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                      active
                        ? "bg-white/[0.12] text-white"
                        : "text-white/80 hover:bg-white/[0.08] hover:text-white"
                    }`}
                  >
                    <span className="relative z-10">
                      {item.name}
                    </span>

                    <span
                      className={`absolute bottom-1.5 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-[var(--aae-green)] transition-all duration-300 ${
                        active ? "w-5" : "w-0 group-hover:w-5"
                      }`}
                    />
                  </Link>
                );
              })}

              {/* Contact */}
              <Link
                href="/contact"
                className={`group ml-3 inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 ${
                  isActive("/contact")
                    ? "bg-[var(--aae-green)] text-white"
                    : "bg-white text-[var(--aae-navy)] hover:-translate-y-0.5 hover:bg-[var(--aae-green)] hover:text-white"
                }`}
              >
                Contact Us

                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setOpen(!open)}
              className={`relative z-[60] flex h-11 w-11 items-center justify-center rounded-full border transition-all duration-300 lg:hidden ${
                open
                  ? "border-white/20 bg-white text-[var(--aae-navy)]"
                  : "border-white/20 bg-black/10 text-white backdrop-blur-md hover:border-white/40 hover:bg-white/10"
              }`}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.div
                    key="close"
                    initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ opacity: 0, rotate: 90, scale: 0.7 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -90, scale: 0.7 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Background overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={() => setOpen(false)}
            />

            {/* Full-screen menu */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                stiffness: 320,
                damping: 32,
              }}
              className="fixed inset-0 z-50 overflow-y-auto bg-[var(--aae-navy-deep)] lg:hidden"
            >
              {/* Subtle background glow */}
              <div className="pointer-events-none absolute right-[-120px] top-[120px] h-[280px] w-[280px] rounded-full bg-[var(--aae-green)]/10 blur-3xl" />

              <div className="relative flex min-h-screen flex-col px-6 pb-8 pt-28 sm:px-10">
                {/* Navigation */}
                <nav className="flex flex-col">
                  {navigation.map((item, index) => {
                    const active = isActive(item.href);

                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          delay: 0.08 + index * 0.06,
                          duration: 0.4,
                          ease: "easeOut",
                        }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setOpen(false)}
                          className="group flex items-center justify-between border-b border-white/10 py-5"
                        >
                          <span
                            className={`text-2xl font-medium tracking-tight transition-colors duration-300 ${
                              active
                                ? "text-[var(--aae-green)]"
                                : "text-white group-hover:text-[var(--aae-green)]"
                            }`}
                          >
                            {item.name}
                          </span>

                          <span
                            className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${
                              active
                                ? "border-[var(--aae-green)] bg-[var(--aae-green)] text-white"
                                : "border-white/10 text-white/40 group-hover:border-[var(--aae-green)] group-hover:text-[var(--aae-green)]"
                            }`}
                          >
                            <ArrowUpRight size={15} />
                          </span>
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* Bottom content */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.5 }}
                  className="mt-4 pt-3"
                >
                  <Link
                    href="/contact"
                    onClick={() => setOpen(false)}
                    className="group flex w-full items-center justify-between rounded-2xl bg-[var(--aae-green)] px-5 py-2 text-base font-semibold text-white transition-all duration-300 hover:bg-[var(--aae-green-dark)]"
                  >
                    <span>Contact Us</span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
                      <ArrowUpRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </Link>

                  <div className="mt-8 flex items-end justify-between border-t border-white/10 pt-6">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
                        AAE Foundation
                      </p>
                      <p className="mt-2 text-sm text-white/50">
                        Empower. Engage. Evolve.
                      </p>
                    </div>

                    <div className="h-2 w-2 rounded-full bg-[var(--aae-green)]" />
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}