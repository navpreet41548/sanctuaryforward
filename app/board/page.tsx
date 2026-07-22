import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BoardClient from "@/components/BoardClient";

export const metadata: Metadata = {
  title: "Board of Directors — Sanctuary Forward",
  description:
    "Meet the Board of Directors of Sanctuary Forward — a coalition of advocates, clinicians, and community leaders guiding our mission.",
};

export default function BoardPage() {
  // The board page isn't public yet. Delete the next line to bring it back —
  // the markup below and BoardClient are untouched and ready to go.
  notFound();

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
