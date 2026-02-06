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
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <meta
          property="og:title"
          content="Best Car Rental in india | Top-Rated Vehicle Hire Services"
        />
        <meta
          property="og:description"
          content="Leading car rental service in india offering wide range of vehicles. Best prices guaranteed for self-drive cars and chauffeur services across india."
        />
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
