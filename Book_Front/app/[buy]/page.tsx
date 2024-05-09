"use client"
import React, { useEffect, useState } from 'react';
import LandScapeBookCard from '@/Components/LandScapeCard';
import UserDetails from '@/Components/UserDetails';
import Link from 'next/link';
import PageNotFound from '../../Components/Veriy'
import { useRouter } from 'next/navigation';

function Page({params}) {
    let router=useRouter();
let [book,setbook]=useState({id:"",author:"",image:"",quantity:"",describtion:"",Book_name:"",price:""});
let [loading,setloading]=useState(true);
let [valid,setvalid]=useState(false);
    let slug=params.buy;
    useEffect(()=>{
        fetch("http://localhost:3001/findBook",{
            method:"POST",
            body:JSON.stringify({id:slug}),
            headers:{
                "Content-Type":"application/json"
            }
        }).then((data)=>{
            return data.json()
        }).then((data)=>{
            if(data.ok=="true"){
                setvalid(false)
                setbook(data.data)
            }else{
setvalid(true)
            }
        }).finally(()=>{
            setloading(false)
        })
},[])
    return (
       <>
        <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-white font-bold text-lg">Book Shop</span>
        </div>
        <h3 className='text-white'><Link style={{fontSize:'20px',fontWeight:"bolder"}} href={"/"}> Home </Link></h3>
      </div>
    </nav>
    {valid &&   
    <div className='d-flex justify-content-center align-items-center' style={{height:'85vh'}}>
        <h1>PageNotFound</h1><br />
        <button onClick={()=>{router.push("/")}} className="ms-3 btn btn-warning">Back Home</button>
    </div>
}
       {!loading && !valid && <div className="row">
        <LandScapeBookCard data={book} />
        <UserDetails data={book} setbook={setbook}/>
    </div>
}
{loading && <div style={{height:'85vh'}} className="flex   justify-center items-center">
  <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-gray-900"></div>
</div>
}
       </> 
    
    );
}

export default Page;
