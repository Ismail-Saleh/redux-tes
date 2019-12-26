import React from 'react';
import './App.css';
import Modal from './components/modal';
// import Home from './components/home';
import Login from './components/login';
import Top from './components/navbar/navbarfix';
import Home from './components/home/home'
// import Tes from './components/artdetail'
import Zero from './components/home/onezero'
import Nude from './components/artdetail';
import Comments from './components/comment';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';



function App() {
  return (
    <div>
    <Router>
        
           <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/onezero" component={Zero} />
                <Route exact path="/nude" component={Nude} />
                <Route exact path="/comments" component={Comments} />
           </Switch>   
        
    </Router>
        </div>   
  );
}

export default App;
