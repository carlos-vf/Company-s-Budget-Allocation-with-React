import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);
    const changeCurrency = (val)=>{
      dispatch({
          type: 'CHG_CURRENCY',
          payload: val,
      })
  }

    return (
      <div class="currency-container">
      Currency {
      <select class="currency-select" name="Currency" id="Currency" onChange={event=>changeCurrency(event.target.value)}>
          <option value="$">$ Dollar</option>
          <option value="£">£ Pound</option>
          <option value="€" selected>€ Euro</option>
          <option value="₹">₹ Ruppee</option>
      </select>
      }
      </div>
    );
};

export default Currency;