import React from 'react';
import untitled1 from '../../assets/Works/Ashokan/untitled1.jpg'
import untitled2 from '../../assets/Works/Ashokan/untitled2.jpg'
import untitled3 from '../../assets/Works/Ashokan/untitled3.jpg'
import untitled4 from '../../assets/Works/Ashokan/untitled4.jpg'
import untitled5 from '../../assets/Works/Ashokan/untitled5.jpg'
import untitled6 from '../../assets/Works/Ashokan/untitled6.jpg'
import untitled7 from '../../assets/Works/Ashokan/untitled7.jpg'
import untitled8 from '../../assets/Works/Ashokan/untitled8.jpg'
import untitled9 from '../../assets/Works/Ashokan/untitled9.jpg'
import untitled10 from '../../assets/Works/Ashokan/untitled10.jpg'
import untitled11 from '../../assets/Works/Ashokan/untitled11.jpg'
import untitled12 from '../../assets/Works/Ashokan/untitled12.jpg'
import untitled13 from '../../assets/Works/Ashokan/untitled13.jpg'
import untitled14 from '../../assets/Works/Ashokan/untitled14.jpg'
import untitled15 from '../../assets/Works/Ashokan/untitled15.jpg'
import untitled16 from '../../assets/Works/Ashokan/untitled16.jpg'
import untitled17 from '../../assets/Works/Ashokan/untitled17.jpg'
import untitled18 from '../../assets/Works/Ashokan/untitled18.jpg'
import untitled19 from '../../assets/Works/Ashokan/untitled19.jpg'
import untitled20 from '../../assets/Works/Ashokan/untitled20.jpg'
import untitled21 from '../../assets/Works/Ashokan/untitled21.jpg'
import untitled22 from '../../assets/Works/Ashokan/untitled22.jpg'
import untitled23 from '../../assets/Works/Ashokan/untitled23.jpg'
import untitled24 from '../../assets/Works/Ashokan/untitled24.jpg'
// import './AutomonumentsCarousels.css'


import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
//   CarouselCaption
} from 'reactstrap';


const items = [
  {
    src: untitled1
   
  },
  {
    src: untitled2
  },
  {
    src: untitled3
  },
  {
    src: untitled4
  },
  {
    src: untitled5
  },
  {
    src: untitled6
  },
  {
    src: untitled7
  },
  {
    src: untitled8
  },
  {
    src: untitled9
  },
  {
    src: untitled10
  },
  {
    src: untitled11
  },
  {
    src: untitled12
  },
  {
    src: untitled13
  },
  {
    src: untitled14
  },
  {
    src: untitled15
  },
  {
    src: untitled16
  },
  {
    src: untitled17
  },
  {
    src: untitled18
  },
  {
    src: untitled19
  },
  {
    src: untitled20
  },
  {
    src: untitled21
  },
  {
    src: untitled22
  },
  {
    src: untitled23
  },
  {
    src: untitled24
  }
];

class AshokanCarousels extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
          
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          {/* <CarouselCaption captionText={item.caption} captionHeader={item.caption} /> */}
        </CarouselItem>
      );
    });

    return (
        <div>
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
      </div>
    );
  }
}


export default AshokanCarousels;