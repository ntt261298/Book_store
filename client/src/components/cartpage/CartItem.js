import React, { PropTypes } from 'react';
// import currency from '../helpers/currency.js';

class CartItem extends React.Component {
  render() {
    return (
      <tr>
        <td className="text-center">{this.props.index + 1}</td>
        <td className="text-center">{this.props.item.name}</td>
        <td className="text-center">{this.props.item.count}</td>
        {/* <td className="text-right price">{currency(item.price)}</td>
        <td className="text-right price">{currency(item.amount * item.price)}</td> */}
      </tr>
    );
  }
}


// CartItem.propTypes = {
//   item: PropTypes.array.isRequired,
//   index: PropTypes.number.isRequired
// }

export default CartItem;
