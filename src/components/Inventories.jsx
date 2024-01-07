import React, { useState } from "react";
import { motion } from "framer-motion";
import noimage from '../assets/noimage.png'
import { FaRegSave } from 'react-icons/fa'
import Api from "../../utils/Api";


const Inventories = ({ item, indexes, view, editable }) => {
  const [attri, setAttri] = useState(item?.Attributes || "")
  const [stock, setStock] = useState(item?.stock || "")
  const [mrp, setMrp] = useState(item?.mrp || "")
  const [name, setName] = useState(item?.name || "")
  const [about, setAbout] = useState(item?.about || "")

  const savingData = async (id) => {
    try {
      const response = await Api.put(`/activity/update/${id}`, { name, stock, attributes: attri, mrp })
      console.log(response?.data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <motion.div
        whileTap={{ scale: 1.2 }}
        className="grid grid-cols-5 font-semibold px-2  tex-sm bg-transparent"
      >
        <div>
          <img src={item?.image?.type === "Buffer" ? noimage : `data:image/png;base64,${item?.image}` } 
           className="w-14 text-[8px] h-12 object-cover"  alt="" />
          
          <input type="text" value="vip v8" className="outline-none border-none bg-transparent" />
        </div>
        <div className="w-full h-2"></div>
        <input type="number" className="bg-transparent outline-none" value={stock} readOnly={editable} />
        <input type="number" className="bg-transparent outline-none" value={mrp} readOnly={editable} />
        <input type="text" value={attri} className="bg-transparent outline-none"  readOnly={editable} />
      </motion.div>

    </>
  );
};

export default Inventories;
