import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FounderDetail from "@/components/FounderDetail";

export const metadata: Metadata = {
  title: "Nicole Ray Glenn — CEO & Founder | Sanctuary Forward",
  description:
    "Learn more about Nicole Ray Glenn, Founder and CEO of Sanctuary Forward — her story, experience, and the compassion that drives the mission.",
};

export default function FounderPage() {
  return (
    <>
      <Header />
      <main>
        <FounderDetail />
      </main>
      <Footer />
    </>
  );
}
