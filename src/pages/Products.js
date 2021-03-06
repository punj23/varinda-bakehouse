import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
// import Facebook from "../components/Facebook.jsx";

// import { Link } from "react-router-dom";
import ProductsContainer from "../components/ProductsContainer";

const Products = () => {
  return (
    <>
      <Hero hero="productsHero">
        <Banner title="Welcome to Varinda's Bakehouse"
          subtitle="One stop place for Homemade Eggless Cookies and Pinnis">
        </Banner>
      </Hero>
      {/* <Facebook /> */}
      <ProductsContainer />
    </>
  );
};

export default Products;
