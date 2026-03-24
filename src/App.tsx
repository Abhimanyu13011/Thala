import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import WhyAlpiniaa from "./components/WhyAlpiniaa";
import Sustainability from "./components/Sustainability";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen selection:bg-blue-400/30">
      <Navbar />
      <Hero />
      <Features />
      <WhyAlpiniaa />
      <Sustainability />
      <Products />
      <ProductDetail />
      <Footer />
    </main>
  );
}
