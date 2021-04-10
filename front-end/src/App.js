import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Characters from './pages/Characters';
import Comics from './pages/Comics';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={Login} />
      <Route path='/characters' component={Characters} />
      <Route path='/comics' component={Comics} />
    </Switch>
  );
}

export default App;
