import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom'

import Layout from './layout/Layout'
import Home from './components/pages/Home'

function App() {
  return (
    <div className="body-wrap">
      <Router>
        <Layout>
          <Routes>
            <Route path={'/'} component={Home}></Route>
          </Routes>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
