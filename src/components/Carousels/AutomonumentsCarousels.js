import React, { Component } from 'react';
import Artbridge1 from '../../assets/Works/Automonuments/Artbridge1.jpg'
import Artbridge3 from '../../assets/Works/Automonuments/Artbridge3.jpg'
import Artbridge4 from '../../assets/Works/Automonuments/Artbridge4.jpg'




import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
//   CarouselCaption
} from 'reactstrap';


const items = [
  {
    src: Artbridge1
   
  },
  {
    src: Artbridge3
  },
  {
    src: Artbridge4
  },
//   {
//     src: untitled4
//   },
//   {
//     src: untitled5
//   },
//   {
//     src: untitled6
//   },
//   {
//     src: untitled7
//   },
//   {
//     src: untitled8
//   },
//   {
//     src: untitled9
//   },
//   {
//     src: untitled10
//   },
//   {
//     src: untitled11
//   },
//   {
//     src: untitled12
//   },
//   {
//     src: untitled13
//   },
//   {
//     src: untitled14
//   },
//   {
//     src: untitled15
//   },
//   {
//     src: untitled16
//   },
//   {
//     src: untitled17
//   },
//   {
//     src: untitled18
//   },
//   {
//     src: untitled19
//   },
//   {
//     src: untitled20
//   },
//   {
//     src: untitled21
//   },
//   {
//     src: untitled22
//   },
//   {
//     src: untitled23
//   },
//   {
//     src: untitled24
//   }
];

class AutomonumentsCarousels extends Component {
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


export default AutomonumentsCarousels;