import React from "react";
import "./App.css";
import GlobalBackground from "./components/background/Background";
import Header from "./sections/header/Header";
import HeroSection from "./sections/hero/HeroSection";
import About from "./sections/about/About";
import Features from "./sections/features/Features";
import Recomedened from "./sections/recomeneded/Recomeneded";
import Contract from "./sections/contract/Contract";
import ContactUs from "./sections/contactus/ContactUs";
import Inquiry from "./sections/inquiry/Inquiry";
import Footer from "./sections/footer/Footer";

function App() {
  return (
    <>
      <GlobalBackground />
      <Header />

      <main>
        <HeroSection />
        <About />
        <Features />
        <Recomedened />
        <Contract />
        <ContactUs />
        <Inquiry />
        <Footer />
      </main>
    </>
  );
}

export default App;
