import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import ScrollReveal from "@/components/ScrollReveal";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sanctuary Forward — More Than A Shelter",
  description:
    "Sanctuary Forward provides trauma-informed shelter, stabilization support, and pathways to permanent housing for adults ages 21+ across New York State.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Petrona:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "var(--font-poppins), sans-serif" }}>
        {children}
        <ScrollReveal />
        <ToastContainer position="bottom-right" autoClose={5000} newestOnTop />
      </body>
    </html>
  );
}
