import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryShowcase from "@/components/CategoryShowcase";
import FeaturedProducts from "@/components/FeaturedProducts";
import WhySollnis from "@/components/WhySollnis";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-navy-950">
      <Navbar />
      <Hero />
      <CategoryShowcase />
      <FeaturedProducts />
      <WhySollnis />
      <CTASection />
      <Footer />
    </main>
  );
}
