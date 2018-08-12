import React from 'react';
import AutomonumentsPage from '../FineArtPages/AutomonumentsPage'
import untitled15 from '../../../assets/Works/Ashokan/untitled15.jpg'
// import Artbridge3 from '../../../assets/Works/Automonuments/Artbridge3.jpg'
// import NR_Boswijck_09 from '../../../assets/Works/Boswijck/NR_Boswijck_09.jpg'
// import C8B0107_2 from '../../../assets/Works/TLV/C8B0107_2.jpg'
// import LafayetteAve766_01 from '../../../assets/Commercial/1/Brooklyn_Residential/LafayetteAve766_01.jpg'
// import C8B1042_s from '../../../assets/Commercial/1/Tel_Aviv_Residential/C8B1042_s.jpg'
// import NR_03_C8B3023 from '../../../assets/Commercial/2/12_Chairs_Cafe/NR_03_C8B3023.jpg'
// import NR_C8B3379_s from '../../../assets/Commercial/2/Tripple_Crown_Salon/NR_C8B3379_s.jpg'
import './FineArtMain.css'
import {
  BrowserRouter as 
  // Router,
  Route,
  // Link
} from 'react-router-dom'
import lifecycle from 'react-pure-lifecycle';


const methods = {
  componentDidMount() {
    var contfineart = document.querySelector('.contfineart') 
    var closeBtnsArr = [].slice.call(document.querySelectorAll('.elfineart__close-btn'));
    var elsArr = [].slice.call(document.querySelectorAll('.elfineart'));
    setTimeout(function() {
    contfineart.classList.remove('s--inactive');
    }, 200);
    console.log(closeBtnsArr)
    elsArr.forEach(function(el) {
    el.addEventListener('click', function() {
    if (this.classList.contains('s--active'))
    return;
    contfineart.classList.add('s--elfineart-active');
    this.classList.add('s--active');
});
});
    closeBtnsArr.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
    e.stopPropagation();
    contfineart.classList.remove('s--elfineart-active');
    document.querySelector('.elfineart.s--active').classList.remove('s--active');
});
});
    //this will works cus it reads DOM element after render() pastes your element in DOM

    // this.ed.innerHTML = this.props.text;
  }
};


const FineArtMain = ({ match }) => (
  
  <div id="FineArtPage" className="container">
  <div id="contfineart" className="contfineart s--inactive" ref={ref => this.contfineart = ref}>
<div className="contfineart__inner">
<div className="elfineart">
<div className="elfineart__overflow">
<div className="elfineart__inner">
<div className="elfineart__bg">
<img src={untitled15} alt="untitled1"/>
</div>
<div className="elfineart__preview-contfineart">
  <h2 className="elfineart__heading">FI</h2>
</div>
<div className="elfineart__content">
  <div className="elfineart__text">Ashokan</div>

  <div className="elfineart__close-btn"></div>
</div>
<div  id="moreAshokan" className="elfineart__text">
 <button className="btn" id="button" value="More">More</button>
</div>

</div>
</div>
<div className="elfineart__index">
<div className="elfineart__index-back"></div>
<div className="elfineart__index-front">
<div className="elfineart__index-overlay" data-index="Ashokan"></div>


</div>

</div>

</div>
{/* <div className="elfineart">
<div className="elfineart__overflow">
<div className="elfineart__inner">
<div className="elfineart__bg">
<img src={Artbridge3} alt="Artbridge3"/>
</div>
<div className="elfineart__preview-contfineart">
  <h2 className="elfineart__heading">NE</h2>
</div>
<div className="elfineart__content">
  <div className="elfineart__text">Automonuments</div>

  <div className="elfineart__close-btn"></div>
</div>
<div  id="moreAshokan" className="elfineart__text">
 <button className="btn" id="button" value="More">More</button>
</div>

</div>
</div>
<div className="elfineart__index">
<div className="elfineart__index-back">Automonuments</div>
<div className="elfineart__index-front">
<div className="elfineart__index-overlay" data-index="Automonuments">Automonuments</div>


</div>

</div>

</div> */}
{/* <div className="el">
<div className="el__overflow">
<div className="el__inner">

<img  className="el__bg" src={Artbridge3} alt="Artbridge3"/>

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
<div className="el__bg">

<img src={NR_Boswijck_09} alt="NR_Boswijck_09"/>
</div>
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
</div> */}
</div>

</div>
           
{/*       
        <Link to={`${match.url}/Automonuments`}>
        Automonuments Page
        </Link> */}
      
      {/* <li>
        <Link to={`${match.url}/components`}>
          Components
        </Link>
      </li>
      <li>
        <Link to={`${match.url}/props-v-state`}>
          Props v. State
        </Link>
      </li> */}
    

    <Route path={`${match.path}/:FineArt`} component={AutomonumentsPage}/>
    <Route exact path={match.path} render={() => (
      <h3>.</h3>
    )}/>
         </div>   
  
  )



  export default lifecycle(methods)(FineArtMain);
