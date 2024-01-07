import React from "react";
import image1 from "../assets/report/care.svg";
import image2 from "../assets/report/forget.svg";
import image3 from "../assets/report/moneybag.svg";
import image4 from "../assets/report/transfer.svg";
import { motion } from "framer-motion";
const Report = () => {
  return (
    <div className="w-[360.02px] h-[313px] relative bd mt-5">
      <div className="left-[12.02px] top-[13px]  absolute text-black text-sm font-normal font-['Itim']">
        Assets
      </div>
      <div className="left-[16.02px] top-[32px] absolute text-black text-[32px] font-normal font-['Joti One']">
        Tracking
      </div>
      <div className="w-[179px] h-[211px] left-[23.02px] top-[102px] absolute bg-violet-200 bg-opacity-95 rounded-[20px] backdrop-blur-[20px]" />
      <div className="w-[126px] h-[55px] left-[40.02px] top-[113px] absolute">
        <div className="left-0 top-0 absolute text-black text-base font-normal font-['Itim']">
          Balance
        </div>
        <div className="left-0 top-[19px] absolute text-black text-3xl font-normal font-['Itim']">
          Rs 25000
        </div>
      </div>
      <div className="w-[126px] text-white h-[55px] left-[216.02px] top-[241px] absolute">
        <div className="left-[28px] top-0 absolute darK:text-white text-base font-normal font-['Itim']">
          Today Sales
        </div>
        <div className="left-0 top-[19px] absolute dar:text-white text-3xl font-normal font-['Itim']">
          Rs 25000
        </div>
      </div>
      <div className="w-[84px] h-[45px] left-[37.02px] top-[170px] absolute">
        <div className="left-0 top-0 absolute text-black text-sm font-normal font-['Itim']">
          Mitra
        </div>
        <div className="w-[84px] left-0 top-[21px] absolute text-black text-xl font-normal font-['Itim']">
          Rs 25000
        </div>
      </div>
      <div className="w-[84px] h-[45px] left-[118.02px] top-[210px] absolute">
        <div className="left-[30px] top-0 absolute text-black text-sm font-normal font-['Itim']">
          Jio
        </div>
        <div className="w-[84px] left-0 top-[21px] absolute text-black text-xl font-normal font-['Itim']">
          Rs 25000
        </div>
      </div>
      <div className="w-[93px] h-11 left-[33.02px] top-[255px] absolute">
        <div className="left-0 top-0 absolute text-black text-sm font-normal font-['Itim']">
          AirPay/p.pay
        </div>
        <div className="w-[84px] left-[9px] top-[20px] absolute text-black text-xl font-normal font-['Itim']">
          Rs 25000
        </div>
      </div>
      <motion.div
      whileTap ={{scale:0.2}}
        className="w-12 h-[51.10px] left-[291.02px] top-[102px] absolute bg-gradient-to-b from-white to-white rounded-full"
      >
        <img src={image1} alt="" className="m-auto mt-2" />
      </motion.div>
      <motion.div
        whileTap={{ scale: 0.2 }}
        className="w-12 h-[51.10px] left-[225.02px] top-[168px] absolute bg-gradient-to-b from-white to-white rounded-full"
      >
        <img src={image2} alt="" />
      </motion.div>
      <motion.div
        whileTap={{ scale: 0.2 }}
        className="w-12 h-[51.10px] left-[290.02px] top-[165px] absolute bg-gradient-to-b from-white to-white rounded-full"
      >
        <img src={image3} alt="" className="m-auto mt-3" />
      </motion.div>
      <motion.div
        whileTap={{ scale: 0.2 }}
        className="w-12 h-[51.10px] left-[221.02px] top-[104px] absolute"
      >
        <motion.div whileTap={{scale:0.2}} className="w-12 h-[51.10px] left-0 top-0 absolute bg-gradient-to-b from-white to-white rounded-full">
          <img src={image4} alt="" className="m-auto mt-3" />
        </motion.div>
        <div className="w-[23.23px] h-[24.72px] left-[12.39px] top-[14.83px] absolute">
          <div className="w-4 h-[11.22px] left-[3.59px] top-[11.57px] absolute"></div>
          <div className="w-[16.48px] h-[4.48px] left-[3.01px] top-[19.47px] absolute"></div>
          <div className="w-[17.28px] h-[4.17px] left-[3.01px] top-[19.78px] absolute"></div>
        </div>
      </motion.div>
      <div className="w-[30px] h-[30px] left-[233.02px] top-[180px] absolute">
        <div className="w-[29.98px] h-[30px] left-[0.01px] top-[-0px] absolute"></div>
      </div>
      <div className="w-[30px] h-[30px] left-[302.02px] top-[174px] absolute" />
    </div>
  );
};

export default Report;
