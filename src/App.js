import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Services from './Pages/Services';
import Doctors from './Pages/Doctors';
import Contact from './Pages/Contact';
import NavBar2 from './Components/NavBar2';
import BookAppointment from './Pages/BookAppointment';
import Legal from './Pages/Legal';

function App() {
  return (
    <div>
      <NavBar2 />
      <Routes>
         <Route path='/' element={<Home/>}></Route >
        <Route path='/services' element={<Services />}></Route>
        <Route path='/doctors' element={<Doctors />}></Route>
        <Route path='/contact' element={<Contact />}></Route> 
        <Route path='/bookappointment' element={<BookAppointment />}></Route> 
        <Route path='/legal' element={<Legal />}></Route> 
      </Routes>
    </div>
  );
}
export default App;
