import React from "react";
import PickUp from "@/component/mainContent/pickUp/pickUp";
import OurService from "@/component/mainContent/ourService/ourService";
import OurMission from "@/component/mainContent/mission/ourMission";
import FAQ from "@/component/mainContent/faq/faq";
import Testimonials from "@/component/mainContent/testimonials/testimonials";
import LatestNews from "@/component/mainContent/news/latestnews";
import ContactUs from "@/component/mainContent/contact/contact";
import ResponsiveCarousel from "@/component/mainContent/carousel/carousel";

function MainPage() {
  return (
    <div>
      <PickUp />
      <OurService />
      <OurMission />
      <FAQ />
      <Testimonials />
      <LatestNews />
      <ContactUs />
      <ResponsiveCarousel />
    </div>
  );
}

export default MainPage;
