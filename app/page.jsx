import Header from "./components/Header";
import UpperMenu from "./components/UpperMenu";
import HeroSection from "./components/HeroSection";
import MyGallery from "./components/MyGallery";
import Carousel from "./components/Carousel";
import AboutMe from "./components/AboutMe";

const Home = () => {
  return (
    <main className="flex flex-col row-start-2 items-center">
      <UpperMenu />
      <Header />
      <HeroSection />
      <MyGallery />
      <Carousel />
      <AboutMe />
    </main>
  );
};

export default Home;