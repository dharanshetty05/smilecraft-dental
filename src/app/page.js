import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import SmileSolutions from "@/components/SmileSolutions";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SmileSolutions />
    </>
  );
}
