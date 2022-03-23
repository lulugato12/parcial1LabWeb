import React from 'react'
import {
  BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom'

import Layout from './layout/Layout'
import Home from './components/pages/Home'
import LogIn from './components/pages/LogIn'
import SignUp from './components/pages/SignUp'

import './App.css';

function App() {
  return (
    <div className="body-wrap">
      <Router>
        <Layout>
          <Routes>
            <Route path={'/LogIn'} component={LogIn}></Route>
            <Route path={'/SignUp'} component={SignUp}></Route>
            <Route path={'/'} component={Home}></Route>
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
