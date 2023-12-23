import React, { useState } from "react";
import { motion } from "framer-motion";
import noimage from '../assets/noimage.png'
import {FaRegSave} from'react-icons/fa'
import Api from "../../utils/Api";


const Inventories = ({ item, indexes, view, editable }) => {
  const [attri, setAttri] = useState(item?.Attributes || "")
  const [stock, setStock] = useState(item?.stock || "")
  const [mrp, setMrp] = useState(item?.mrp || "")
  const [name, setName] = useState(item?.name || "")
  const [about,setAbout] = useState(item?.about || "")

  const savingData = async (id)=>{
      try {
        const response = await Api.put(`/activity/update/${id}`,{name,stock,attributes:attri,mrp})
        console.log(response?.data)
      } catch (error) {
        console.log(error)
      }
  }

  return (
    <>
       <motion.div
          whileTap={{ scale: 1.2 }}
          className="flex justify-between items-center text-2xl font-semibold shadow-md bg-white px-2 rounded-md shadow-white"
        >
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <img
                src={`${
                  item?.image?.data
                    ? noimage
                    : `data:image/png;base64,${item?.image}`
                }`}
                alt="click to add"
                className="w-14 h-14 text-sm "
              />
              <h2 className="text-sm outline-none border-n w-[100px] leading-5 mt-2">{name}</h2>
            </div>
          </div>
          <div className="flex justify-between gap-12 mr-3 text-md">
            <h2>{stock}</h2>
            <h2>{mrp}</h2>
          </div>
        </motion.div>
        <div
        className={` text-sm items-start  bg-white flex justify-between px-2 ${
          indexes == view ? "" : "hidden"
        }`}
      >
        <div className="flex flex-col items-center gap-2">
        <div className="grid grid-cols-5 bg-white px-2 w-full">
          <input type="text" className="outline-none border-none" value={name} onChange={(e)=>setName(e.target.value)} />
          <input type="text" className="outline-none border-none" value={stock} onChange={(e)=>setStock(e.target.value)} />
          <input type="text" className="outline-none border-none" value={mrp} onChange={(e)=>setMrp(e.target.value)} />
          <input type="text" className="outline-none border-none" value={attri} onChange={(e)=>setAttri(e.target.value)} />
        </div>
        <input type="text" className="outline-none border-none" value={about} onChange={(e)=>setAbout(e.target.value)} />

        </div>
        <motion.button
            whileTap={{ scale: 0.2 }}
            onClick={() => savingData(item?._id)}
          >
            <FaRegSave />
          </motion.button>
      </div>
    </>
  );
};

export default Inventories;
