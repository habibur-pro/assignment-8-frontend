import banner from "@/assets/images/banner.jpg";
import Container from "@/components/layout/Contaienr";
import HeroCarousel from "./HeroCarousel";
const HeroSection = () => {
  return (
    <>
      <div className=" min-h-screen 2xl:h-[calc(100vh-64px)] 2xl:min-h-[calc(100vh-64px)]  banner">
        <div className="bg-black pt-10 bg-opacity-70 h-full w-full leading-20">
          <Container className="h-full flex flex-col items-center justify-center">
            <h1 className="text-5xl xl:text-7xl text-center text-white font-bold">
              Fashion Forward: Redefine Your Dress Collection
            </h1>
            <p className="text-white  text-center mt-5 leading-8 text-lg">
              Welcome to Luxe Fashion, your destination for the perfect dress
              for every occasion. Our curated collection blends timeless
              elegance with modern flair, offering high-quality, stylish dresses
              to express your individuality and boost confidence. Discover your
              unique style today!
            </p>
            <div className="mt-10 pb-10">
              <HeroCarousel />
            </div>
          </Container>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
