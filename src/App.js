import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import Footer from './Components/Footer'
import Navbar1 from './Components/Navbar1'
import Login from './Components/Login'
import Register from './Components/Register'
import {DataProvider} from './Components/DataProvider'

import Detail from './Components/Detail'
import Home from './Components/Home'
import ManWatch from './Components/ManWatch'
import WomenWatch from './Components/WomenWatch'
import Cart from './Components/Cart'
import Search from './Components/Search'
import SearchProducts from './Components/SearchProducts'
function App() {
  return (
        <DataProvider>
            <div className="App">
              <BrowserRouter>
                <Navbar1/> 
                <Search/>   
                <Switch>
                    <Route path='/' exact component={Home}></Route>
                    <Route path='/search/:find' component={SearchProducts}></Route>
                    <Route path='/manWatch' component={ManWatch}></Route>
                    <Route path='/womenWatch' component={WomenWatch}></Route>
                    <Route path="/login" component={Login}></Route>
                    <Route path="/register" component={Register}></Route>
                    <Route path="/product/:id" component={Detail}></Route>
                    <Route path="/cart" component={Cart}></Route>
                </Switch>
                <Footer></Footer>
              </BrowserRouter>   
            </div>
        </DataProvider>
    
  );
}

export default App;
