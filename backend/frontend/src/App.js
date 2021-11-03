import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import { HashRouter as Router,Route } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';




function App() {
  return (
    <Router>
      <Header/>
      <main className="py-3">
        <Container>
          <Route component={HomeScreen} exact path='/' />
          <Route component={LoginScreen} path='/login' />  
          <Route component={RegisterScreen} path='/register' />
          <Route component={ProfileScreen} path='/profile' />             
          <Route component={ShippingScreen} path='/shipping' />
          <Route component={PlaceOrderScreen} path='/placeorder' />
          <Route component={OrderScreen} path='/order/:id' />
          <Route component={PaymentScreen} path='/payment' />
          <Route component={ProductScreen} path='/product/:id' />
          <Route component={CartScreen} path='/cart/:id?' />
          <Route component={UserListScreen} path='/admin/userlist' />
          <Route component={UserEditScreen} path='/admin/user/:id/edit' />
          <Route component={ProductListScreen} path='/admin/productlist' />
          <Route component={ProductEditScreen} path='/admin/product/:id/edit' />
          <Route component={OrderListScreen} path='/admin/orderlist' />

        </Container>
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
