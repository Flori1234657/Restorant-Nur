import { useEffect } from 'react';
import {
  Hero,
  AboutUs,
  Gallery,
  OurFoods,
  Reviews,
  CtaSection,
} from '@/components/pages/home/layouts';
import useFoodCardsStore from '@/components/store/foodCardsStore';

function Home() {
  const fetchFoodData = useFoodCardsStore();

  useEffect(() => {
    fetchFoodData.setFoodCards();
    fetchFoodData.setPromoCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Hero />
      <AboutUs />
      <Gallery />
      <OurFoods />
      <Reviews />
      <CtaSection />
    </>
  );
}

export default Home;
