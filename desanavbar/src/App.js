import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBarCodercio from './Components/NavBar.js'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
return(
  <div className="App">
   <BrowserRouter>
   <Routes>
    <Route path = '/' element={<NavBarCodercio/> }>

    </Route>
   </Routes>
   </BrowserRouter>
  </div>
);
}

export default App;
