import React from 'react';

const LandScapeBookCard = ({data}) => {
    // let book={coverUrl:}
  return (
    <div className="bg-white rounded-md shadow-md p-4 col-11 mx-auto">
      <div className="flex row">
        <div className="col-2">
          <img src={data.image} alt={"Ganthi"} className="w-full h-auto rounded-lg" />
        </div>
        <div className="col-10">
        <h2 className="text-lg font-semibold mb-2"> Book Name : {data.Book_name}</h2>
          <h2 className="text-lg font-semibold mb-2">Author : {data.author}</h2>
          <p className="text-gray-700 mb-2"> Describtion : {data.describtion}</p>
          <p className="text-gray-700"> Price : ₹ {data.price}</p>
          <p className="text-gray-700"> Quantity Available.: {data.quantity} only</p>

        </div>
      </div>
    </div>
  );
};

export default LandScapeBookCard;
