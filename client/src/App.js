import React from 'react';
import "./index.css";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";


import Nav from "./components/Nav";
// import Footer from "./components/Footer";


import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <Router>

      <div>
        <React.Fragment>
          <CssBaseline />
          <Container maxWidth="false">
            <div>
              <Nav />
            </div>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/portfolio" component={Portfolio} />


          
          </Container>
        </React.Fragment>
      </div>

    </Router>
  );
}

export default App;
