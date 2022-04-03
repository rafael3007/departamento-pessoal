import Header from "./components/Header/Header";
import { BrowserRouter,Switch, Route} from "react-router-dom"

import AddEdit from './pages/AddEdit';
import Home from './pages/Home';
import Remove from './pages/Remove';


import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function App() {


    
  return (
    <BrowserRouter>
      <div className="App">
      <Header/>
      <ToastContainer position="top-center"/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route  path='/add' component={AddEdit} />
        <Route  path='/remove/:id' component={Remove} />
        <Route  path='/update/:id' component={AddEdit} />
      </Switch>
          
      </div>
    </BrowserRouter>
  );
}
//


export default App;
