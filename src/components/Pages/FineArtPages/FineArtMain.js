import React from 'react';
// import AutomonumentsPage from '../FineArtPages/AutomonumentsPage'
// import untitled15 from '../../../assets/Works/Ashokan/untitled15.jpg'
// import Artbridge3 from '../../../assets/Works/Automonuments/Artbridge3.jpg'
// import NR_Boswijck_09 from '../../../assets/Works/Boswijck/NR_Boswijck_09.jpg'
// import C8B0107_2 from '../../../assets/Works/TLV/C8B0107_2.jpg'
// import LafayetteAve766_01 from '../../../assets/Commercial/1/Brooklyn_Residential/LafayetteAve766_01.jpg'
// import C8B1042_s from '../../../assets/Commercial/1/Tel_Aviv_Residential/C8B1042_s.jpg'
// import NR_03_C8B3023 from '../../../assets/Commercial/2/12_Chairs_Cafe/NR_03_C8B3023.jpg'
// import NR_C8B3379_s from '../../../assets/Commercial/2/Tripple_Crown_Salon/NR_C8B3379_s.jpg'
// import AshokanPage from '../FineArtPages/AshokanPage'
import './FineArtMain.css'
import {
  BrowserRouter as 
  Router,
  Route,
  Link
} from 'react-router-dom'
import AshokanPage from './AshokanPage';
import AutomonumentsPage from './AutomonumentsPage'





const FineArtMain = ({ match }) => (
  <Router>

  <div id="FineArtPage" className="container">




<Route path={`${match.path}/FineArt`} component={FineArtMain} />
    <Route exact path={match.path} render={() => (
      <div>
FineArtMain
<ul>
      <li>
<Link to={"/FineArt/Ashokan"}>Ashokan</Link>
</li>
      <li>
<Link to={`${match.path}/Automonuments`}>Automonuments</Link>
  </li>
    </ul>

      </div>
    )}/>
    
    <Route path="/FineArt/Ashokan" component={AshokanPage}/>
    <Route path="/FineArt/Automonuments" component={AutomonumentsPage}/>

         </div>   
         
         </Router>

  )



  export default FineArtMain;
