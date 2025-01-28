import React from "react";
import Banner from "./Firstbanner/banner";
import Topcategories from "./Topcategory/category";
import Featureproduct from "./Featureproduct/Feature";
import Foodproduct from "./Foodproduct/foodproduct";
import Bannertwo from "./Firstbanner/bannertwo";
import Counter from "./Firstbanner/counter"
import Dayoffer from "./weeklyoffer/dayoffer"
import Bannerthree from "./Firstbanner/bannerthree"
import Onsellproduct from "./onsellproduct/sellproduct"
import Slider from "./Slider/firstslider"
import Testimonial from "./Testimonial/Testimonial"
import Bannerfour from "./Firstbanner/bannerfour"
import Noga from "./Nogaproduct/noga"
import Bannerfive from "./Firstbanner/bannerfive"
import Garden from "./Gardeningpro/garden"
import Bannersix from "./Firstbanner/bannersix"
const Home = () => {
  return (
    <main>
      <Banner />
      <Topcategories />
      <Featureproduct />
      <Bannertwo />
      <Counter />
      <Dayoffer />
      <Bannerthree />
      <Foodproduct />
      <Onsellproduct />
      <Slider />
      <Bannerfour />
      <Noga />
      <Bannerfive />
      <Garden/>
      <Bannersix />
      <Testimonial />
    
    </main>
  );
};

export default Home;
