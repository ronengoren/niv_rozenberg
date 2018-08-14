import React, { Component } from 'react';
import './AutomonumentsPage.css';
import Automonument01 from '../../../assets/Works/Automonuments/Automonument01.jpg'
import Automonument07 from '../../../assets/Works/Automonuments/Automonument07.jpg'
import Automonument10 from '../../../assets/Works/Automonuments/Automonument10.jpg'
import Automonument12 from '../../../assets/Works/Automonuments/Automonument12.jpg'
import Automonuments02 from '../../../assets/Works/Automonuments/Automonuments02.jpg'
import Automonuments03 from '../../../assets/Works/Automonuments/Automonuments03.jpg'
import Automonuments04 from '../../../assets/Works/Automonuments/Automonuments04.jpg'
import Automonuments05 from '../../../assets/Works/Automonuments/Automonuments05.jpg'
import Automonuments06 from '../../../assets/Works/Automonuments/Automonuments06.jpg'
import Automonuments08 from '../../../assets/Works/Automonuments/Automonuments08.jpg'
import Automonuments09 from '../../../assets/Works/Automonuments/Automonuments09.jpg'
import Automonuments13 from '../../../assets/Works/Automonuments/Automonuments13.jpg'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import lifecycle from 'react-pure-lifecycle';
import Carousel from "nuka-carousel";

const Automonumentsmethods = {
  componentDidMount() {
    var contAutomonument = document.querySelector('.contAutomonument') 
    console.log(contAutomonument)

    var closeBtnsArr = [].slice.call(document.querySelectorAll('.elAutomonuments__close-btn'));
    var elsArr = [].slice.call(document.querySelectorAll('.elAutomonuments'));
    setTimeout(function() {
    contAutomonument.classList.remove('s--inactive');
    }, 200);
    elsArr.forEach(function(el) {
    el.addEventListener('click', function() {
    if (this.classList.contains('s--active'))
    return;
    contAutomonument.classList.add('s--elAutomonuments-active');
    this.classList.add('s--active');
});
});
    closeBtnsArr.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
    e.stopPropagation();
    contAutomonument.classList.remove('s--elAutomonuments-active');
    document.querySelector('.elAutomonuments.s--active').classList.remove('s--active');
});
});
    //this will works cus it reads DOM element after render() pastes your element in DOM

    // this.ed.innerHTML = this.props.text;
  }
};


const AutomonumentsPage = () => (
  
  
 
  <div id="AutomonumentsPage" >
    <div className="AutomonumentsHeader">
  <h1>  Automonuments</h1>
  </div> 
  <div id="contAutomonument" className="contAutomonument s--inactive" ref={ref => this.contAutomonument = ref}>

  <Carousel slidesToShow={1} initialSlideHeight={700} initialSlideWidth={1200} width="100%" transitionMode={'scroll'}>

  <div className="contAutomonument__inner">
  
          <div className="elAutomonuments">
            <div className="elAutomonuments__overflow">
            <div className="elAutomonuments__inner">
            <div className="elAutomonuments__bg">
            <img src={Automonument01} alt="Automonument01"/>
            </div>
            <div className="elAutomonuments__preview-contAutomonument">
            <h2 className="elAutomonuments__heading"></h2>
            </div>
           
            <div  id="moreAutomonuments" className="elAutomonuments__text">
            </div>
            </div>
            </div>
            <div className="elAutomonuments__content">
            {/* <div className="elAutomonuments__text">Automonument</div> */}
            <div className="elAutomonuments__close-btn"></div>
            </div>
            {/* <div className="elAutomonuments__index">
            <div className="elAutomonuments__index-back">Automonument</div>
            <div className="elAutomonuments__index-front">
            <div className="elAutomonuments__index-overlay" data-index="Automonument01">Automonument</div>
            </div>
            </div> */}
          </div>
          <div className="elAutomonuments">
            <div className="elAutomonuments__overflow">
            <div className="elAutomonuments__inner">
            <div className="elAutomonuments__bg">
            <img src={Automonument07} alt="Automonument07"/>
            </div>
            <div className="elAutomonuments__preview-contAutomonument">
            <h2 className="elAutomonuments__heading"></h2>
            </div>
           
            <div  id="moreAutomonuments" className="elAutomonuments__text">
            </div>
            </div>
            </div>
            <div className="elAutomonuments__content">
            {/* <div className="elAutomonuments__text">Automonument</div> */}
            <div className="elAutomonuments__close-btn"></div>
            </div>
            {/* <div className="elAutomonuments__index">
            <div className="elAutomonuments__index-back">Automonument</div>
            <div className="elAutomonuments__index-front">
            <div className="elAutomonuments__index-overlay" data-index="Automonument07">Automonument</div>
            </div>
            </div> */}
          </div>
          <div className="elAutomonuments">
            <div className="elAutomonuments__overflow">
            <div className="elAutomonuments__inner">
            <div className="elAutomonuments__bg">
            <img src={Automonument10} alt="Automonument10"/>
            </div>
            <div className="elAutomonuments__preview-contAutomonument">
            <h2 className="elAutomonuments__heading"></h2>
            </div>
            <div  id="moreAutomonuments" className="elAutomonuments__text">
            </div>
            </div>
            </div>
            <div className="elAutomonuments__content">
            {/* <div className="elAutomonuments__text">Automonument</div> */}
            <div className="elAutomonuments__close-btn"></div>
            </div>
            {/* <div className="elAutomonuments__index">
            <div className="elAutomonuments__index-back">Automonument</div>
            <div className="elAutomonuments__index-front">
            <div className="elAutomonuments__index-overlay" data-index="Automonument010">Automonument</div>
            </div>
            </div> */}
          </div>
          <div className="elAutomonuments">
            <div className="elAutomonuments__overflow">
            <div className="elAutomonuments__inner">
            <div className="elAutomonuments__bg">
            <img src={Automonument12} alt="Automonument12"/>
            </div>
            <div className="elAutomonuments__preview-contAutomonument">
            <h2 className="elAutomonuments__heading"></h2>
            </div>
           
            <div  id="moreAutomonuments" className="elAutomonuments__text">
            </div>
            </div>
            </div>
             <div className="elAutomonuments__content">
            {/* <div className="elAutomonuments__text">Automonument</div> */}
            <div className="elAutomonuments__close-btn"></div>
            </div>
            {/* <div className="elAutomonuments__index">
            <div className="elAutomonuments__index-back">Automonument</div>
            <div className="elAutomonuments__index-front">
            <div className="elAutomonuments__index-overlay" data-index="Automonument12">Automonument</div>
            </div>
            </div> */}
          </div>
          <div className="elAutomonuments">
            <div className="elAutomonuments__overflow">
            <div className="elAutomonuments__inner">
            <div className="elAutomonuments__bg">
            <img src={Automonuments02} alt="Automonuments02"/>
            </div>
            <div className="elAutomonuments__preview-contAutomonument">
            <h2 className="elAutomonuments__heading"></h2>
            </div>
            
            <div  id="moreAutomonuments" className="elAutomonuments__text">
            </div>
            </div>
            </div>
            <div className="elAutomonuments__content">
            {/* <div className="elAutomonuments__text">Automonument</div> */}
            <div className="elAutomonuments__close-btn"></div>
            </div>
            {/* <div className="elAutomonuments__index">
            <div className="elAutomonuments__index-back">Automonument</div>
            <div className="elAutomonuments__index-front">
            <div className="elAutomonuments__index-overlay" data-index="Automonuments02">Automonument</div>
            </div>
            </div> */}
          </div>
          <div className="elAutomonuments">
            <div className="elAutomonuments__overflow">
            <div className="elAutomonuments__inner">
            <div className="elAutomonuments__bg">
            <img src={Automonuments03} alt="Automonuments03"/>
            </div>
            <div className="elAutomonuments__preview-contAutomonument">
            <h2 className="elAutomonuments__heading"></h2>
            </div>
            
            <div  id="moreAutomonuments" className="elAutomonuments__text">
            </div>
            </div>
            </div>
            <div className="elAutomonuments__content">
            {/* <div className="elAutomonuments__text">Automonument</div> */}
            <div className="elAutomonuments__close-btn"></div>
            </div>
            {/* <div className="elAutomonuments__index">
            <div className="elAutomonuments__index-back">Automonument</div>
            <div className="elAutomonuments__index-front">
            <div className="elAutomonuments__index-overlay" data-index="Automonuments03">Automonument</div>
            </div>
            </div> */}
          </div>
          <div className="elAutomonuments">
            <div className="elAutomonuments__overflow">
            <div className="elAutomonuments__inner">
            <div className="elAutomonuments__bg">
            <img src={Automonuments04} alt="Automonuments04"/>
            </div>
            <div className="elAutomonuments__preview-contAutomonument">
            <h2 className="elAutomonuments__heading"></h2>
            </div>
            
            <div  id="moreAutomonuments" className="elAutomonuments__text">
            </div>
            </div>
            </div>
            <div className="elAutomonuments__content">
            {/* <div className="elAutomonuments__text">Automonument</div> */}
            <div className="elAutomonuments__close-btn"></div>
            </div>
            {/* <div className="elAutomonuments__index">
            <div className="elAutomonuments__index-back">Automonument</div>
            <div className="elAutomonuments__index-front">
            <div className="elAutomonuments__index-overlay" data-index="Automonuments04">Automonument</div>
            </div>
            </div> */}
          </div>
          <div className="elAutomonuments">
            <div className="elAutomonuments__overflow">
            <div className="elAutomonuments__inner">
            <div className="elAutomonuments__bg">
            <img src={Automonuments05} alt="Automonuments05"/>
            </div>
            <div className="elAutomonuments__preview-contAutomonument">
            <h2 className="elAutomonuments__heading"></h2>
            </div>
            
            <div  id="moreAutomonuments" className="elAutomonuments__text">
            </div>
            </div>
            </div>
            <div className="elAutomonuments__content">
            {/* <div className="elAutomonuments__text">Automonument</div> */}
            <div className="elAutomonuments__close-btn"></div>
            </div>
            {/* <div className="elAutomonuments__index">
            <div className="elAutomonuments__index-back">Automonument</div>
            <div className="elAutomonuments__index-front">
            <div className="elAutomonuments__index-overlay" data-index="Automonuments05">Automonument</div>
            </div>
            </div> */}
          </div>
          {/* <div className="elAutomonuments">
            <div className="elAutomonuments__overflow">
            <div className="elAutomonuments__inner">
            <div className="elAutomonuments__bg">
            <img src={Automonuments06} alt="Automonuments06"/>
            </div>
            <div className="elAutomonuments__preview-contAutomonument">
            <h2 className="elAutomonuments__heading"></h2>
            </div>
            <div className="elAutomonuments__content">
            <div className="elAutomonuments__text">Automonument</div>
            <div className="elAutomonuments__close-btn"></div>
            </div>
            <div  id="moreAutomonuments" className="elAutomonuments__text">
            </div>
            </div>
            </div>
            <div className="elAutomonuments__index">
            <div className="elAutomonuments__index-back">Automonument</div>
            <div className="elAutomonuments__index-front">
            <div className="elAutomonuments__index-overlay" data-index="Automonument06">Automonument</div>
            </div>
            </div>
          </div> */}
          {/* <div className="elAutomonuments">
            <div className="elAutomonuments__overflow">
            <div className="elAutomonuments__inner">
            <div className="elAutomonuments__bg">
            <img src={Automonuments08} alt="Automonuments08"/>
            </div>
            <div className="elAutomonuments__preview-contAutomonument">
            <h2 className="elAutomonuments__heading"></h2>
            </div>
            <div className="elAutomonuments__content">
            <div className="elAutomonuments__text">Automonument</div>
            <div className="elAutomonuments__close-btn"></div>
            </div>
            <div  id="moreAutomonuments" className="elAutomonuments__text">
            </div>
            </div>
            </div>
            <div className="elAutomonuments__index">
            <div className="elAutomonuments__index-back">Automonument</div>
            <div className="elAutomonuments__index-front">
            <div className="elAutomonuments__index-overlay" data-index="Automonuments08">Automonument</div>
            </div>
            </div>
          </div> */}
          {/* <div className="elAutomonuments">
            <div className="elAutomonuments__overflow">
            <div className="elAutomonuments__inner">
            <div className="elAutomonuments__bg">
            <img src={Automonuments09} alt="Automonuments09"/>
            </div>
            <div className="elAutomonuments__preview-contAutomonument">
            <h2 className="elAutomonuments__heading"></h2>
            </div>
            <div className="elAutomonuments__content">
            <div className="elAutomonuments__text">Automonument</div>
            <div className="elAutomonuments__close-btn"></div>
            </div>
            <div  id="moreAutomonuments" className="elAutomonuments__text">
            </div>
            </div>
            </div>
            <div className="elAutomonuments__index">
            <div className="elAutomonuments__index-back">Automonument</div>
            <div className="elAutomonuments__index-front">
            <div className="elAutomonuments__index-overlay" data-index="Automonuments09">Automonument</div>
            </div>
            </div>
          </div> */}
          {/* <div className="elAutomonuments">
            <div className="elAutomonuments__overflow">
            <div className="elAutomonuments__inner">
            <div className="elAutomonuments__bg">
            <img src={Automonuments13} alt="Automonuments13"/>
            </div>
            <div className="elAutomonuments__preview-contAutomonument">
            <h2 className="elAutomonuments__heading"></h2>
            </div>
            <div className="elAutomonuments__content">
            <div className="elAutomonuments__text">Automonument</div>
            <div className="elAutomonuments__close-btn"></div>
            </div>
            <div  id="moreAutomonuments" className="elAutomonuments__text">
            </div>
            </div>
            </div>
            <div className="elAutomonuments__index">
            <div className="elAutomonuments__index-back">Automonument</div>
            <div className="elAutomonuments__index-front">
            <div className="elAutomonuments__index-overlay" data-index="Automonuments13">Automonument</div>
            </div>
            </div>
            </div> */}
          </div>
      <div className="contAutomonument__inner">
         
          <div className="elAutomonuments">
            <div className="elAutomonuments__overflow">
            <div className="elAutomonuments__inner">
            <div className="elAutomonuments__bg">
            <img src={Automonuments06} alt="Automonuments06"/>
            </div>
            <div className="elAutomonuments__preview-contAutomonument">
            <h2 className="elAutomonuments__heading"></h2>
            </div>
           
            <div  id="moreAutomonuments" className="elAutomonuments__text">
            </div>
            </div>
            </div>
            <div className="elAutomonuments__content">
            {/* <div className="elAutomonuments__text">Automonument</div> */}
            <div className="elAutomonuments__close-btn"></div>
            </div>
            {/* <div className="elAutomonuments__index">
            <div className="elAutomonuments__index-back">Automonument</div>
            <div className="elAutomonuments__index-front">
            <div className="elAutomonuments__index-overlay" data-index="Automonuments06">Automonument</div>
            </div>
            </div> */}
          </div>
          <div className="elAutomonuments">
            <div className="elAutomonuments__overflow">
            <div className="elAutomonuments__inner">
            <div className="elAutomonuments__bg">
            <img src={Automonuments08} alt="Automonuments08"/>
            </div>
            <div className="elAutomonuments__preview-contAutomonument">
            <h2 className="elAutomonuments__heading"></h2>
            </div>
            
            <div  id="moreAutomonuments" className="elAutomonuments__text">
            </div>
            </div>
            </div>
            <div className="elAutomonuments__content">
            {/* <div className="elAutomonuments__text">Automonument</div> */}
            <div className="elAutomonuments__close-btn"></div>
            </div>
            {/* <div className="elAutomonuments__index">
            <div className="elAutomonuments__index-back">Automonument</div>
            <div className="elAutomonuments__index-front">
            <div className="elAutomonuments__index-overlay" data-index="Automonuments08">Automonument</div>
            </div>
            </div> */}
          </div>
          <div className="elAutomonuments">
            <div className="elAutomonuments__overflow">
            <div className="elAutomonuments__inner">
            <div className="elAutomonuments__bg">
            <img src={Automonuments09} alt="Automonuments09"/>
            </div>
            <div className="elAutomonuments__preview-contAutomonument">
            <h2 className="elAutomonuments__heading"></h2>
            </div>
            
            <div  id="moreAutomonuments" className="elAutomonuments__text">
            </div>
            </div>
            </div>
            <div className="elAutomonuments__content">
            {/* <div className="elAutomonuments__text">Automonument</div> */}
            <div className="elAutomonuments__close-btn"></div>
            </div>
            {/* <div className="elAutomonuments__index">
            <div className="elAutomonuments__index-back">Automonument</div>
            <div className="elAutomonuments__index-front">
            <div className="elAutomonuments__index-overlay" data-index="Automonuments09">Automonument</div>
            </div>
            </div> */}
          </div>
          <div className="elAutomonuments">
            <div className="elAutomonuments__overflow">
            <div className="elAutomonuments__inner">
            <div className="elAutomonuments__bg">
            <img src={Automonuments13} alt="Automonuments13"/>
            </div>
            <div className="elAutomonuments__preview-contAutomonument">
            <h2 className="elAutomonuments__heading"></h2>
            </div>
           
            <div  id="moreAutomonuments" className="elAutomonuments__text">
            </div>
            </div>
            </div>
            <div className="elAutomonuments__content">
            {/* <div className="elAutomonuments__text">Automonument</div> */}
            <div className="elAutomonuments__close-btn"></div>
            </div>
            {/* <div className="elAutomonuments__index">
            <div className="elAutomonuments__index-back">Automonument</div>
            <div className="elAutomonuments__index-front">
            <div className="elAutomonuments__index-overlay" data-index="Automonuments13">Automonument</div>
            </div>
            </div> */}
          </div>

      </div>
      </Carousel>

</div>

   </div>  

  )

  export default lifecycle(Automonumentsmethods)(AutomonumentsPage);
