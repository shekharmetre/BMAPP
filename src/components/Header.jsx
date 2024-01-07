import React, { useState } from 'react'
import {FaMoon, FaRegMoon} from 'react-icons/fa'
import { MdSunny } from "react-icons/md";

const Header = () => {
    const [click,setClick] = useState(false)
  return (
    <div className='flex justify-between mt-5 bg-transparent'>
        <div>
            <h2 className='text-2xl font-semibold'>Mobile App</h2>
        </div>
        <button className='btn bg-transparent border-none rotate-360 transition-all ease-in-out duration-200' onClick={()=>setClick((prev)=>!prev)}>
        {click ? <FaMoon /> : <MdSunny />}
        </button>
       
    </div>
  )
}

export default Header