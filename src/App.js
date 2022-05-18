import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header';
import AddEdit from './pages/AddEdit/AddEdit';
import Home from './pages/Home/Home';
import View from './pages/View/View';
import About from './pages/About/About';
import Search from './pages/Search/Search';

function App() {
  return (
    <BrowserRouter>
     <div className="App">
       <Header/>
       <ToastContainer position='top-center'/>
       <Routes>
         <Route exact path="/" element={<Home/>}/>
         <Route path="/add" element={<AddEdit/>}/>
         <Route path="/update/:id" element={<AddEdit/>}/>
         <Route path="/view/:id" element={<View/>}/>
         <Route path="/about" element={<About/>}/>
         <Route path="/search" element={<Search/>}/>
       </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
