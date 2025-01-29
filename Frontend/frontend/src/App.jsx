import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import Login from './components/authorization/login.jsx';
import Signup from './components/authorization/signup.jsx';
import ProductEntryPage from './Pages/ProductEntryPage.jsx';
import UpdateForm from './Pages/UpdateForm.jsx';
import Navbar from './components/NavBar/NavBar.jsx';
import SinglePageProduct from './Pages/SingleProductPage.jsx';
import CartPage from './Pages/CartPage.jsx';
import ProfilePage from './Pages/Profile.jsx';
import AddressCard from './components/AddressComp/AddressCard.jsx';
import SelectAddres from './Pages/SelectAddressPage.jsx';
import OrderConfirmation from './Pages/OrdersConfirmationPage.jsx';



function App() {
  return (
    <div>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product-entry-page" element={<ProductEntryPage />} />
      <Route path="/update-form/:id" element={<UpdateForm />}/>
      <Route path="/product-details/:id" element={<SinglePageProduct />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/add-address" element={<AddressCard />} />
      <Route path="/select-address" element={<SelectAddres />} /> 
      <Route path="/order-confirmation" element={<OrderConfirmation />} />

    </Routes>
    </div>
  );
  
}

export default App;

