import React, { useState } from 'react';

function UserDetails({data,setbook}) {
    const [loading,setloading]=useState(false);

    const [values, setValues] = useState({
        name: '',
        address: '',
        email: '',
        mobile: '',
        quantity: 1,
        price: data.price,
    });

    const [errors, setErrors] = useState({
        name: '',
        address: '',
        email: '',
        mobile: '',
        quantity: '',
        price:'',
        "gmail":'',
        "Mobnumber":''
    });

    const handleSubmit = () => {
        const newErrors = { ...errors };
        if (!values.name.trim()) {
            newErrors.name = 'Name is required';
            
        } else {
            newErrors.name = '';
        }

        if (!values.address.trim()) {
            newErrors.address = 'Address is required';
            
        } else {
            newErrors.address = '';
        }
        if (values.email.endsWith("@gmail.com")) {
            newErrors.gmail = '';
            
        } else {
            newErrors.gmail = 'Email @gmail is required';
        }

        if (!values.email.trim()) {
            newErrors.email = 'Email is required';
            
        } else {
            newErrors.email = '';
        }

        if (!values.mobile.trim()) {
            newErrors.mobile = 'Mobile Number is required';
            
        } else {
            newErrors.mobile = '';
        }

        if (values.quantity<1) {
            newErrors.quantity = 'Quantity is required';
        
        } else {
            newErrors.quantity = '';
        }
        if (values.price<1) {
            newErrors.price = 'Price is required';
            
        } else {
            newErrors.price = '';
        }
        setErrors(newErrors);

        if (values.address!="" && values.email != "" && values.name != "" && values.quantity != 0 && values.mobile != "" && values.price > 0 ) {
            setloading(true);
            fetch("http://localhost:3001/bookOrder",{
                method:"POST",
                body:JSON.stringify({...values,Book_name:data.Book_name,book_id:data._id}),
                headers:{
                    "Content-Type":"application/json"
                }
            }).then((data)=>{
                return data.json()
            }).then((data)=>{
                if(data.order=="true"){
                    setbook((prev)=>{ return {...prev,quantity:data.quantity}});

                }
            }).finally(()=>{
                setloading(false);
                setValues({
                    name: '',
                    address: '',
                    email: '',
                    mobile: '',
                    quantity: 1,
                    price: data.price,
                })
            })
        }
    };

    return (
        <div className="bg-white shadow-md mx-auto w-100 rounded px-8 pt-6 pb-8 mb-4 row">
            <div className="mb-4 col-4">
                <label htmlFor="name" className="text-gray-700 text-sm font-bold mb-2">
                    Name
                </label>
                <input
                    id="name"
                    value={values.name}
                    onChange={(e)=>{setValues((prev)=>{return {...prev,name:e.target.value}})}}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Enter your name"
                />
                {errors.name && <p className="text-red-500 text-xs italic mt-1">{errors.name}</p>}
            </div>
            <div className="mb-4 col-4">
                <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
                    Address
                </label>
                <input
                    id="address"
                    value={values.address}
                    onChange={(e)=>{setValues((prev)=>{return {...prev,address:e.target.value}})}}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Enter your address"
                />
                {errors.address && <p className="text-red-500 text-xs italic mt-1">{errors.address}</p>}
            </div>
            <div className="mb-4 col-4">
                <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                    Email
                </label>
                <input
                    id="email"
                    value={values.email}
                    onChange={(e)=>{setValues((prev)=>{return {...prev,email:e.target.value}})}}
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="email"
                    placeholder="Enter your email"
                />
                {errors.email && <p className="text-red-500 text-xs italic mt-1">{errors.email}</p>}
                {errors.gmail && !errors.email &&<p className="text-red-500 text-xs italic mt-1">{errors.gmail}</p>}

            </div>
            <div className="mb-4 col-4">
                <label htmlFor="mobile" className="block text-gray-700 text-sm font-bold mb-2">
                    Mobile Number
                </label>
                <input
    id="mobile"
    value={values.mobile}
    onInput={(e) => {
        const inputValue = e.target.value;
        if (!isNaN(inputValue) && inputValue.length <= 10) {
            setValues((prev) => ({ ...prev, mobile: inputValue }));
        setErrors((prev)=>{return {...prev,Mobnumber:''}})

        }
        else{

            setErrors((prev)=>{return {...prev,Mobnumber:"Enter number only"}})
        }
    }}
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    type="tel" // Change type to "tel" for mobile numbers
    maxLength={10} // Set max length to 10 digits
    placeholder="Enter your mobile number"
/>
                {errors.mobile && <p className="text-red-500 text-xs italic mt-1">{errors.mobile}</p>}
                {!errors.mobile && errors.Mobnumber && <p className="text-red-500 text-xs italic mt-1">{errors.Mobnumber}</p>}

            </div>
            <div className="mb-4 col-4">
                <label htmlFor="quantity" className="block text-gray-700 text-sm font-bold mb-2">
                    Quantity
                </label>
                 <div className="flex items-center">
                  <input  value={values.quantity} disabled={true} className='col-2 me-1 shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" />  
            <input
                id="quantity"
                value={values.quantity}
                onInput={(e)=>{
                    
                    setValues((prev)=>{ return {...prev,quantity:e.target.value,price:data.price*e.target.value}})}}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
                type="range"
                min="1"
                max={data.quantity}
                step="1"
            />
            <button onClick={(e)=>{
                setValues((prev)=>{
                    if(prev.quantity==1){
                        return prev;
                    }

                    return {...prev,quantity:Number(prev.quantity-1),price:(Number(prev.price-data.price))};
                })
            }} className="bg-blue-500 hover:bg-blue-700 me-1 text-white font-bold py-2 px-4 rounded">
                -
            </button>
            <button onClick={(e)=>{
                setValues((prev)=>{
                    if(prev.quantity==20){
                        return prev;
                    }
                    return {...prev,quantity:Number(prev.quantity+1),price:(Number(prev.price+data.price))};
                })
            }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                +
            </button>
            
        </div>
                {errors.quantity && <p className="text-red-500 text-xs italic mt-1">{errors.quantity}</p>}
            </div>
            {/* Assuming price is not directly entered by the user */}
            {/* If needed, implement additional validation for price */}
            <div className="mb-4 col-4">
                <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">
                    Price
                </label>
                <input
                    id="price"
                    value={values.price}
                    readOnly
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                />
                {errors.price && <p className="text-red-500 text-xs italic mt-1">{errors.price}</p>}

            </div>
            <div className="flex justify-end mb-5">
                <button disabled={loading}
                    onClick={handleSubmit}
                    className="ms-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                >
                    Buy
                </button>
            </div>
        </div>
    );
}

export default UserDetails;
