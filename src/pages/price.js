import React from 'react';
// import './Price.module.css';
import styles from './Price.module.css';

import { useNavigate } from 'react-router-dom';


const Price = () => {
    return (
        
            
              
                
        <div className={styles.contaner}>
    <h1>Pricing</h1>

    <div className={styles.cardcontainer}>
        <div className={styles.card}>
          <img src="https://via.placeholder.com/150" alt="Card Image 1"/>
          <h2>Starter</h2>
          <p>This is a description for card 1. It's brief but informative.</p>
          <button>Free</button>
        </div>
        <div className={styles.card}>
          <img src="https://via.placeholder.com/150" alt="Card Image 2"/>
          <h2>Premium</h2>
          <p>This is a description for card 2. It's brief but informative.</p>
          <button>$10</button>
        </div>
        <div className={styles.card}>
          <img src="https://via.placeholder.com/150" alt="Card Image 3"/>
          <h2>Pro</h2>
          <p>This is a description for card 3. It's brief but informative.</p>
          <button>$50</button>
        </div>
      </div>

    </div>

        
    );
}

export default Price;
