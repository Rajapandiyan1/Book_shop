import { search } from '@/Store/SearchSlice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const Navbar = () => {
  let [Search,setsearch]=useState("");
  let dataSearch=useDispatch();
  function submit(params:type) {
    
    dataSearch(search(Search));
  }
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-white font-bold text-lg">Book Shop</span>
        </div>

        <div className="flex items-center">
          <input value={Search} onInput={(e)=>{setsearch(e.target.value)}}
            type="text"
            placeholder="Search..."
            className="bg-gray-700 text-white rounded-md px-4 py-2 focus:outline-none focus:bg-gray-600"
          />
          <button className="bg-gray-600 text-white px-4 py-2 ml-2 rounded-md" onClick={()=>{submit()}}>Search</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
