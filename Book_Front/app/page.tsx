"use client"
import BookCard from "@/Components/BookCard";
import Navbar from "@/Components/Navar";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Footer from '../Components/footer'

export default function Home() {
  let [Book,setBooks]=useState([]);
  let [loading,setloading]=useState(true);
  let search=useSelector( prev => prev.search);
  let [buy,setbuy]=useState(false);

  
  useEffect(()=>{
   async function getBooks() {
      fetch("http://localhost:3001/bus_details").then((data)=>{
       return data.json()
      }).then((data)=>{
        setBooks(data.data);
      }).finally(()=>{
        setloading(false);
      })
    }
    getBooks()
  },[])
  return (
    <>
    <Navbar/>
    {!loading && <div className="row">
      {Book.filter((item) =>{if(item.Book_name.toLowerCase().includes(search.data.toLowerCase()) || item.describtion.toLowerCase().includes(search.data.toLowerCase())){
return item;
      }}).map((data)=>{
      return <BookCard data={data} setbuy={setbuy}/>;
      })}
    
    <Footer/>
    </div>}
    {buy && <div className="fixed inset-0 z-10 flex items-center justify-center bg-gray-800 bg-opacity-50">
    <div className="bg-white p-8 rounded shadow-md">
        <h2 className="text-lg font-semibold mb-4">Book Shop</h2>
        <p className="mb-4">Sorry ! Book Not Available</p>
        <button onClick={()=>{setbuy(false)}} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Close</button>
    </div>
</div>}
    {loading && <div style={{height:'85vh'}} className="flex   justify-center items-center">
  <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-gray-900"></div>
</div>
}
    </>
  );
}
