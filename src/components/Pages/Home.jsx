import React from "react";
import Header from "../Header";
import Feature from "../Feature";
import Download from "../Download";
import Watch from "../Watch";
import Children from "../Children";
import Footer from "../Footer";
import FaqContent from "../FaqContent";
const Home = () => {
  return (
    <>
      <div className="bg-black">
        <Header />
        <Feature />
        <Download />
        <Watch />
        <Children />
        <FaqContent />
        <Footer />
      </div>
    </>
  );
};

export default Home;
