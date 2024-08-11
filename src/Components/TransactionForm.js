// 
import React, { useState } from "react";

function TransactionForm({onAddTransaction}){
    const [formData,setFormData]=useState({
        date:'',description:'',category:'',amount:''
    })
    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        onAddTransaction({...formData,id:Date.now()})
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