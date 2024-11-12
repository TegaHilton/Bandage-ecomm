// import React from 'react'
import { toast } from 'react-toastify';
import Caramel from "../../assets/images/firstshow/caramel.svg"
function productscards({item}) {
  return (
    <>
    <div className="text-center bg-lightgrey shadow-lg w-[27vmin] h-[43vmin]">
        <div className="h-[60%] flex justify-center">
      <img src={Caramel} alt="" />
      </div>
      <div className="p-5">
          <h2 className="text-lg font-bold">Yoghurt Parfait</h2>
          <p className="">5 Items</p>
          <h2 className="text-md font-bold text-emerald">$16.48</h2>
        </div>
    </div>
 
    </> 
  )
}

export default productscards
