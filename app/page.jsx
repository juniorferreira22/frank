import Image from "next/image";
import Header from "./components/header";
import UpperMenu from "./components/uppermenu";
import HeroSection from "./components/HeroSection";
import MyGallery from "./components/MyGallery";
import Carousel from "./components/Carousel";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col row-start-2 items-center">
        <UpperMenu />
        <Header />
        <HeroSection />
        <MyGallery />
        <Carousel />
      </main>
    </div>
  );
}
