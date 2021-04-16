import React from 'react';
import styles from "./styles.module.css";
import { ProductDescriptionComponent } from '../ProductDescriptionComponent';

// interface PropTypes {
//   type: string;
// }

export function ProductListerComponent( { type }) {

    return (
      <div className={styles.container}>
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