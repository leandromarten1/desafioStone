import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
// import Home from './pages/Home';
import Characters from './pages/Characters';
import Comics from './pages/Comics';
import CharacterDetails from './pages/CharacterDetails';
import ComicDetails from './pages/ComicDetails';
import Favorites from './components/Favorites/Favorites';

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
      <Route exact path='/comics/:id' component={ComicDetails} />
      <Route exact path='/favorites' component={Favorites} />
    </Switch>
  );
}

export default App;
