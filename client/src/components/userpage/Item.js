import React, { PropTypes } from 'react';
import currency from '../../helpers/currency.js';

class Item extends React.Component {
  render() {
    const item = this.props.item;
<<<<<<< HEAD
    const carts = item.cart;
    return (
      <React.Fragment>
        {
          carts.map((cart, index) => (
            <tr>
              <td className="text-center">{index + 1}</td>
              <td className="text-center">{cart.name}</td>
              <td className="text-center">{item.orderDate}</td>
              <td className="text-center">{cart.count}</td>
              <td className="text-right price">{currency(cart.price)}</td>
              <td className="text-right price">{currency(cart.count * cart.price)}</td>
              <td className="text-right">{item.status}</td>
            </tr>
          ))
        }
      </React.Fragment>
=======
    return (
      <tr>
        <td className="text-center">{this.props.index + 1}</td>
        <td className="text-center">{item.orderBook}</td>
        <td className="text-center">{item.orderDate}</td>
        <td className="text-center">{item.count}</td>
        <td className="text-right price">{currency(item.price)}</td>
        <td className="text-right price">{currency(item.count * item.price)}</td>
        <td className="text-right">{item.status}</td>
      </tr>
>>>>>>> bff872c7537dadff56bfa3f2530985ab65fdffe4
    );
  }
}


export default Item;
