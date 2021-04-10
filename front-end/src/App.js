import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
// import Home from './pages/Home';
import Characters from './pages/Characters';
import Comics from './pages/Comics';
import Details from './pages/Details';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Redirect to='/characters' />
      </Route>
      <Route path='/login' component={Login} />
      <Route path='/characters' component={Characters} />
      <Route path='/details' component={Details} />
      <Route path='/comics' component={Comics} />
      {/* <Route path='/comics/:id' component={Comics} /> */}
    </Switch>
  );
}

export default App;
