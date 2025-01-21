
import Header from "./components/header";
import UpperMenu from "./components/UpperMenu";
import HeroSection from "./components/HeroSection";
import MyGallery from "./components/MyGallery";
import Carousel from "./components/Carousel";
import AboutMe from "./components/AboutMe";

export default function Home() {
  return (
    <div className="">
      <main className="flex flex-col row-start-2 items-center">
        <UpperMenu />
        <Header />
        <HeroSection />
        <MyGallery />
        <Carousel />
        <AboutMe />
      </main>
    </div>
  );
}
