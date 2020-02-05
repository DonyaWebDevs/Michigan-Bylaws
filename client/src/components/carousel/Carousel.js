import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import NorthVille from "../Northville.jpg"

const items = [
  // {
  //   src: Canton,  
  //   id: 1,
  //   caption: 'canton',
  //   acaption: '/canton',
  // },
  // {
  //   src: Commerce,  
  //   id: 2,
  //   caption: 'Commerce',
  //   acaption: '/commerce',
  // },
  // {
  //   src: Farmington,  
  //   id: 3,
  //   caption: 'Farmington',
  //   acaption: '/farmington',
  // },
  // {
  //   src: FarmingtonHills,  
  //   id: 4,
  //   caption: 'Farmington Hills',
  //   acaption: '/farmington-hills',
  // },
  // {
  //   src: GreenOak,  
  //   id: 5,
  //   caption: 'Green Oak',
  //   acaption: '/green-oak',
  // },
  // {
  //   src: Livonia,  
  //   id: 6,
  //   caption: 'Livonia',
  //   acaption: '/livonia',
  // },
  // {
  //   src: Milford,  
  //   id: 7,
  //   caption: 'Milford',
  //   acaption: '/milford',
  // },
  // {
  //   src: NewHudson,  
  //   id: 8,
  //   caption: 'New Hudson',
  //   acaption: '/new-hudson',
  // },
  {
    src: NorthVille,  
    id: 9,
    caption: 'Northville',
    acaption: '/northville',
  },
  // {
  //   src: Novi,  
  //   id: 10,
  //   caption: 'Novi',
  //   acaption: '/novi',
  // },
  // {
  //   src: Plymouth,  
  //   id: 11,
  //   caption: 'Plymouth',
  //   acaption: '/plymouth',
  // },
  // {
  //   src: SouthLyon,  
  //   id: 12,
  //   caption: 'South Lyon',
  //   acaption: '/south-lyon',
  // },
  // {
  //   src: WalledLake,  
  //   id: 13,
  //   caption: 'Walled Lake',
  //   acaption: '/walled-lake',
  // },
  // {
  //   src: Waterford,  
  //   id: 14,
  //   caption: 'Waterford',
  //   acaption: '/waterford',
  // },
  // {
  //   src: Westland,  
  //   id: 15,
  //   caption: 'Westland',
  //   acaption: '/westland',
  // },
  // {
  //   src: Wixom,  
  //   id: 16,
  //   caption: 'Wixom',
  //   acaption: '/wixom',
  // },
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
       
        <img src={item.src} alt={item.altText} /> 
        
        <a href={item.acaption}>{item.caption}</a>
        <CarouselCaption className="text-danger" captionText={item.caption} captionHeader={item.caption} />
      </CarouselItem>
    );
  });

  return (
    <div>
      <style>
        {
          `.custom-tag {
              max-width: 100%;
              height: 500px;
              background: black;
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
      </Carousel>
    </div>
  );
}

export default Wheel;