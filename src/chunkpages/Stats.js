
           import React from 'react';
        import Slider from 'react-slick';
        import 'slick-carousel/slick/slick.css';
        import 'slick-carousel/slick/slick-theme.css';
        
        const Stats = () => {
          const data = [
            {
              title: 'Slide 1',
              desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat, quam vitae pretium varius, velit ipsum gravida nisi, et dictum dui risus nec purus. Integer quis ultricies mi.',
            },
            {
              title: 'Slide 2',
              desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat, quam vitae pretium varius, velit ipsum gravida nisi, et dictum dui risus nec purus. Integer quis ultricies mi.',
            },
            {
              title: 'Slide 3',
              desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat, quam vitae pretium varius, velit ipsum gravida nisi, et dictum dui risus nec purus. Integer quis ultricies mi.',
            },
            {
              title: 'Slide 4',
              desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat, quam vitae pretium varius, velit ipsum gravida nisi, et dictum dui risus nec purus. Integer quis ultricies mi.',
            },
            {
              title: 'Slide 5',
              desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat, quam vitae pretium varius, velit ipsum gravida nisi, et dictum dui risus nec purus. Integer quis ultricies mi.',
            },
            {
              title: 'Slide 6',
              desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat, quam vitae pretium varius, velit ipsum gravida nisi, et dictum dui risus nec purus. Integer quis ultricies mi.',
            },
            {
              title: 'Slide 7',
              desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus consequat, quam vitae pretium varius, velit ipsum gravida nisi, et dictum dui risus nec purus. Integer quis ultricies mi.',
            },
          ];
        
          const settings = {
            className: 'center',
            centerMode: true,
            dots: true,
            infinite: true,
            speed: 1000,
            centerPadding: '60px',
            cssEase: 'linear',
            autoplaySpeed: 2500,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            responsive: [
              {
                breakpoint: 768,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  centerMode: false,
                }
              },
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  centerMode: false,
                }
              },
            ],
          };
        
          return (
            <section className="grid gap-4 w-full py-32 bgcolor">
               <h1 className="pl-4 text-4xl text-center font-Poppins">What we done ?</h1>
        <h2 className="pl-6 pt-4 lg:px-56 text-center text-blue-950 pb-20 font-semibold">Introducing "Altruisty" - your compass to meaningful tech solutions! We're a startup dedicated to crafting innovative software solutions that make a difference. With Altruisty, your journey to impactful digital transformation begins. Join us as we navigate the tech landscape together, creating solutions that empower and inspire. Welcome to Altruisty - where purpose meets technology!</h2>
    
              <div className="h-96 sm:w-[600px] md:w-[800px] lg:w-[1000px] w-96  gap-20 mx-auto">
                <Slider {...settings}>
                  {data.map((item, index) => (
                    <div key={index} className="text-gray-500 sm:text-lg :text-gray-400">
                      <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-center text-blue-900 :text-white">{item.title}</h2>
                      <p className="mb-8 font-semibold p-20 lg:text-xl">{item.desc}</p>
                    </div>
                  ))}
                </Slider>
              </div>
            </section>
          );
        };
        
        export default Stats;
        