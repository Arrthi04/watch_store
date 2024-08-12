import React from 'react'
import '../components/Productitem.css';
import 'fontawesome-free/css/all.min.css';
import { useState } from 'react';
import '../components/Productitem.css';
import { useDispatch } from 'react-redux';
import { searchProduct } from '../redux/productSlice';

const Search=()=>{
  const [searchText, setSearchText] = useState('');
  const dispatch = useDispatch();
  const handleInputChange=(event)=>{
    setSearchText(event.target.value);
  }

 const handleSearch=()=>{
 dispatch(searchProduct(searchText));
 };
  return (
    <nav>
      <div className='sbar'>
        <span className="search-icon">
          {/* <i className="fas fa-search"></i> */}
        </span>
        <input
          type="text"
          placeholder="Search.."
          value={searchText}
          onChange={handleInputChange}
        />
        <button className='bb' onClick={handleSearch}><i className="fas fa-search"></i></button>
      </div>
    </nav>
  );
}

export default Search;