import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/shared/header/Header';
import Footer from './components/shared/Footer/Footer';
import Service from './components/Services/service/Service';
import Services from './components/Services/Services';
import Notfound from './components/404/Notfound';
import Coaches from './components/coaches/Coaches';
import Login from './components/shared/login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
      
      
      
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route  path='/home'>
          <Home></Home>
        </Route>
        <Route path='/services'>
          <Services></Services>
        </Route>
        <Route path ='/coaches'>
          <Coaches></Coaches>
        </Route>
        <Route path='/login'>
          <Login></Login>
        </Route>

        <Route path='*'>
         <Notfound></Notfound>
        </Route>
      </Switch>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
