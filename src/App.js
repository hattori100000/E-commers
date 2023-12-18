
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginSignup from './Pages/LoginSignup';
import Shop from './Pages/shop';  
import ShopCategory from './Pages/ShopCategory'; // Import ShopCategory
import Product from './Pages/product'; // Adjust the path as per your file structure
import Item from './Components/Item/Item';

function App() {
  return (
    <div className="App">

<BrowserRouter>

     <Navbar />
     <Routes>
<Route path='/' element={<shop/> } />
<Route  path='/mens' element={<ShopCategory  category="men"/>}/>
<Route  path='/womens' element={<ShopCategory   category="women"/>}/>
<Route  path='/kids' element={<ShopCategory   category="kid"/>}/>
<Route path='/product' element={<Product />}>
<Route path=':productId' element={<Product />} />
</Route>
<Route path='/cart' element={<cart/>} />
<Route path='/login' element={<LoginSignup/>} />
     </Routes>
     </BrowserRouter>
     <Shop />
     <Item />
    </div>
  );
}

export default App;
