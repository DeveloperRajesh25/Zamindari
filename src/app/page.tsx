import { Hero } from "@/components/home/Hero";
import { HeritageStrip } from "@/components/home/HeritageStrip";
import { SignatureDishes } from "@/components/home/SignatureDishes";
import { StorySection } from "@/components/home/StorySection";
import { AmbianceShowcase } from "@/components/home/AmbianceShowcase";
import { ReviewsCarousel } from "@/components/home/ReviewsCarousel";
import { BookingCTA } from "@/components/home/BookingCTA";
import { LocationMap } from "@/components/home/LocationMap";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HeritageStrip />
      <SignatureDishes />
      <StorySection />
      <AmbianceShowcase />
      <ReviewsCarousel />
      <BookingCTA />
      <LocationMap />
    </>
  );
}
