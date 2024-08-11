
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import TransactionTable from './TransactionTable'
import TransactionForm from './TransactionForm'
import SearchBar from './SearchBar'
function App(){
  const [transactions,setTransactions]=useState([])
  const[filteredTransactions,setFilteredTransactions]=useState([])

  useEffect(() => {
        fetchTransactions();
      }, []);
    
  const fetchTransactions = async () => {
          const response = await axios.get('http://localhost:8001/transactions');
          setTransactions(response.data);
          setFilteredTransactions(response.data)
      };
  const addTransaction = (newTransaction) => {
        setTransactions([...transactions, newTransaction]);
        setFilteredTransactions([...filteredTransactions, newTransaction]);
      }
  const handleSearch = (searchTerm) => {
    const filtered = transactions.filter(transaction =>
      // Ensures that the search is case insensitive
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase()) 
    );
    setFilteredTransactions(filtered);
  };

  return(
    <div className='App'>
      <h1>Bank Transactions</h1>
      <SearchBar onSearch={handleSearch}/>
      <TransactionForm onAddTransaction={addTransaction}/>
      <TransactionTable transactions={filteredTransactions}/>
    </div>
  )
}
export default App