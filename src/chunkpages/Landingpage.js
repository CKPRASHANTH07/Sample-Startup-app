import React,{useState,useEffect} from "react";
import img1 from "../pageimg/mm.png";
import img2 from "../pageimg/idea.png"
import img3 from "../pageimg/fund.png"

export default function Landingpage() {

  const [activeCard, setActiveCard] = useState(0);

  const cards = [
    { image: img1,title:'Get Your Ideas Staged!',description:'Transforming Ideas Into Impact and Supercharge Your Startup Journey With Our Accelerator Program. Join Us and Propel Your Vision To New Heights !'},
    { image: img2,title:'Shoppers stop',description: 'The partnership has opened up new avenues of growth and opportunity for us.' },
    { image: img3,title:'D mart',description: 'The synergy between our companies is remarkable. We have found common ground in our shared values.' },
  ];

  const numberOfVisibleCards = 1; // Number of cards to display at a time
  const autoplayInterval =2800; // Autoplay interval in milliseconds

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveCard((prevCard) => (prevCard === cards.length - 1 ? 0 : prevCard + 1));
    }, autoplayInterval);

    return () => clearInterval(timer);
  }, [cards.length]);

  const nextCard = () => {
    setActiveCard((prevCard) => (prevCard === cards.length - 1 ? 0 : prevCard + 1));
  };

  const prevCard = () => {
    setActiveCard((prevCard) => (prevCard === 0 ? cards.length - 1 : prevCard - 1));
  };

  const getVisibleCards = () => {
    const endIndex = activeCard + numberOfVisibleCards;
    if (endIndex >= cards.length) {
      return [...cards.slice(activeCard), ...cards.slice(0, endIndex % cards.length)];
    }
    return cards.slice(activeCard, endIndex);
  };

  const visibleCards = getVisibleCards();
  return (
  <div>
    <div className="flex items-center pt-32 justify-evenly">
      {/* content */}
      {visibleCards.map((card, index) => (
        <div className=" flex flex-col items-center w-fit text-center sm:flex-row" key={index}>
          <div>
            <h1 className="text-4xl font-bold text-heading font-Poppins">
              {card.title} {/* Changed from cards.title to card.title */}
            </h1>
            <h2 className="my-5 p-4 font-semibold text-subheading w-96 font-Inter">
              {card.description} {/* Changed from cards.description to card.description */}
            </h2>
            <button className="h-10 px-5 my-4 text-white w-fit bg-blue-950 rounded-xl font-Poppins">
              Launch Test!
            </button>
          </div>
          {/* Hero image */}
          <div className="flex items-center">
            <img src={card.image} className="w-auto xl:pl-40 h-auto" alt="img" />
          </div>
        </div>
      ))}
    </div>
    <div className="flex justify-center">
    <button className='' onClick={prevCard}>
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"/><path d="M13.293 7.293 8.586 12l4.707 4.707 1.414-1.414L11.414 12l3.293-3.293-1.414-1.414z"/></svg>
      </button>
      <button className='' onClick={nextCard}>
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8.009 8.009 0 0 1-8 8z"/><path d="M9.293 8.707 12.586 12l-3.293 3.293 1.414 1.414L15.414 12l-4.707-4.707-1.414 1.414z"/></svg>
      </button>
    </div>
    </div>
  );
  
}


