import React from "react";
import bageshwar from "../assets/bageshwar.png";
import user from "../assets/first.png";
import coin2 from "../assets/Group.svg";
import shop from "../assets/shop.png";
import {FaShoppingCart,FaRegUser} from 'react-icons/fa'
import {IoMdAnalytics} from 'react-icons/io'
import { Combo } from "../../utils/Data";
import { useSelector } from "react-redux";


const Home = () => {
  const user = useSelector((state)=>state.user.auth)
  return (
    <header className="w-full bg-blue-400">
      <main
        className="w-full p-3 h-[43vh] rounded-br-3xl rounded-bl-3xl"
        style={{ backgroundColor: "#2538E5" }}
      >
        <div className="flex gap-5">
          <div className="flex flex-col gap-3">
            <img
              src={user}
              alt="Welcome note"
              className="w-16 h-16 object-cover rounded-full"
            />
            <p className="text-center text-white text-sm">Retailer</p>
          </div>
          <div>
            <h2 className="text-3xl text-white font-dancing">
              Hello,{user?.name || "please sign in"}
            </h2>
            <div className="flex gap items-center gap-3 text-white mt-2">
              <div>
                <p>Reload Amount</p>
                <p className="text-center">Rs. 1440</p>
              </div>
              <img src="" alt="" />
              <div>
                <p>My Coins</p>
                <p className="flex gap-3">
                  <img src={coin2} alt="" /> <span>236</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 text-white">
          <h3>Today Perfromance</h3>
          <div className="grid grid-cols-3 gap-5 mt-3 ">
            <div className="flex flex-col gap-3">
              <div className="h-20 border-white br-radius  bg-sky-400 grid justify-center pt-7">
                <h2>Rs.1458</h2>
              </div>
              <p>Easyload</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="h-20 border-white br-radius  bg-sky-400 grid justify-center pt-7">
                <h2>Rs.1458</h2>
              </div>
              <p>Commission</p>
            </div>
            <div className="flex flex-col gap-3">
              <div className="h-20 border-white br-radius  bg-sky-400 grid justify-center pt-7">
                <h2>Rs.1458</h2>
              </div>
              <p>Powerload</p>
            </div>
          </div>
        </div>
      </main>
      <div
        id="advitisor"
        className="p-2 mt-5"
        style={{ background: "#EBF89D" }}
      >
        <div className=" relative flex justify-between">
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <img src={shop} alt="" className="w-9" />
              <h3 className="w-12 mt-1 font-bold text-center text-[10px] text-black">
                Bhagywanti Mobiles
              </h3>
            </div>
			<h2 className="flex flex-col text-xl text-black absolute top-12">Welcomes <span>
				Mobile Shop Retailer
				</span></h2>
          </div>
		  <img src={bageshwar} alt="" />
        </div>
		<div className="bg-white w-full grid items-center justify-center grid-cols-3 p-2">
				<h2 className="text-xl"><FaRegUser className="m-auto" /><span className="text-[11px]">10K+ Customers</span></h2>
				<h2 className="text-xl"><IoMdAnalytics className="m-auto" /><span className="text-[11px]">Best analysis work</span></h2>
				<h2 className="text-xl"><FaShoppingCart className="m-auto" /><span className="text-[11px]">30 lakh+ Customers</span></h2>
		  </div>
      </div>
	  <div className="combo flex w-full gap-3 overflow-scroll p-2">
	<p>Xiaomi</p>
	<p>Oppo</p>
	<p>Vivo</p>
	<p>Realme</p>
	<p>Asus</p>
	<p>Nokia</p>
	<p>Xiaomi</p>
	<p>Infinix</p>
	<p>Motorola</p>
	  </div>
	  <div className="grid grid-cols-4 w-full gap-3 overflow-scroll">
		{Combo[0].xiaomi.map((item,index)=>(
			<div key={index} className="relative ">
				<img src={item?.image} alt="" className="w-20 images" />
				<div className="shapes text-center">
				<p>{item.title}</p>
				</div>
				
			</div>
		))}
	  </div>
	  
    </header>
  );
};

export default Home;
