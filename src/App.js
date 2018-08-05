import React, { Component } from 'react';
import './App.css';
import untitled8 from './assets/Works/Ashokan/untitled8.jpg'
import NR_Boswijck_01 from './assets/Works/Boswijck/NR_Boswijck_01.jpg'
import Automonuments09 from './assets/Works/Automonuments/Automonuments09.jpg'
import C8B0135_Zabutinsky from './assets/Works/TLV/C8B0135_Zabutinsky.jpg'
import $ from "jquery";
import {TweenMax, Power3} from "gsap/all";

var $colorOverlay = $('.color-overlay');
var $whiteOverlay = $('.white-overlay');
var isAnimated = false;


class App extends Component {
  
  constructor(props) {
    
    super(props);
    this.state = {
      isAnimated: false,
      $colorOverlay: $('.color-overlay'),
      $whiteOverlay: $('.white-overlay'),
      
    };
  }

showImage() {
    if (isAnimated) {
        TweenMax.killAll();
        $whiteOverlay[0].style.transformOrigin = "left 50% 0px";
        isAnimated = false;
    } else {
        isAnimated = true;
    }
    
    TweenMax.to($whiteOverlay, 1, 
        {scaleX: 0, ease:Power3.easeInOut}
    );
    TweenMax.fromTo($colorOverlay, 1, 
        {scaleX: 1},
        {scaleX: 0, ease:Power3.easeInOut, delay: 0.2, onComplete: function() {
            $whiteOverlay[0].style.transformOrigin = "left 50% 0px";
            isAnimated = false;
        }}
    );
}

hideImage() {
    if (isAnimated) {
        TweenMax.killAll();
        isAnimated = false;
        $whiteOverlay[0].style.transformOrigin = "right";
    } else {
       isAnimated = true;
    }

    TweenMax.to($whiteOverlay, 0.5, {
        scaleX: 1, 
        ease:Power3.easeInOut,
        onComplete: function() {
            $whiteOverlay[0].style.transformOrigin = "right";
            isAnimated = false;
        }
    });
}





  render() {

   
  
    return (
      
      <div className="App">
      <div className="container">

<div className="Navbar">
<p className="text-center">NIV.ROZENBERG</p>
</div>
      </div>
     
      <div id="columnGrid" className="container-fluid text-center">
  <div id="homeColumns" className="row  ">
    <div id="fineArtMain">
     <h1 id="fineArtsub" className="mx-auto">FINE ART</h1>
     <h1 id="fineArtHover" className="mx-auto">FINE ART HOVER</h1>

    </div>
    <div className="col">
    <h1 className="mx-auto">+</h1>
    </div>
    <div id="commercialMain" className="col">
    <h1 id="commercialSub" className="mx-auto">COMMERCIAL</h1>
    </div>
  </div>
  </div>
  <div className="thumbGrid">
  <figure className="snip1572">
  <img src={untitled8} alt="Ashokan" />
  <figcaption>
    <h3>Ashokan</h3>
  </figcaption>
  <a href="/"> </a>
</figure>
<figure className="snip1572">
  <img src={Automonuments09} alt="Automonuments" />
  <figcaption>
    <h3>Automonuments</h3>
  </figcaption>
  <a href="/"> </a>
</figure>
<figure className="snip1572">
  <img src={NR_Boswijck_01} alt="Boswijck" />
  <figcaption>
    <h3>Boswijck</h3>
  </figcaption>
  <a href="/"> </a>
</figure>
<figure className="snip1572">
  <img src={C8B0135_Zabutinsky} alt="Dense" />
  <figcaption>
    <h3>TLV</h3>
  </figcaption>
  <a href="/"> </a>
</figure>
<div id="shortBio" className="container">
<p className="text-center">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.</p>
</div>
<div id="showRoom" className="container">
<figure className="snip1532">
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample40.jpg" alt="sq-sample40" />
  <figcaption>
    <h3>Product Marketing</h3>
  </figcaption><i className="ion-plus-round"></i>
  <a href="/"> </a>
</figure>
<figure className="snip1532">
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample40.jpg" alt="sq-sample40" />
  <figcaption>
    <h3>Product Marketing</h3>
  </figcaption><i className="ion-plus-round"></i>
  <a href="/"> </a>
</figure>
<figure className="snip1532">
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample40.jpg" alt="sq-sample40" />
  <figcaption>
    <h3>Product Marketing</h3>
  </figcaption><i className="ion-plus-round"></i>
  <a href="/"> </a>
</figure>
<figure className="snip1532">
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample40.jpg" alt="sq-sample40" />
  <figcaption>
    <h3>Product Marketing</h3>
  </figcaption><i className="ion-plus-round"></i>
  <a href="/"> </a>
</figure>
<figure className="snip1532">
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample40.jpg" alt="sq-sample40" />
  <figcaption>
    <h3>Product Marketing</h3>
  </figcaption><i className="ion-plus-round"></i>
  <a href="/"> </a>
</figure>
<figure className="snip1532">
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sq-sample40.jpg" alt="sq-sample40" />
  <figcaption>
    <h3>Product Marketing</h3>
  </figcaption><i className="ion-plus-round"></i>
  <a href="/home"> </a>
</figure>


</div>
</div>
</div>
    );
  }
}

export default App;
