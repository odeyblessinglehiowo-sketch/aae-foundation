import type { Metadata } from "next";
import "./globals.css";
import OrganizationSchema from "@/components/seo/OrganizationSchema";

export const metadata: Metadata = {
  metadataBase: new URL("https://aaefoundation.org.ng"),

  title: {
    default: "AAE Foundation | Empower. Engage. Evolve.",
    template: "%s | AAE Foundation",
  },

  description:
    "AAE Foundation is a non-governmental, non-profit organization advancing education, empowerment, and equal opportunity for women, youth, students, and communities.",

  keywords: [
    "AAE Foundation",
    "AAE Foundation Nigeria",
    "NGO in Akwa Ibom",
    "NGO in Eket",
    "women empowerment",
    "youth empowerment",
    "education support",
    "scholarships",
    "community development",
    "entrepreneurship",
    "girl child empowerment",
    "education NGO Nigeria",
    "women empowerment NGO Nigeria",
  ],

  authors: [
    {
      name: "AAE Foundation",
    },
  ],

  creator: "AAE Foundation",
  publisher: "AAE Foundation",

  openGraph: {
    type: "website",
    locale: "en_NG",
    siteName: "AAE Foundation",
    title: "AAE Foundation | Empower. Engage. Evolve.",
    description:
      "Advancing education, empowerment, and equal opportunity for all — especially women and youth.",
    images: [
      {
        url: "/images/hero.webp",
        width: 1600,
        height: 900,
        alt: "AAE Foundation",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "AAE Foundation | Empower. Engage. Evolve.",
    description:
      "Advancing education, empowerment, and equal opportunity for all — especially women and youth.",
    images: ["/images/hero.webp"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <OrganizationSchema />
        {children}
      </body>
    </html>
  );
}