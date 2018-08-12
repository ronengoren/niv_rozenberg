import React from 'react';
import './App.css';
// import untitled8 from './assets/Works/Ashokan/untitled8.jpg'
// import NR_Boswijck_01 from './assets/Works/Boswijck/NR_Boswijck_01.jpg'
// import Automonuments09 from './assets/Works/Automonuments/Automonuments09.jpg'
// import C8B0135_Zabutinsky from './assets/Works/TLV/C8B0135_Zabutinsky.jpg'
// import FineArt from './components/FineArt'
// import Commercial from './components/Commercial'
// import AutomonumentsPage from './components/Pages/FineArtPages/AutomonumentsPage'
import HomePage from './components/Pages/HomePage'
import FineArtMain from './components/Pages/FineArtPages/FineArtMain'
// import untitled1 from './assets/Works/Ashokan/untitled1.jpg'
// import AshokanCarousels from './components/Carousels/AshokanCarousels'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'




// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// )
// const About = () => (
//   <div>
//     <h2>About</h2>
//   </div>
// )

// const Topic = ({ match }) => (
//   <div>
//     <h3>{match.params.topicId}</h3>
//   </div>
// )

// const Topics = ({ match }) => (
//   <div>
//     <h2>Topics</h2>
//     <ul>
//       <li>
//         <Link to={`${match.url}/rendering`}>
//           Rendering with React
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/components`}>
//           Components
//         </Link>
//       </li>
//       <li>
//         <Link to={`${match.url}/props-v-state`}>
//           Props v. State
//         </Link>
//       </li>
//     </ul>

//     <Route path={`${match.path}/:topicId`} component={Topic}/>
//     <Route exact path={match.path} render={() => (
//       <h3>Please select a topic.</h3>
//     )}/>
//   </div>
// )

const App = () => (
  <Router>
    <div>

      <div className="Navbar">

      <h1  className="text-center"><Link to={"/"} id="nivRozenberg">NIV.ROZENBERG</Link></h1>
      <p id="photographer" className="text-center">PHOTOGRAPHER</p>

      {/* <li><Link to="/">Home</Link></li> */}
        {/* <li><Link to="/Automonuments">Automonuments</Link></li> */}
        {/* <li><Link to="/FineArt">Fine Art</Link></li> */}

</div>


      <hr/>

      <Route exact path="/" component={HomePage}/>
      <Route path="/FineArt" component={FineArtMain}/>

      {/* <Route path="/Automonuments" component={AutomonumentsPage}/> */}
      {/* <Route path="/topics" component={Topics}/> */}
      <h1  className="text-left"><Link to={"/FineArt"} id="FineArtLink">FINE ART</Link></h1>

    </div>
  </Router>
)





export default App;
