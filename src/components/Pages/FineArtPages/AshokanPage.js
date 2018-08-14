import React from 'react';
import untitled15 from '../../../assets/Works/Ashokan/untitled15.jpg'
import './AshokanPage.css'
import lifecycle from 'react-pure-lifecycle';
// import FineArtMain from './FineArtMain'

import {
    BrowserRouter as 
    Router,
    Route,
    // Link
  } from 'react-router-dom'
  import Carousel from "nuka-carousel";



  const Ashokanmethods = {
    componentDidMount() {
      var contAshokan = document.querySelector('.contAshokan') 
      console.log(contAshokan)

      var closeBtnsArr = [].slice.call(document.querySelectorAll('.elAshokan__close-btn'));
      var elsArr = [].slice.call(document.querySelectorAll('.elAshokan'));
      setTimeout(function() {
      contAshokan.classList.remove('s--inactive');
      }, 200);
      elsArr.forEach(function(el) {
      el.addEventListener('click', function() {
      if (this.classList.contains('s--active'))
      return;
      contAshokan.classList.add('s--elAshokan-active');
      this.classList.add('s--active');
  });
  });
      closeBtnsArr.forEach(function(btn) {
      btn.addEventListener('click', function(e) {
      e.stopPropagation();
      contAshokan.classList.remove('s--elAshokan-active');
      document.querySelector('.elAshokan.s--active').classList.remove('s--active');
  });
  });
      //this will works cus it reads DOM element after render() pastes your element in DOM
  
      // this.ed.innerHTML = this.props.text;
    }
  };




const AshokanPage = ({ match }) => (
         <Route exact path={match.path} render={() => (   
            <Carousel >

  <div id="AshokanPage" className="container">
      <div id="contAshokan" className="contAshokan s--inactive" ref={ref => this.contAshokan = ref}>

            <h1>AshokanPage</h1>
            <div className="elAshokan">
      <div className="elAshokan__overflow">
        <div className="elAshokan__inner">
          <div className="elAshokan__bg">
          <img src={untitled15} alt="untitled15"/>
          </div>
          <div className="elAshokan__preview-contAshokan">
            <h2 className="elAshokan__heading"></h2>
          </div>
          <div className="elAshokan__content">
            <div className="elAshokan__text">Automonument</div>
            <div className="elAshokan__close-btn"></div>
            </div>
            <div  id="moreAshokan" className="elAshokan__text">
          </div>
          </div>
          </div>
          <div className="elAshokan__index">
          <div className="elAshokan__index-back">Automonument</div>
          <div className="elAshokan__index-front">
          <div className="elAshokan__index-overlay" data-index="Automonument01">Automonument</div>

          </div>

          </div>
          </div>
          <div className="elAshokan">
      <div className="elAshokan__overflow">
        <div className="elAshokan__inner">
          <div className="elAshokan__bg">
          <img src={untitled15} alt="untitled15"/>
          </div>
          <div className="elAshokan__preview-contAshokan">
            <h2 className="elAshokan__heading"></h2>
          </div>
          <div className="elAshokan__content">
            <div className="elAshokan__text">Automonument</div>
            <div className="elAshokan__close-btn"></div>
            </div>
            <div  id="moreAshokan" className="elAshokan__text">
          </div>
          </div>
          </div>
          <div className="elAshokan__index">
          <div className="elAshokan__index-back">Automonument</div>
          <div className="elAshokan__index-front">
          <div className="elAshokan__index-overlay" data-index="Automonument01">Automonument</div>

          </div>

          </div>
          </div>
        {/* <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5"/>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6"/> */}
         </div>  
         </div> 
         </Carousel>

   )}/>
  )



  export default lifecycle(Ashokanmethods)(AshokanPage);
