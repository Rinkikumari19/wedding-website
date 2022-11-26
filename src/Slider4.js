import React from "react";
// import dynamic from 'next/dynamic';
import Slider from "react-draggable-slider";
// const OwlCarousel = dynamic(import("react-owl-carousel3"));

export default function Slider4() {
  // const options = {
  //   loop: true,
  //   margin: 0,
  //   nav: false,
  //   mouseDrag: true,
  //   dots: false,
  //   autoplay: true,
  //   smartSpeed: 1500,
  //   autoplayHoverPause: true,

  //   responsive: {
  //     0: {
  //       items: 1,
  //       margin: 10
  //     },
  //     576: {
  //       items: 1
  //     },
  //     768: {
  //       items: 2,
  //       margin: 20
  //     },
  //     992: {
  //       items: 2
  //     },
  //     1200: {
  //       items: 2
  //     }
  //   }
  // };

  const projectList = [
    {
      title: "Bridal Makeup in Delhi NCR",
      image:
        "https://image.wedmegood.com/resized/300X/uploads/banner_image/2/mua.jpg"
      // description: "Bridal Makeup in Delhi NCR "
    },
    {
      title: "Photographers in Delhi NCR",
      image:
        "https://image.wedmegood.com/resized/300X/uploads/banner_image/3/photography.jpg"
      // description: "Gurgaon | Noida | Central Delhi |"
    },
    {
      title: "Invitations in Delhi NCR",
      image:
        "https://image.wedmegood.com/resized/300X/uploads/banner_image/4/cards.jpg"
      // description: "Gurgaon | Noida | Central Delhi |"
    },
    {
      title: "Catering Services in Delhi NCR",
      image:
        "https://image.wedmegood.com/resized/300X/uploads/banner_image/5/caterers.jpg"
      // description: "Gurgaon | Noida | Central Delhi |"
    },
    {
      title: "Groom Wear in Delhi NCR",
      image:
        "https://image.wedmegood.com/resized/300X/uploads/banner_image/6/groom-wear.jpg" // description: "Gurgaon | Noida | Central Delhi |"
    },
    {
      title: "Mehendi Artist in Delhi NCR",
      image:
        "https://image.wedmegood.com/resized/300X/uploads/banner_image/7/mehndi.jpg"
    },
    {
      title: "Decorators in Delhi NCR",
      image:
        "https://image.wedmegood.com/resized/300X/uploads/banner_image/8/decorators.jpg"
    }
  ];

  const sliderSettings = {
    data: projectList,
    speed: 3000,
    bgColor: "#b4245d",
    showButton: true,
    buttonText: "Bridal Makeup",
    buttonHref: "vendors/delhi-ncr/bridal-makeup/",
    buttonTarget: "_self"
  };

  return (
    <>
      <div>
        <h2>Popular Searches</h2>
      </div>
      <div>
        <Slider sliderSettings={sliderSettings} />
        {/* <OwlCarousel className="client-wrap owl-carousel owl-theme">
          {...options}
          <div className="owl-carousel owl-theme">
            <div className="item">
              <h4>1</h4>
            </div>
            <div className="item">
              <h4>2</h4>
            </div>
            <div className="item">
              <h4>3</h4>
            </div>
          </div>
        </OwlCarousel> */}
      </div>
    </>
  );
}
