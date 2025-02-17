import React from "react";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

export default function Testimonials() {
  return (
    <div className="h-fit md:w-full w-96 ">


        <div>
           
            <div className="relative px-8 py-20 xl:px-20 2xl:mx-auto 2xl:container">
                <CarouselProvider naturalSlideWidth={100} isIntrinsicHeight={true} totalSlides={2}>
                    <h1 className="hidden pb-10 text-2xl text-center text-gray-800 font-Poppins xl:block">
                        What our customers are saying
                    </h1>
                    <h1 className="block text-5xl font-bold leading-tight text-gray-800 xl:hidden lg:leading-10">What our customers are saying</h1>
                    <Slider>
                        <Slide index={0} tabIndex="null">
                            <div className="flex">
                                <div className="mt-14 md:flex">
                                    <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                                        <div className="">
                                        <img src="https://i.ibb.co/4g1D9cv/imgslider1.png" alt="" className="flex-shrink-0 object-cover w-full h-full shadow-lg rounded-3xl object-fit" />
                                        </div>
                                        <div className="absolute top-0 right-0 items-center justify-center hidden w-32 h-32 -mr-16 bg-indigo-100 rounded-full md:flex -mt-14">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg" alt="commas" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-between mt-4 md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0">
                                        <div>
                                            <h1 className="text-2xl font-semibold text-gray-800 xl:leading-loose">Some of the best work that was done!</h1>
                                            <p className="mt-4 text-base font-medium leading-6 text-gray-600">Our core values are at the heart of all that we do. They are integrated into our daily work lives and help us to remember our customers always comes first, the last thank you should always comes from us.</p>
                                        </div>
                                        <div className="mt-8 md:mt-0">
                                            <p className="text-base font-medium leading-4 text-gray-800">Anna Smith</p>
                                            <p className="mt-2 mb-4 text-base leading-4 text-gray-600">Senior Web Designer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                        <Slide index={1}>
                            <div className="relative flex" style={{ transform: 'translateX(0%)' }}>
                                <div className="mt-14 md:flex">
                                    <div className="relative lg:w-1/2 sm:w-96 xl:h-96 h-80">
                                        <div className="">
                                        <img src="https://i.ibb.co/4g1D9cv/imgslider1.png" alt="" className="flex-shrink-0 object-cover w-full h-full shadow-lg rounded-3xl object-fit" />
                                        </div>
                                        <div className="absolute top-0 right-0 items-center justify-center hidden w-32 h-32 -mr-16 bg-indigo-100 rounded-full md:flex -mt-14">
                                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg1.svg" alt="commas" />
                                        </div>
                                    </div>
                                    <div className="flex flex-col justify-between mt-4 md:w-1/3 lg:w-1/3 xl:ml-32 md:ml-20 md:mt-0">
                                        <div>
                                            <h1 className="text-2xl font-semibold text-gray-800 xl:leading-loose">Some of the best work that was done!</h1>
                                            <p className="mt-4 text-base font-medium leading-6 text-gray-600">Our core values are at the heart of all that we do. They are integrated into our daily work lives and help us to remember our customers always comes first, the last thank you should always comes from us.</p>
                                        </div>
                                        <div className="mt-8 md:mt-0">
                                            <p className="text-base font-medium leading-4 text-gray-800">Anna Smith</p>
                                            <p className="mt-2 mb-4 text-base leading-4 text-gray-600">Senior Web Designer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slide>
                    </Slider>
                    <div className="flex items-center mt-8">
                        <ButtonBack className="cursor-pointer " role="button" aria-label="previous slide">
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonal-svg2.svg" alt="previous" />
                        </ButtonBack>

                        <ButtonNext role="button" aria-label="next slide" className="ml-2 cursor-pointer">
                            <img src="https://tuk-cdn.s3.amazonaws.com/can-uploader/testimonial-svg3.svg" alt="next" />
                        </ButtonNext>
                    </div>
                </CarouselProvider>
            </div>
        </div>    
    </div>
  );
}
