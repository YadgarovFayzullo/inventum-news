import { Header } from "@/components/landing/header";
import { Hero } from "@/components/landing/hero";
import { FeaturedArticles } from "@/components/landing/featured-articles";
import { Categories } from "@/components/landing/categories";
import { HowWeWork } from "@/components/landing/how-we-work";
import { ScientificDashboard } from "@/components/landing/scientific-dashboard";
import { About } from "@/components/landing/about";
import { Newsletter } from "@/components/landing/newsletter";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <FeaturedArticles />
      <Categories />
      <HowWeWork />
      <ScientificDashboard />
      <About />
      <Newsletter />
      <Footer />
    </div>
  );
}
