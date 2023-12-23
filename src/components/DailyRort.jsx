import React from "react";
import { motion } from "framer-motion";
// import headphone from "../assets/report/headphone.svg";

const DailyRort = ({data}) => {
  if(data.length  === 1){
    console.log("one added successfully")
  }
//  here i wish  to add perfromance rady mean if there one item added then here only one item insert not all item fetching from start point

  return (
    <div className="flex flex-col gap-2">
      {data.map((e,i)=>(
        
         <motion.div
         whileTap={{ scale: 0.2 }}
         className="flex items-center justify-between p-2 text-black font-semibold"
         style={{ background: "#d9d9d9" }}
         key={i}
       >
         {e.select === "sell" && (
          <div className="relative">
            <img src={e?.item?.image  && `data:image/png;base64,${e?.image}`}alt="" className="w-20 h-10" />
            <p className="bg-blue-400 rounded-md absolute -top-2 text-[10px] left-5 text-white px-3">{e.select}</p>
          </div>
         ) }
         <p className="flex flex-col text-center relative">
          <span> {e?.item?.name } </span>
           <span className="font-normal text-sm">{e?.about}</span>
         </p>
         <p>Rs.{e?.sellPrice}</p>
       </motion.div>
      ))}
   
    </div>
  );
};

export default DailyRort;
