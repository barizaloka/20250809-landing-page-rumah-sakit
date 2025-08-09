import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="min-h-scren bg-gray-100 font-sans text-gray-800">
      <Header />
      <Hero />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;