import './App.css';
import Home from './Pages/Home/Home/Home';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import NotFound from './Pages/Home/NotFound/NotFound';
import Bookings from './Pages/Bookings/Bookings';
import Header from './Pages/Header/Header';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/Login/Login/PrivateRoute/PrivateRoute';
import AddService from './Pages/AddService/AddService';
import ManageServices from './Pages/ManageServices/ManageServices';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path = '/'>
            <Home></Home>
          </Route>
          <Route path = '/home'>
            <Home></Home>
          </Route>
          <Route path = '/login'>
            <Login></Login>
          </Route>
          <Route path = '/addService'>
            <AddService></AddService>
          </Route>
          <Route path = '/manageServices'>
            <ManageServices></ManageServices>
          </Route>
          <PrivateRoute path = '/booking/:serviceId'>
            <Bookings></Bookings>
          </PrivateRoute>
          <Route path = '*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router> 
      </AuthProvider>
    </div>
  );
}

export default App;
