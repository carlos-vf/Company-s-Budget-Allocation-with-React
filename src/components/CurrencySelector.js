import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelector = () => {
    const { expenses, budget } = useContext(AppContext);
    
    return (
      <div class="currency-container">
      Currency {
      <select class="currency-select" name="Currency" id="Currency" onChange="event => changeCurrency(event.target.value)">
          <option value="$">$ Dollar</option>
          <option value="£" selected>£ Pound</option>
          <option value="€">€ Euro</option>
          <option value="₹">₹ Ruppee</option>
      </select>
      }
      </div>
    );
};

export default CurrencySelector;