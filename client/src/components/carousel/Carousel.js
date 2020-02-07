import React, { useState } from 'react';

import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import Canton from "../images/canton.jpeg";
import Commerce from "../images/commerce.jpg";
import FarmingtonHills from "../images/Farmington Hills.jpg";
import Farmington from "../images/Farmington.jpg";
import GreenOak from "../images/GreenOak.jpg";
import Livonia from "../images/Livonia.jpg";
import Milford from "../images/milford2.jpg";
import NewHudson from "../images/NewHudson.jpg";
import NorthVille from "../images/Northville.jpg";
import Novi from "../images/Novi.jpg";
import Plymouth from "../images/Plymouth.jpg";
import SouthLyon from "../images/South Lyon.jpg";
import WalledLake from "../images/walledlake.jpg";
import Waterford from "../images/waterford.jpg";
import Westland from "../images/westland.jpg";
import Wixom from "../images/wixom.jpg";



const items = [
  {
    src: Canton,  
    id: 1,
    caption: 'canton',
    acaption: '/canton',
  },
  {
    src: Commerce,  
    id: 2,
    caption: 'Commerce',
    acaption: '/commerce',
  },
  {
    src: Farmington,  
    id: 3,
    caption: 'Farmington',
    acaption: "/farmington",
  },
  {
    src: FarmingtonHills,  
    id: 4,
    caption: 'Farmington Hills',
    acaption: '/farmington-hills',
  },
  {
    src: GreenOak,  
    id: 5,
    caption: 'Green Oak',
    acaption: '/green-oak',
  },
  {
    src: Livonia,  
    id: 6,
    caption: 'Livonia',
    acaption: '/livonia',
  },
  {
    src: Milford,  
    id: 7,
    caption: 'Milford',
    acaption: '/milford',
  },
  {
    src: NewHudson,  
    id: 8,
    caption: 'New Hudson',
    acaption: '/new-hudson',
  },
  {
    src: NorthVille,  
    id: 9,
    caption: 'Northville',
    acaption: '/northville',
  },
  {
    src: Novi,  
    id: 10,
    caption: 'Novi',
    acaption: '/novi',
  },
  {
    src: Plymouth,  
    id: 11,
    caption: 'Plymouth',
    acaption: '/plymouth',
  },
  {
    src: SouthLyon,  
    id: 12,
    caption: 'South Lyon',
    acaption: '/south-lyon',
  },
  {
    src: WalledLake,  
    id: 13,
    caption: 'Walled Lake',
    acaption: '/walled-lake',
  },
  {
    src: Waterford,  
    id: 14,
    caption: 'Waterford',
    acaption: '/waterford',
  },
  {
    src: Westland,  
    id: 15,
    caption: 'Westland',
    acaption: '/westland',
  },
  {
    src: Wixom,  
    id: 16,
    caption: 'Wixom',
    acaption: '/wixom',
  },
];

const Wheel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        className="custom-tag"
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
       <div className="custom-image">
          <img className="custom-image" src={item.src} alt={item.altText} /> 
       </div>

        
       
        <a href={item.acaption}>
          <CarouselCaption className="text-danger"  captionHeader={item.caption} />
        </a>
      </CarouselItem>
    );
  });

  return (
    <div>
      {/* <style>
        {
          `.custom-tag {
              max-width: 100%;
              height: 500px;
              background: black;
            }`
        }
        {
          `.custom-image{
            margin-top: 2%;
            margin-left: 15%;
            width: 70%;
          }`
        }
      </style>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel> */}
    </div>
  );
}

export default Wheel;