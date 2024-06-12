import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { IoIosRemoveCircle } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";

const ExpenseItem = (props) => {
    const { dispatch, Currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };
        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });
    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{Currency}{props.cost}</td>
        <td><IoIosAddCircle size='2.2em' color="green" onClick={event=> increaseAllocation(props.name)}></IoIosAddCircle></td>
        <td><IoIosRemoveCircle size='2.2em' color="red" onClick={event=> decreaseAllocation(props.name)}></IoIosRemoveCircle></td>
        <td><IoIosCloseCircle size='2.2em' onClick={handleDeleteExpense}></IoIosCloseCircle></td>
        </tr>
    );
};

export default ExpenseItem;
