"use client"
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const BookCard = ({data, setbuy}) => {
  let move=useRouter();
  return (
    <>
    
    <div className="mt-4  bg-white rounded-xl  shadow-md col-4">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img className="h-48 w-full object-cover md:w-48" src={data.image} alt="Book cover" />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{data.Book_name}</div>
          <div className="text-gray-600 font-medium mt-1">Author: {data.author}</div>

          <p className="mt-2 text-gray-500">{data.describtion.slice(0,100)}<b style={{fontSize:'20px'}}>...</b></p>
          <div className="text-xl text-green-600 font-semibold">Price: ₹ {data.price}</div>
          <div className="text-sm text-gray-700 mt-1">Books available: {data.quantity}</div>

          <div className="mt-4">
            <button onClick={()=>{if(data.quantity>0){move.push(`/${data._id}`)}else{
              setbuy(true)
            }}} className="ms-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  


    </>
  );
};

export default BookCard;
