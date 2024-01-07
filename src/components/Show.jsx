import com from "../assets/com.png";
import React, { useState } from "react";
import { motion } from "framer-motion";
import noimage from "../assets/noimage.png";
import { FaRegSave } from "react-icons/fa";
import Api from "../../utils/Api";

const Show = ({ item, indexes, view, editable }) => {
  const [attri, setAttri] = useState(item?.Attributes || "");
  const [stock, setStock] = useState(item?.stock || "");
  const [mrp, setMrp] = useState(item?.MRP || "");
  const [name, setName] = useState(item?.name || "");

  const savingData = async (id) => {
    try {
      const response = await Api.put(`/activity/update/${id}`, {
        name,
        stock,
        attributes: attri,
        mrp,
      });
      console.log(response?.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full inve h-screen mt-5 rounded-md p-3">
      <div className="flex flex-col gap-5 ">
       
      </div>
      <div
        className={`text-sm flex justify-between px-2 ${
          indexes == view ? "" : "hidden"
        }`}
      >
        <div className="flex justify-between w-full mt-5 ">
          <div></div>
          <motion.button
            whileTap={{ scale: 0.2 }}
            onClick={() => savingData(item?._id)}
          >
            <FaRegSave />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Show;
