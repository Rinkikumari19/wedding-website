import React from "react";
import Slider from "react-draggable-slider";

export default function Slider3() {
  const projectList = [
    {
      title: "4 Star & Above Hotels",
      image:
        "https://image.wedmegood.com/resized/300X/uploads/option_image/62/4-star-above-hotels.png",
      description: "Gurgaon | Noida | Central Delhi | "
    },
    {
      title: "Banquet Halls",
      image:
        "https://image.wedmegood.com/resized/300X/uploads/option_image/63/banquet-halls.png",
      description: "Gurgaon | Noida | Central Delhi |"
    },
    {
      title: "Lawns / Farmhouses",
      image:
        "https://image.wedmegood.com/resized/300X/uploads/option_image/64/lawn-farm-house.jpg",
      description: "Gurgaon | Noida | Central Delhi |"
    },
    {
      title: "Hotels",
      image:
        "https://image.wedmegood.com/resized/300X/uploads/option_image/65/hotel.png",
      description: "Gurgaon | Noida | Central Delhi |"
    }
  ];

  const sliderSettings = {
    data: projectList,
    speed: 3000,
    bgColor: "#b4245d",
    showButton: true,
    buttonText: "All Localities",
    buttonHref: "/vendors/delhi-ncr/wedding-venues/all/five-star/",
    buttonTarget: "_self"
  };

  return (
    <>
      <div>
        <h2>Popular Venue Searches</h2>
      </div>
      <div>
        <Slider sliderSettings={sliderSettings} />
      </div>
    </>
  );
}
