import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "AI Governance Framework — Enterprise AI Governance Playbook",
  description: "An open, practical AI governance framework with maturity model, pillars, templates, and checklists. The canonical reference for enterprise AI governance.",
  keywords: "AI governance framework, AI governance maturity model, AI governance checklist, enterprise AI governance, AI risk assessment, AI policy templates",
  authors: [{ name: "Aona AI", url: "https://aona.ai" }],
  openGraph: {
    title: "AI Governance Framework — Enterprise AI Governance Playbook",
    description: "An open, practical AI governance framework with maturity model, pillars, templates, and checklists.",
    type: "website",
    locale: "en_US",
    siteName: "AI Governance Framework",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Governance Framework — Enterprise AI Governance Playbook",
    description: "An open, practical AI governance framework with maturity model, pillars, templates, and checklists.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "AI Governance Framework",
              "url": "https://aigovernanceframework.com",
              "description": "An open, practical AI governance framework for enterprises",
              "publisher": {
                "@type": "Organization",
                "name": "Aona AI",
                "url": "https://aona.ai"
              }
            })
          }}
        />
      </head>
      <body>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
