import React, { Component } from 'react';
import '../FineArt.css';
import untitled24 from '../../assets/Works/Ashokan/untitled24.jpg'
import { Modal, ModalBody, ModalFooter } from 'reactstrap';
// import NR_Boswijck_01 from '../assets/Works/Boswijck/NR_Boswijck_01.jpg'
// import Automonuments08 from '../assets/Works/Automonuments/Automonuments08.jpg'
// import C8B0135_Zabutinsky from '../assets/Works/TLV/C8B0135_Zabutinsky.jpg'
// import untitled8 from '../assets/Works/Ashokan/untitled8.jpg'
import AshokanCarousels from '../Carousels/AshokanCarousels'
// import Automonuments from './Carousels/Automonuments'



class AshokanModal extends Component {
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
        <div className="container">
        <div className="modal-dialog modal-lg">
        <Modal  size="lg" id="modal" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalBody id="modalBody" centered={true}>
          <AshokanCarousels id="modalAshokan"/>
          <img id="fineArtImage1Modal" className="img-fluid" src={untitled24} alt="ResponsiveImage"/>         
           </ModalBody>
          <ModalFooter>
          <h1> Ashokan </h1>
          </ModalFooter>
        </Modal>
        </div>
        </div>
   
      )
  }
}

export default AshokanModal;
