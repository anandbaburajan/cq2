import { inter } from "@/app/fonts";
import { ThemeProvider } from "@/components/theme-provider";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import favicon from "../../../public/logos/cq2-favicon.svg";
import "./../globals.css";

export const metadata: Metadata = {
  title: "CQ2 — Tool for RFCs",
  description:
    "Meet CQ2. A tool for RFCs, designed for thoughtfulness and coherence. CQ2 offers a better way to discuss RFCs and finish with clear, well-documented decisions.",
  metadataBase: new URL("https://cq2.co"),
  openGraph: {
    title: "CQ2 — Tool for RFCs",
    description:
      "Meet CQ2. A tool for RFCs, designed for thoughtfulness and coherence. CQ2 offers a better way to discuss RFCs and finish with clear, well-documented decisions.",
    url: "https://cq2.co",
    siteName: "CQ2",
    locale: "en_US",
    type: "website",
    images: "https://cq2.co/meta.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "CQ2 — Tool for RFCs",
    description:
      "Meet CQ2. A tool for RFCs, designed for thoughtfulness and coherence. CQ2 offers a better way to discuss RFCs and finish with clear, well-documented decisions.",
    site: "@cq2_co",
    images: "https://cq2.co/meta.png",
  },
  icons: {
    icon: [
      {
        rel: "icon",
        media: "(prefers-color-scheme: light)",
        type: "image/svg",
        url: favicon.src,
      },
      {
        rel: "icon",
        media: "(prefers-color-scheme: dark)",
        type: "image/png",
        url: favicon.src,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} overflow-hidden bg-[#FFFFFF]`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
      <GoogleAnalytics gaId="G-0KJ0KXXT31" />
    </html>
  );
}
