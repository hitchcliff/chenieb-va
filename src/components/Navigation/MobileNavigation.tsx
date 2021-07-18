import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TransitionPowerThree } from '../FramerMotion/Transitions';
import Burger from './Burger';
import { menuItems } from './data';

const variant = {
  hidden: {
    opacity: 0,
    transition: {
      duration: 1.5,
    },
  },
  visible: {
    opacity: 1,
    top: '0',
    zIndex: 123123,
    transition: { ...TransitionPowerThree, duration: 1.2 },
  },
};

export default function MobileNavigation() {
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  const renderMenuItems = menuItems.map((item, idx) => (
    <li
      key={idx}
      onClick={() => setIsBurgerActive(false)}
      className={`text-white block text-xl md:text-3xl uppercase font-bold ${!item.img && 'py-2'}`}
    >
      <Link to={item.name}>{item.name}</Link>
    </li>
  ));

  return (
    <div className="flex items-center px-0 w-full z-50">
      <div className="mr-auto" style={{ zIndex: 1231231231 }}>
        <Burger setIsBurgerActive={setIsBurgerActive} isBurgerActive={isBurgerActive} />
      </div>
      <motion.div
        variants={variant}
        animate={isBurgerActive ? 'visible' : 'hidden'}
        className="flex flex-col justify-center items-center fixed left-0 top-full text-white bg-gray-600 bg-opacity-90 w-full min-h-screen opacity-0"
      >
        <ul className="flex flex-col -mt-12">{renderMenuItems}</ul>
      </motion.div>
    </div>
  );
}
