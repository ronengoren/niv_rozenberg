import React, { Component } from 'react';
import './FineArt.css';
import untitled24 from '../assets/Works/Ashokan/untitled24.jpg'
import Automonuments08 from '../assets/Works/Automonuments/Automonuments08.jpg'

// import NR_Boswijck_01 from '../assets/Works/Boswijck/NR_Boswijck_01.jpg'
// import C8B0135_Zabutinsky from '../assets/Works/TLV/C8B0135_Zabutinsky.jpg'
// import untitled8 from '../assets/Works/Ashokan/untitled8.jpg'




class FineArt extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  render() {
      return(
          <div id="fineArtMaincontainer" className="container">
  <section id="content" className="container"> 
  <div id="mediaContent" className="media">
  <img  onClick={this.toggle} id="fineArtImage1" src={untitled24} alt="untitled24" className="align-self-start mr-3"/>      
  <div  id="mediaBody" className="media-body">
  <h5 id="fineArtTitle1" className="mt-0">Ashokan</h5>
  <p id="fineArtText1" className="text-justify">Cras sit amet nibh libero, in gravide um in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
       

        </div>
</div>
  </section>

  <section id="content2" className="container"> 
  <div id="mediaContent2" className="media">
  <div  id="mediaBody2" className="media-body">
  <h5 id="fineArtTitle2" className="mt-0">Automonuments</h5>
  <p id="fineArtText2" className="text-justify">Cras sit amet nibh libero, in gravide um in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
        </div>
        <img  onClick={this.toggle} id="fineArtImage2"  src={Automonuments08} alt="Automonuments08"/>      

</div>



  </section>
  
          </div>
      )
  }
}

export default FineArt;
