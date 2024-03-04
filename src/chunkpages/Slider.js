import React  from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 
import Slider from "react-slick";
export default function Slidershow(){
    const data =[
        {
    img: `images/kids1.jpg`,
    title:`Class - 6 to 7`,
    desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
    tempor incididunt ut labore et dolore magna aliqua. `
        },
        {
            img: `images/kids2.jpg`,
            title:`Class - 8 to 9`,
            desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
            tempor incididunt ut labore et dolore magna aliqua. `
       },
         {
           img: `images/kids3.jpg`,
           title:`Class - 10 to 11`,
            desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                 tempor incididunt ut labore et dolore magna aliqua. `
        },
        {
          img: `images/kids4.jpg`,
          title:`Class - 11 to 12`,
            desc: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                 tempor incididunt ut labore et dolore magna aliqua. `
          }
    ]
   
   
    var settings = {
        className: "center",
        centerMode: true,
        dots: true,
        infinite: true,
        speed: 1000,
        centerPadding: "60px",
        cssEase: "linear",
        autoplaySpeed: 2500,
        autoplay: true,
  
        slidesToShow: 1,
        slidesToScroll: 1,
      };

  return(
    <div className=" ">
<div className="  pt-32 justify-evenly  rounded-[20px]">
<Slider {...settings}>

    {data.map ( (d)=>(
        <div className=" flex flex-col flex-nowrap items-center gap-8 text-center sm:flex-row" >
        <div className="w-[250px] ">
            <img src={d.img} className="rounded-xl " alt="img" />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-heading font-Poppins">
              {d.title} {/* Changed from cards.title to card.title */}
            </h1>
            <h2 className="my-2 p-4 font-semibold text-subheading w-96 font-Inter">
              {d.desc} {/* Changed from cards.description to card.description */}
            </h2>
            <button className="h-10 px-5 my-2 text-white w-fit bg-blue-950 rounded-xl font-Poppins">
              know more
            </button>
          </div>
          </div>
    )) }
    </Slider>
</div>

    </div>
  );
}
