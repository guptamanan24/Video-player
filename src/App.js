
import { BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from "./Components/Home";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Videos from "./Components/Videos";
import Upload from "./Components/Upload";
import Signup from "./Components/Signup";
import Login from "./Components/Login";

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route  path='/' element= {<Home/>}/>
        <Route  path='/videos' element= {<Videos/>}/>
        <Route  path='/upload' element= {<Upload/>}/>
        <Route  path='/login' element= {<Login/>}/>
        <Route  path='/signup' element= {<Signup/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
