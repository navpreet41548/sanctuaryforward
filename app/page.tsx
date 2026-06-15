import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Founder from "@/components/Founder";
import WhatWeDo from "@/components/WhatWeDo";
import Programs from "@/components/Programs";
import CorePrograms from "@/components/CorePrograms";
import Mission from "@/components/Mission";
import Values from "@/components/Values";
import OurMessage from "@/components/OurMessage";
import Partner from "@/components/Partner";
import Governance from "@/components/Governance";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <Programs />
        <CorePrograms />
        <Mission />
        <Values />
        <OurMessage />
        <Founder />
        <Governance />
        <Partner />
      </main>
      <Footer />
    </>
  );
}
