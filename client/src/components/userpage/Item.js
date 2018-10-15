import React, { PropTypes } from 'react';
import currency from '../../helpers/currency.js';

class Item extends React.Component {
  render() {
    const item = this.props.item;
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
    );
  }
}


export default Item;
