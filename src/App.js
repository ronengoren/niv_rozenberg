import React, { Component } from 'react';
import './App.css';
import untitled8 from './assets/Works/Ashokan/untitled8.jpg'
import NR_Boswijck_01 from './assets/Works/Boswijck/NR_Boswijck_01.jpg'
import Automonuments09 from './assets/Works/Automonuments/Automonuments09.jpg'
import C8B0135_Zabutinsky from './assets/Works/TLV/C8B0135_Zabutinsky.jpg'



class App extends Component {
  render() {
    return (
      
      <div className="App">
      <div className="container">

<div className="Navbar">
<p className="text-center">NIV.ROZENBERG</p>
</div>
      </div>
     
      <div id="columnGrid" className="container ">
  <div id="homeColumns" className="row ">
    <div id="HoverMain" className="col-12 ">
    <div id="fineArtMain" className="mx-auto">
     <h1 id="fineArtsub"  className="text-center">FINE ART</h1>
     <span id="fineArtHover" className="text-center">hover box</span>

     {/* <h1 id="commercialSubFineArt" className="mx-auto">COMMERCIAL SubFineArt</h1> */}
     </div>

    {/* </div> */}
    {/* <div id="addSign" className="col-{breakpoint}-auto"> */}
    <h1 className="text-center" id="addSign">+</h1>
    {/* </div> */}
    <div id="commercialMain" className="mx-auto">

    <h1 id="commercialSub" className="text-center">COMMERCIAL</h1>
    {/* <h1 id="commercialHover" className="mx-auto">COMMERCIAL HOVER</h1> */}
    <span id="commerciaHover" className="text-center">hover box commercial</span>

</div>

    </div>
  </div>
  </div>
  <div className="container">
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
</div>
<div className="container">
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
</div>
    );
  }
}

export default App;
