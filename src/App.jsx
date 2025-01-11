import React from "react";
import "./App.css";
import Menu from "./components/menu/Menu";
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
    <div className="app">
      <div className="gridContainer">
        <div className="header">
          <Header />
        </div>

        <div className="column">
          <div className="menu">
            <Menu />
          </div>

          <main>
            <HeroSection />
            <About />
            <Features />
            <Recomedened />
            <ContactUs />
            <Inquiry />
            <Contract />
          </main>
        </div>
        <div className="gradientColumn"></div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
