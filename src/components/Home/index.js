import React from "react";
import Banner from "./Firstbanner/banner";
import Topcategories from "./Topcategory/category";
import Featureproduct from "./Featureproduct/Feature";
import Foodproduct from "./Foodproduct/foodproduct";
import Bannertwo from "./Firstbanner/bannertwo";
import Counter from "./Firstbanner/counter"
import Dayoffer from "./weeklyoffer/dayoffer"
import Bannerthree from "./Firstbanner/bannerthree"
import Bannereight from "./Firstbanner/bannereight"
import Onsellproduct from "./onsellproduct/sellproduct"
import Slider from "./Slider/firstslider"
import Testimonial from "./Testimonial/Testimonial"
import Bannerfour from "./Firstbanner/bannerfour"
import Noga from "./Nogaproduct/noga"
import Bannerfive from "./Firstbanner/bannerfive"
import Pesticides from "./Pesticides/pesticides"
import Fertilizer from "./Fertilizerproduct/fertilizer"
import Animal from "./Animalproduct/animal"
import Garden from "./Gardeningpro/garden"
import Bannersix from "./Firstbanner/bannersix"
import Agroengineer from "./Agroengineer/Agroengineer"
import Belowbanner from "./Firstbanner/bannerseven"
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
      <Bannereight/>
      <Onsellproduct />
      <Slider />
      <Bannerfour />
      <Noga />
      <Bannerfive />
      <Pesticides/>
      <Bannersix />
      <Fertilizer/>
      <Bannersix />
      <Animal/>
      <Bannersix />
      <Garden/>
      <Bannersix />
      <Agroengineer/>
      <Bannersix />
      <Testimonial />
      <Belowbanner />
    
    </main>
  );
};

export default Home;
