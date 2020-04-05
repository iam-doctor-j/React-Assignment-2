import React from 'react';

export default class Product extends React.Component {
    render() {
        return(
            <tr>
                <td>
                    { this.props.item.id }
                </td>
                <td>
                    { this.props.item.productName }
                </td>
                <td>
                    { this.props.item.Quantity }
                </td>
                <td>
                    Rs. { this.props.item.Price }
                </td>
            </tr>
        );
    }
}