import React, { useState } from 'react';
import { MdOutlineInventory2 } from 'react-icons/md';
import { SiGoogleanalytics } from 'react-icons/si';
import { IoGiftOutline } from 'react-icons/io5';
import { FaAngellist, FaHome } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Menu = () => {
    const [activeIndex, setActiveIndex] = useState(2);

    const handleItemClick = (index) => {
        setActiveIndex(index);
    };

    const menuItems = [
        { icon: <SiGoogleanalytics />, text: 'Analytics',link:"/analytics" },
        { icon: <IoGiftOutline />, text: 'Offers',link:"/" },
        { icon: <FaHome />, text: 'Home' , link:'/home' },
        { icon: <FaAngellist />, text: 'Activity', link:"/report" },
        { icon: <MdOutlineInventory2 />, text: 'Inventory',link:"/inventory" },
    ];
    return (
        <div className="menus grid grid-cols-5 text-2xl w-full px-5 bg-white ">
            {menuItems.map((item, index) => (
                <Link to={`${item?.link}`} key={index} >
                <li
                className=''
                    key={index}
                    onClick={() => handleItemClick(index)}
                >
                    <div className={ `mt-2 ${index === activeIndex && 'p-1 shadow-md shadow-black bg-blue-400 transition-all ease-in-out duration-150 rounded-full scale-150 text-white'}`}>
                    {item.icon}
                    </div>
                    <p className={`${index === activeIndex && 'hidden'}`}>{item.text}</p>
                </li>
                </Link>
            ))}
        </div>
    );
};

export default Menu;
