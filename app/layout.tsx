import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Apple Migration | Education & Immigration Consultancy Australia",
  description:
    "Expert Australian immigration and education consultancy. MARA registered agent. Student visas, skilled migration, family visas and more.",
  keywords: "immigration australia, student visa, skilled migration, MARA agent, education consultancy",
  openGraph: {
    title: "Apple Migration | Education & Immigration Consultancy",
    description: "Your journey to Australia starts here. Expert migration and education services.",
    url: "https://applemigration.com.au",
    siteName: "Apple Migration",
    locale: "en_AU",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
