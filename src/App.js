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
      <div id="columnGrid" className="container-fluid text-center">
  <div id="homeColumns" className="row  ">
    <div className="col">
     <h1 className="mx-auto">FINE ART</h1>
    </div>
    <div className="col">
    <h1 className="mx-auto">+</h1>
    </div>
    <div className="col">
    <h1 className="mx-auto">COMMERCIAL</h1>
    </div>
  </div>
  <div className="thumbGrid">
  <figure className="snip1572">
  <img src={untitled8} alt="Ashokan" />
  <figcaption>
    <h3>Ashokan</h3>
  </figcaption>
  <a href="/"></a>
</figure>
<figure className="snip1572">
  <img src={Automonuments09} alt="Automonuments" />
  <figcaption>
    <h3>Automonuments</h3>
  </figcaption>
  <a href="/"></a>
</figure>
<figure className="snip1572">
  <img src={NR_Boswijck_01} alt="Boswijck" />
  <figcaption>
    <h3>Boswijck</h3>
  </figcaption>
  <a href="/"></a>
</figure>
<figure className="snip1572">
  <img src={C8B0135_Zabutinsky} alt="Dense" />
  <figcaption>
    <h3>TLV</h3>
  </figcaption>
  <a href="/"></a>
</figure>
</div>
</div>
</div>  
    );
  }
}

export default App;
