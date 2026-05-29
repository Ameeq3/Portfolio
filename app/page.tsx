import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Summary from './components/Summary';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import LanguagesSection from './components/LanguagesSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Summary />
        <Skills />
        <Experience />
        <Education />
        <LanguagesSection />
      </main>
      <Footer />
    </>
  );
}
