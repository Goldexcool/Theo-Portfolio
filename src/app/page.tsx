import Image from 'next/image'
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Contactus from "../components/Contactus";
import Gallery from "../components/Gallery";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main >
      <section>
        <Hero />
        <About />
        <Services />
        <Gallery />
        <Contactus />
        <Footer />
      </section>
    </main>
  )
}
