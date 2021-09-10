import { motion, Variants } from 'framer-motion';
import { useState } from 'react';
import { TransitionPowerThree } from '../FramerMotion/Transitions';
import Burger from './Burger';
import { menuItems } from './data';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';

const variant: Variants = {
  hidden: {
    opacity: 0,
    borderRadius: '100%',
    transition: { ...TransitionPowerThree, duration: 1.2 },
  },
  visible: {
    opacity: 1,
    borderRadius: '0%',
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
      className="text-white block text-xl md:text-3xl uppercase font-bold"
    >
      <Link to={item.to} onClick={() => setIsBurgerActive(false)}>
        {item.name}
      </Link>
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
        className="flex flex-col justify-center items-center fixed left-0 top-full text-white primary-gradient bg-opacity-90 w-full min-h-screen mx-auto opacity-0"
      >
        <ul className="flex flex-col -mt-12">{renderMenuItems}</ul>
      </motion.div>
    </div>
  );
}
