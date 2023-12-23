// import "./styles.css";
import { useState } from "react";
import { motion } from "framer-motion";
import menu from "../assets/menu.svg";
import shop from "../assets/shop.png";
import { FaHome, FaDatabase, FaBroadcastTower } from "react-icons/fa";
import { AiOutlineTransaction, AiFillProfile,AiFillAccountBook } from "react-icons/ai";
import { Link } from "react-router-dom";

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

export default function Heade() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full h-14 heds z-10">
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="menu flex  justify-between  w-full"
      >
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-between"
        >
          <div className="flex items-center">
            <img src={shop} alt="" />
            <p className="w-14 text-[10px] leading-3 text-white">
              Bhagywanti Mobiles
            </p>
          </div>
          <motion.div
            variants={{
              // open: { rotate: 90 },
              closed: { rotate: 0 },
            }}
            transition={{ duration: 0.2 }}
            style={{ originY: 0.55 }}
          >
            <img src={menu} alt="" />
          </motion.div>
        </motion.button>
        <motion.ul
          variants={{
            open: {
              clipPath: "inset(0% 0% 0% 0% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.7,
                delayChildren: 0.3,
                staggerChildren: 0.05,
              },
            },
            closed: {
              clipPath: "inset(10% 50% 90% 50% round 10px)",
              transition: {
                type: "spring",
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
          style={{ pointerEvents: isOpen ? "auto" : "none" }}
          className="menus"
        >
          <motion.li className="" variants={itemVariants}>
            <div className="flex">
              <FaHome />
              <Link to="/">Home</Link>
            </div>
          </motion.li>
          <motion.li className="" variants={itemVariants}>
            <div className="flex">
              <FaDatabase />
              <Link to="/inventory">Inventory</Link>
            </div>
          </motion.li>
          <motion.li className="" variants={itemVariants}>
            <div className="flex">
              <AiOutlineTransaction />
              <Link to="/Report">Activity</Link>
            </div>
          </motion.li>
          <motion.li className="" variants={itemVariants}>
            <div className="flex">
              <FaBroadcastTower />
              <Link to="/analysis">Reports</Link>
            </div>
          </motion.li>
          <motion.li className="" variants={itemVariants}>
            <div className="flex">
              <AiFillProfile />
              <Link to="/profiles">Profiles</Link>
            </div>
          </motion.li>
        </motion.ul>
      </motion.nav>
    </div>
  );
}
