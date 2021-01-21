import './App.css';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/navbar/navbar';
import Fibonachi from './components/fibonachi/fibonachi';
import Toogle from './components/toogle/toogle';

function App() {
  
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <Fibonachi />
            </Route>
            <Route path='/toogle'>
              <Toogle/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
