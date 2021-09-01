import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import SignUp from './components/pages/SignUp';
import Solutions from './components/pages/Solutions.js';
import Chapter1 from './components/6th/Chapter1';
import Chapter2 from './components/6th/Chapter2';
import Chapter3 from './components/6th/Chapter3';
import SevenChapter1 from './components/7th/Chapter7th1';
import SevenChapter2 from './components/7th/Chapter7th2';
import SevenChapter3 from './components/7th/Chapter7th3';
import EightChapter1 from './components/8th/Chapter8th1';
import EightChapter2 from './components/8th/Chapter8th2';
import EightChapter3 from './components/8th/Chapter8th3';
import NineChapter1 from './components/9th/Chapter9th1';
import NineChapter2 from './components/9th/Chapter9th2';
import NineChapter3 from './components/9th/Chapter9th3';
import TenChapter1 from './components/10th/Chapter10th1';
import TenChapter2 from './components/10th/Chapter10th2';
import TenChapter3 from './components/10th/Chapter10th3';


function App() {
  return (
    <>
      <Router basename="/E-Learning">
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/About' component={About} />
          <Route path='/Contact' component={Contact} />
          <Route path='/sign-up' component={SignUp} />
          <Route path='/Solutions' component={Solutions} />
          <Route path='/Chapter1' component={Chapter1} />
          <Route path='/Chapter2' component={Chapter2} />
          <Route path='/Chapter3' component={Chapter3} />
          <Route path='/Chapter7th1' component={SevenChapter1} />
          <Route path='/Chapter7th2' component={SevenChapter2} />
          <Route path='/Chapter7th3' component={SevenChapter3} />
          <Route path='/Chapter8th1' component={EightChapter1} />
          <Route path='/Chapter8th2' component={EightChapter2} />
          <Route path='/Chapter8th3' component={EightChapter3} />
          <Route path='/Chapter9th1' component={NineChapter1} />
          <Route path='/Chapter9th2' component={NineChapter2} />
          <Route path='/Chapter9th3' component={NineChapter3} />
          <Route path='/Chapter10th1' component={TenChapter1} />
          <Route path='/Chapter10th2' component={TenChapter2} />
          <Route path='/Chapter10th3' component={TenChapter3} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
