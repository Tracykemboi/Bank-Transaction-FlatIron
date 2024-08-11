// 
import React, { useState } from "react";

function TransactionForm({onAddTransaction}){
    // Initial state for form data with empty values
    const [formData,setFormData]=useState({
        date:'',description:'',category:'',amount:''
    })
    // Function to handle changes in the input fields
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    // Function to handle form submission
    const handleSubmit=(event)=>{
        event.preventDefault()
        onAddTransaction({...formData,id:Date.now()})
        // Reset the form fields to empty values after submission
        setFormData({date:'',description:'',category:'',amount:''})
    }
    return(
        <form onSubmit={handleSubmit}>
            <h4>Add New Transaction</h4>
            <input type="date" name="date" placeholder="Date" value={formData.date} onChange={handleChange}/>
            <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange}/>
            <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange}/>
            <input type="number" name="amount" placeholder="Amount" value={formData.amount} onChange={handleChange}/>
            <button type="submit">Add Transactions</button>
        </form>
    )
}
export default TransactionForm