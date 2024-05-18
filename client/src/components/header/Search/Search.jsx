import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../../../features/currentCityOrHostel';
import { CiSearch } from "react-icons/ci";
import { top20CitiesIndia } from '../../../data/topCitiesOfIndia';

const Search = () => {
    const [query, setQuery] = useState('');
    const dispatch = useDispatch();
    const handleKeyPress = (event) => {
        if(event.key === "Enter"){
            dispatch(setSearchQuery(query));
        }
    }

  return (
    <div className='text-black flex items-center justify-center'>
        <select id="cars" className='p-2 rounded'>
            {top20CitiesIndia.map((cityObj, i)=>{
                return <option key={i}>{cityObj.city}</option>
            })}
        </select>
        <input
            className='w-[40%] p-2 rounded text-black '
            type="text"
            placeholder="Search for a Place, Area"
            value={query}
            onChange={e => setQuery(e.value)}
            onKeyDown={handleKeyPress}
        />
        <div className='bg-red-500 rounded cursor-pointer' onClick={dispatch(setSearchQuery(query))}>
            <CiSearch size={40} />
        </div>
    </div>
  )
}

export default Search