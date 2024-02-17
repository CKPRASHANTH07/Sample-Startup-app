import Footer from '../UIcomp/Footer'
import React, { useState, useEffect } from 'react';
import img1 from '../pageimg/re.png';
import img2 from '../pageimg/image (24).png';
import img3 from '../pageimg/image (25).png';
import img4 from '../pageimg/image (26).png';


export default function Endofhome() {
    const [activeCard, setActiveCard] = useState(0);
    const cards = [
      { image: img1,},
      { image: img2,},
      { image: img3,},
      { image: img4,},
    ];
  
    const numberOfVisibleCards = 3; // Number of cards to display at a time
    const autoplayInterval =2800; // Autoplay interval in milliseconds
  
    useEffect(() => {
      const timer = setInterval(() => {
        setActiveCard((prevCard) => (prevCard === cards.length - 1 ? 0 : prevCard + 1));
      }, autoplayInterval);
  
      return () => clearInterval(timer);
    }, [cards.length]);
  
    const getVisibleCards = () => {
      const endIndex = activeCard + numberOfVisibleCards;
      if (endIndex >= cards.length) {
        return [...cards.slice(activeCard), ...cards.slice(0, endIndex % cards.length)];
      }
      return cards.slice(activeCard, endIndex);
    };
  
    const visibleCards = getVisibleCards();
  
  return (

    <div className="h-dvh ">
      <div className='flex flex-col gap-y-7'>
        {/* row sliding */}
        <div className='flex flex-row justify-center'>

          {visibleCards.map((card, index) => {
             // Check if the card is the center card

            return (
              <div key={index} className="flex flex-col  px-8 py-8  lg:w-[35%] xl:w-[30%] rounded-lg transform scale-[0.7] translate-y-3">
                {/* Images logo */}
                <div className='flex items-center justify-center px-5 py-5 '>
                  <img src={card.image} alt='' />
                </div>               
              </div>
            );
          })}

        </div>
      </div>
    <Footer/>
    </div>
  )
}
