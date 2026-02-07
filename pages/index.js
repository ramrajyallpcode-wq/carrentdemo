import React from "react";
import Head from "next/head";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Footer from "./components/Footer";
import Cars from "./components/Cars";
import About from "./components/About";
import Choose from "./components/Choose";
import Loader from "./components/Loader";
import Services from "./components/Services";

const Index = () => {
  return (
    <div>
      <Head>
        <title>
          Best Car Rental in india | Most Affordable Car Hire Services india
        </title>
      </Head>
      <Loader />
      <Navbar />
      <Landing />
      <About />
      <Services />
      <Cars />
      <Choose />
      <Footer />
    </div>
  );
};

export default Index;
