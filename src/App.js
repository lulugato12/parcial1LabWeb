import './App.css';
import {
  BrowserRouter as Router, 
  Routes,
  Route
} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import Layout from './layout/Layout'
import Home from './components/pages/Home'
import LogIn from './components/pages/LogIn'
import SignUp from './components/pages/SignUp'

function App() {
  return (
    <div className="body-wrap" id="root">
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
