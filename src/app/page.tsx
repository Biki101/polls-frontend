import Head from "next/head";
import LandingPage from "./LandingPage/LandingPage";
import { Bruno_Ace_SC } from "@next/font/google";

const bruno = Bruno_Ace_SC({
  subsets: ["latin"],
  weight: ["400"],
});

export default function Home() {
  return (
    <main className={bruno.className}>
      {/* ---------- Landing Page  Background----------------*/}
      <LandingPage />
      {/* ---------- Landing Page  Background End----------------*/}
    </main>
  );
}
