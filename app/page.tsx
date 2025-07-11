import Hero from "@/components/hero"
import FeaturedProducts from "@/components/featured-products"
import CategorySection from "@/components/category-section"
import TrendingSection from "@/components/trending-section"
import PromoSection from "@/components/promo-section"
import BrandsSection from "@/components/brands-section"
import AboutSection from "@/components/about-section"
import StatsSection from "@/components/stats-section"
import TestimonialSection from "@/components/testimonial-section"
import JoinSection from "@/components/join-section"

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <StatsSection />
      <FeaturedProducts />
      <CategorySection />
      <TrendingSection />
      <TestimonialSection />
      <PromoSection />
      <BrandsSection />
      <JoinSection />
    </>
  )
}
