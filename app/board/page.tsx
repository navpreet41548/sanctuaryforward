import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BoardClient from "@/components/BoardClient";

export const metadata: Metadata = {
  title: "Board of Directors — Sanctuary Forward",
  description:
    "Meet the Board of Directors of Sanctuary Forward — a coalition of advocates, clinicians, and community leaders guiding our mission.",
};

export default function BoardPage() {
  return (
    <>
      <Header />
      <main>
        <BoardClient />
      </main>
      <Footer />
    </>
  );
}
