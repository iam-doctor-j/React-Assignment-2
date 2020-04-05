import React from 'react';
import Product from './Product';

export default class ProductsList extends React.Component {
    
    render() {
        let headings = Object.keys(this.props.data[0]);

        let infoItems = headings.map((item) => {
            return(
                <th>
                    { item === 'id' ? 'ID' : item === 'productName' ? 'Product Name' : item }
                </th>
            );
        });

        let listItems = this.props.data.map((item, i) => {
            return(
                <Product item={ item } />
            );
        });

        console.log(this.props);
        return(
            <table border="1">
                <thead>
                    <tr>
                        { infoItems }
                    </tr>
                </thead>
                <tbody>
                    { listItems }
                </tbody>
            </table>
        );
    }
}