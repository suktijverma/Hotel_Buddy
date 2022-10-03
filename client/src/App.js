import React from 'react';
import { Routes, Route , Link, Switch,BrowserRouter} from 'react-router-dom';
import Home from "./pages/home/Home";
import Navbar from './components/navbar/Navbar';
import List from './pages/list/List';
import Hotel from './pages/hotel/Hotel';
import Login from './pages/login/Login';

function App() {
  return(
   <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/hotels" component={List} />
      <Route path="/hotels/:id" component={Hotel}/>
      <Route path="/login" component={Login}/>
    </Switch>
  );
}

export default App;
