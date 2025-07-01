import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Span Industries - Leading Defence Manufacturing Solutions",
  description:
    "Span Industries, founded in 1994 by Mr. Jitendra J Dalvi, is a premier defence manufacturing company providing high-quality solutions to the Indian Defence Industry. Specializing in missile programmes, bridging systems, and defence equipment.",
  keywords:
    "defence manufacturing, missile programmes, bridging systems, defence industry, Span Industries, Pune, India",
  authors: [{ name: "Span Industries" }],
  creator: "Span Industries",
  publisher: "Span Industries",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://spanindustries.com"),
  openGraph: {
    title: "Span Industries - Leading Defence Manufacturing Solutions",
    description:
      "Premier defence manufacturing company providing high-quality solutions to the Indian Defence Industry since 1994.",
    url: "https://spanindustries.com",
    siteName: "Span Industries",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Span Industries - Leading Defence Manufacturing Solutions",
    description:
      "Premier defence manufacturing company providing high-quality solutions to the Indian Defence Industry since 1994.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
