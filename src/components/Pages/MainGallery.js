import React, { Component } from 'react';
import './MainGallery.css';
import untitled15 from '../../assets/Works/Ashokan/untitled15.jpg'
import Artbridge3 from '../../assets/Works/Automonuments/Artbridge3.jpg'
import NR_Boswijck_09 from '../../assets/Works/Boswijck/NR_Boswijck_09.jpg'
import C8B0107_2 from '../../assets/Works/TLV/C8B0107_2.jpg'
import LafayetteAve766_01 from '../../assets/Commercial/1/Brooklyn_Residential/LafayetteAve766_01.jpg'
import C8B1042_s from '../../assets/Commercial/1/Tel_Aviv_Residential/C8B1042_s.jpg'
import NR_03_C8B3023 from '../../assets/Commercial/2/12_Chairs_Cafe/NR_03_C8B3023.jpg'
import NR_C8B3379_s from '../../assets/Commercial/2/Tripple_Crown_Salon/NR_C8B3379_s.jpg'
// import AshokanCarousels from '../Carousels/AshokanCarousels'
// import { Carousel } from "react-responsive-carousel";
// import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
// import AutomonumentsCarousels from '../Carousels/AutomonumentsCarousels'

class MainGallery extends Component {
      componentDidMount() {
        var cont = document.querySelector('.cont') 
        var closeBtnsArr = [].slice.call(document.querySelectorAll('.el__close-btn'));
        var elsArr = [].slice.call(document.querySelectorAll('.el'));
        setTimeout(function() {
        cont.classList.remove('s--inactive');
        }, 200);
        console.log(closeBtnsArr)
        elsArr.forEach(function(el) {
        el.addEventListener('click', function() {
        if (this.classList.contains('s--active'))
        return;
        cont.classList.add('s--el-active');
        this.classList.add('s--active');
    });
  });
        closeBtnsArr.forEach(function(btn) {
        btn.addEventListener('click', function(e) {
        e.stopPropagation();
        cont.classList.remove('s--el-active');
        document.querySelector('.el.s--active').classList.remove('s--active');
    });
  });
        //this will works cus it reads DOM element after render() pastes your element in DOM
    
        // this.ed.innerHTML = this.props.text;
      }
    render() {





        return (
          <div id="MainGallery" className="container">
            <div id="cont" className="cont s--inactive" ref={ref => this.cont = ref}>
  <div className="cont__inner">
    <div className="el">
      <div className="el__overflow">
        <div className="el__inner">
          <div className="el__bg">
          <img src={untitled15} alt="untitled1"/>
          </div>
          <div className="el__preview-cont">
            <h2 className="el__heading">FI</h2>
          </div>
          <div className="el__content">
            <div className="el__text">Ashokan</div>
            <a href="/FineArt" className="btn" id="button" value="More">MORE</a> 
            <div className="el__close-btn"></div>
          </div>
          <div  id="moreAshokan" className="el__text">
           
          </div>
        </div>
      </div>
      <div className="el__index">
        <div className="el__index-back">Ashokan</div>
        <div className="el__index-front">
          <div className="el__index-overlay" data-index="Ashokan">Ashokan</div>
         

        </div>

      </div>

    </div>
    <div className="el">
      <div className="el__overflow">
        <div className="el__inner">
       <div className="el__bg">  
        <img  src={Artbridge3} alt="Artbridge3"/>
        </div>
          <div className="el__preview-cont">
            <h2 className="el__heading">NE</h2>
          </div>
          <div className="el__content">
            <div className="el__text">Automonuments</div>
            <div className="el__close-btn"></div>
          </div>
        </div>
      </div>
      <div className="el__index">
        <div className="el__index-back">Automonuments</div>
        <div className="el__index-front">
          <div className="el__index-overlay" data-index="Automonuments">Automonuments</div>
        </div>
      </div>
    </div>
    <div className="el">
      <div className="el__overflow">
        <div className="el__inner">

        <img className="el__bg" src={NR_Boswijck_09} alt="NR_Boswijck_09"/>
          <div className="el__preview-cont">
            <h2 className="el__heading">AR</h2>
          </div>
          <div className="el__content">
            <div className="el__text">Boswijck</div>
            <div className="el__close-btn"></div>
          </div>
        </div>
      </div>
      <div className="el__index">
        <div className="el__index-back">Boswijck</div>
        <div className="el__index-front">
          <div className="el__index-overlay" data-index="3">Boswijck</div>
        </div>
      </div>
    </div>
    <div className="el">
      <div className="el__overflow">
        <div className="el__inner">
        <img className="el__bg" src={C8B0107_2} alt="C8B0107_2"/>
          <div className="el__preview-cont">
            <h2 className="el__heading">T</h2>
          </div>
          <div className="el__content">
            <div className="el__text">TLV</div>
            <div className="el__close-btn"></div>
          </div>
        </div>
      </div>
      <div className="el__index">
        <div className="el__index-back">TLV</div>
        <div className="el__index-front">
          <div className="el__index-overlay" data-index="TLV">TLV</div>
        </div>
      </div>
    </div>
    {/* <div id="paddingMain"></div> */}
    <div className="el">
      <div className="el__overflow">
        <div className="el__inner">
        <img className="el__bg" src={LafayetteAve766_01} alt="LafayetteAve766_01"/>
          <div className="el__preview-cont">
            <h2 className="el__heading">CO</h2>
          </div>
          <div className="el__content">
            <div className="el__text">Brooklyn Residential</div>
            <div className="el__close-btn"></div>
          </div>
        </div>
      </div>
      <div className="el__index">
        <div className="el__index-back">Brooklyn Residential</div>
        <div className="el__index-front">
          <div className="el__index-overlay" data-index="Brooklyn_Residential">Brooklyn Residential</div>
        </div>
      </div>
    </div>
    <div className="el">
      <div className="el__overflow">
        <div className="el__inner">
        <img className="el__bg" src={C8B1042_s} alt="C8B1042_s"/>
          <div className="el__preview-cont">
            <h2 className="el__heading">MM</h2>
          </div>
          <div className="el__content">
            <div className="el__text">Tel Aviv Residential</div>
            <div className="el__close-btn"></div>
          </div>
        </div>
      </div>
      <div className="el__index">
        <div className="el__index-back">Tel Aviv Residential</div>
        <div className="el__index-front">
          <div className="el__index-overlay" data-index="Tel_Aviv_Residential">Tel Aviv Residential</div>
        </div>
      </div>
    </div>
      <div className="el">
      <div className="el__overflow">
        <div className="el__inner">
        <img className="el__bg" src={NR_03_C8B3023} alt="NR_03_C8B3023"/>
          <div className="el__preview-cont">
            <h2 className="el__heading">ERC</h2>
          </div>
          <div className="el__content">
            <div className="el__text">12 Chairs Cafe</div>
            <div className="el__close-btn"></div>
          </div>
        </div>
      </div>
      <div className="el__index">
        <div className="el__index-back">12 Chairs Cafe</div>
        <div className="el__index-front">
          <div className="el__index-overlay" data-index="12_Chairs_Cafe">12 Chairs Cafe</div>
        </div>
      </div>
    </div>
    <div className="el">
      <div className="el__overflow">
        <div className="el__inner">
        <img className="el__bg" src={NR_C8B3379_s} alt="NR_03_C8B3023"/>
          <div className="el__preview-cont">
            <h2 className="el__heading">IAL</h2>
          </div>
          <div className="el__content">
            <div className="el__text">Tripple Crown Salon</div>
            <div className="el__close-btn"></div>
          </div>
        </div>
      </div>
      <div className="el__index">
        <div className="el__index-back">Tripple Crown Salon</div>
        <div className="el__index-front">
          <div className="el__index-overlay" data-index="Tripple_Crown_Salon">Tripple Crown Salon</div>
        </div>
      </div>
    </div>
  </div>

</div>
</div>


        )
}
}

export default MainGallery