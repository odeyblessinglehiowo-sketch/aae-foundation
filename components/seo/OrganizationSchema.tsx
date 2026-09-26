export default function OrganizationSchema() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NGO",
    name: "AAE Foundation",
    url: "https://aaefoundation.org.ng",
    logo: "https://aaefoundation.org.ng/images/aae-logo.webp",
    description:
      "AAE Foundation is a non-governmental, non-profit organization advancing education, empowerment, and equal opportunity for all — especially women and youth.",
    email: "aaefoundation25@gmail.com",
    telephone: [
      "09037171305",
      "09122222377",
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: "85 Eket Etinan Road, Okon Eket",
      addressLocality: "Eket",
      addressRegion: "Akwa Ibom",
      addressCountry: "NG",
    },
    sameAs: [
      "https://www.instagram.com/aae.foundation/",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}