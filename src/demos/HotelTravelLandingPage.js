import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/FullWidthWithImage.js";

import MainFeature from "components/features/TwoColSingleFeatureWithStats.js";
import SliderCard from "components/cards/ThreeColSlider.js";

import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";


import Footer from "components/footers/MiniCenteredFooter.js";

export default () => (
  <AnimationRevealPage>
    <Hero />
   
    <SliderCard />
   
    <MainFeature />
  
    <Testimonial textOnLeft={true}/>
 
    <Footer />
  </AnimationRevealPage>
);
