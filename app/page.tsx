import { TopBar } from "@/components/top-bar"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { CategoryBar } from "@/components/category-bar"
import { FeaturedCategories } from "@/components/featured-categories"
import { MostLovedPieces } from "@/components/most-loved-pieces"
import { HowItsMade } from "@/components/how-its-made"
import { RootedInCraft } from "@/components/rooted-in-craft"
import { ReviewsAndSocial } from "@/components/reviews-social"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <main className="min-h-screen">
      <TopBar />
      <Header />
      <HeroSection />
      <CategoryBar />
      <FeaturedCategories />
      <MostLovedPieces />
      <HowItsMade />
      <RootedInCraft />
      <ReviewsAndSocial />
      <Footer />
    </main>
  )
}
