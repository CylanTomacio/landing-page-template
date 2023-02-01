import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Support } from "./components/Support";
import { Platforms } from "./components/Platforms";
import { Pricing } from "./components/Pricing";
import { Footer } from "./components/Footer";
import { TopHeader } from "./components/TopHeader";

export const App = () => {

  return (
    <>
      <TopHeader />
      <Navbar />
      <Hero />
      <About />
      <Support />
      <Platforms />
      <Pricing />
      <Footer />
    </>
  )
}
