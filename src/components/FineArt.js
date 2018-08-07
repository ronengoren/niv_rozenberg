import React, { Component } from 'react';
import './FineArt.css';
import untitled8 from '../assets/Works/Ashokan/untitled8.jpg'
import { Modal, ModalBody, ModalFooter } from 'reactstrap';



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
         
  {/* <div className="hero">
  
    <p className="logo">Bill Murray</p>
   
  </div> */}
  <section id="content" className="container"> 
  <div id="mediaContent" className="media">
  <img  onClick={this.toggle} id="fineArtImage1"  src={untitled8} alt="placeholder"/>      
  <div  id="mediaBody" className="media-body">
  <h5 id="fineArtTitle1" className="mt-0">Ashokan</h5>
  <p id="fineArtText1" className="text-justify">Cras sit amet nibh libero, in gravide um in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</p>
       

        <div className="container">
        <Modal  id="modal" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalBody id="modalBody">
          <img id="fineArtImage1Modal" className="img-fluid" src={untitled8} alt="ResponsiveImage"/>          </ModalBody>
          <ModalFooter>
          <h1> Ashokan </h1>
          </ModalFooter>
        </Modal>
        </div>
     
        </div>
</div>



  </section>

          </div>
      )
  }
}

export default FineArt;
