import React, { Component } from 'react';
import { CgChevronLeft, CgChevronRight } from 'react-icons/cg';


class Carousel extends Component {
  constructor() {
    super()
    this.state = {
      carousel: [
        { id: 1, img: 'images/carousel/carousel-01.jpg', title: 'welcome', description: '', classes: 'carousel-item ' },
        { id: 2, img: 'images/carousel/carousel-02.jpg', title: 'YasRShop.com', description: '', classes: 'carousel-item' },
        { id: 3, img: 'images/carousel/carousel-03.jpg', title: 'YasRCode Company', description: '', classes: 'carousel-item' },
      ],
      counter: 1,
    }
    this.slide = this.slide.bind(this);
    this.next = this.next.bind(this);
    this.prev = this.prev.bind(this);
  }
  componentDidMount() {
    this.slide();
  }

  slide = () => {
    this.setState((state) => {
      return { classes: state.carousel[state.counter - 1].classes = 'carousel-item active' }
    });
  }

  removeActiveClasses = () => {
    this.setState((state) => {
      return { classes: state.carousel[state.counter - 1].classes = 'carousel-item' }
    });
  }

  next = () => {
    if (this.state.counter >= this.state.carousel.length) {
      this.removeActiveClasses();
      this.setState({ counter: 1 });
    } else {
      this.removeActiveClasses();
      this.setState((state) => {
        return { counter: state.counter += 1 }
      });
    }
    this.slide();
  }

  prev = () => {
    if (this.state.counter <= 1) {
      this.removeActiveClasses();
      this.setState((state) => {
        return { counter: state.carousel.length }
      });
    } else {
      this.removeActiveClasses();
      this.setState((state) => {
        return { counter: state.counter -= 1 }
      });
    }
    this.slide();
  }


  mapping = () => {
    return this.state.carousel.map((x) => {
      return (
        <div key={x.id} className={x.classes}>
          <img src={x.img} alt={x.title} className="carousel-img" />
          <div className="carousel-caption">
            <h1 className="carousel-title">{x.title}</h1>
            <p className="carousel-description">{x.description}</p>
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className="carousel">
        {this.mapping()}
        <span className="prev" onClick={() => this.prev()}><CgChevronLeft /></span>
        <span className="next" onClick={() => this.next()}><CgChevronRight /></span>
      </div>
    )
  }
}
export default Carousel;
