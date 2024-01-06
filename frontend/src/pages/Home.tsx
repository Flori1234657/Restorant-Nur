import {
  Hero,
  AboutUs,
  Gallery,
  OurFoods,
  Reviews,
  CtaSection,
} from "../components/pages/home/layouts";
import Footer from "../components/same/footer/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <Gallery />
      <OurFoods />
      <Reviews />
      <CtaSection />
      <Footer />
    </>
  );
};

export default Home;
