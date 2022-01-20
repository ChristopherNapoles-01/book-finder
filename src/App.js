import './App.css';
import Home from './Components/Home';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import BookDetails from './Components/BookDetails';
import Header from './Components/partials/header';
import Footer from './Components/partials/footer';
import AboutUs from './Components/Aboutus';


function App() {
 return (
   <Router>
      <div>
         <Header/>
         <Routes>
            <Route exact path='/book-finder' element={<Home/>}/>
            <Route exact path='/book/:id' element={<BookDetails/>}/>
            <Route exact path='/AboutUs' element={<AboutUs/>}/>
         </Routes>
         <Footer/>
     </div>
    </Router>
 )
}

export default App;
