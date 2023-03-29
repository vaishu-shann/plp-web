import React from "react";
import { BrowserRouter as Router, Switch , Route } from "react-router-dom";
import Footer from "./component/Footer/Footer";
import Navbar from "./component/Navbar/Navbar";
import GlobalStyle from "./globalStyles";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Service from "./pages/Service";


function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Switch >
      <Route path='/' exact component={Home} />
      <Route path='/products'  component={About} />
      <Route path='/services'  component={Service} />
        </Switch >
      <Footer />
    </Router>
  );
}

export default App;
