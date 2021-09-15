import React from 'react'
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Product from './Product';
import Contact from './Contact';
//import Accordion from './Accordion'
function App() {
  return (
<ScopedCssBaseline>
  <div className="App">
   <Router>
    <Switch>
      <Route exact path="/">
        <Header/>
        <Home/>
        
      </Route>
      <Route exact path="/product">
        <Header/>
        <Product/>
      </Route>
      <Route exact path="/contact">
        <Header/>
        <Contact/>
      </Route>
    </Switch>
    <Footer/>
   </Router>

    </div>
      
    </ScopedCssBaseline> 
  );
}

export default App;
