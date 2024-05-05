import React from 'react';
import Header from './Header/Header';
import BurgerBuilder from './BurgerBuilder/BurgerBuilder';
import { Route, Switch } from 'react-router-dom'; // Import Switch
import Checkout from './Order/Chekout/Checkout';
import Order from './Order/Order';
import Auth from './Auth/Auth';

const Main = props => {
  return (
    <div>
      <Header />
      <div className='container'>
        <Switch> {/* Wrap your routes in Switch */}
          <Route exact path="/" component={BurgerBuilder} /> {/* Use component prop */}
          <Route exact path="/order" component={Order} /> 
          <Route exact path = "/login" component={Auth}/>{/* Use component prop */}
          <Route exact path="/checkout" component={Checkout} /> {/* Use component prop */}
        </Switch>
      </div>
    </div>
  )
}

export default Main;
