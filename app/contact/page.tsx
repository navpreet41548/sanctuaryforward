import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Us — Sanctuary Forward",
  description:
    "Contact Sanctuary Forward — reach our team by phone, WhatsApp, or email. More than shelter. A path forward.",
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        <Contact />
      </main>
      <Footer />
    </>
  );
}
