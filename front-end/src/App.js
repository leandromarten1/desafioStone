import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
// import Home from './pages/Home';
import Characters from './pages/Characters';
import Comics from './pages/Comics';
import CharacterDetails from './pages/CharacterDetails';

function App() {
  return (
    <Switch>
      <Route exact path='/'>
        <Redirect to='/characters' />
      </Route>
      <Route exact path='/login' component={Login} />
      <Route exact path='/characters' component={Characters} />
      <Route exact path='/characters/:id' component={CharacterDetails} />
      <Route exact path='/comics' component={Comics} />
      {/* <Route path='/comics/:id' component={Comics} /> */}
    </Switch>
  );
}

export default App;
