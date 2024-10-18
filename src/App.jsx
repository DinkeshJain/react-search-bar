import React, { useState } from 'react'
import './App.css'
import SearchBar from './components/SearchBar/SearchBar'
import SearchResults from './components/SearchResults/SearchResults';

const App = () => {
  const [results,setResults] = useState([]);
  return (
    <div className='App'>
      <div className="heading"><span>React Search Bar</span></div>
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        <SearchResults results={results} />
      </div>
    </div>
  )
}

export default App