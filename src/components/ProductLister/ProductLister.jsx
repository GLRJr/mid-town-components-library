import React from 'react';
import './ProductLister.css';
import { ProductDescriptionComponent } from '../ProductDescriptionComponent';

// interface PropTypes {
//   type: string;
// }

 export function ProductListerComponent( { type } ) {

    return (
      <div className="container">
          <div className="Listing-Style">
          <img src={type} className="App-logo" alt="logo" />
          </div>
          <div className="descriptionBox">
            <ProductDescriptionComponent />
          </div>
    
          
    
         
        </div>
      );
    }
    
    export default ProductListerComponent;