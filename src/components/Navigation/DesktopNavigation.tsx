import { motion } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { hover } from '../FramerMotion/Framer';
import { SlideUpSlideDown } from '../FramerMotion/Slide';
import { menuItems } from './data';

export default function DesktopNavigation() {
  const [crntHoveredItem, setCrntHoveredItem] = useState<number>(-1);

  const navItems = menuItems.map((item, idx) => (
    <li
      key={idx}
      onMouseOver={() => setCrntHoveredItem(idx)}
      onMouseOut={() => setCrntHoveredItem(-1)}
      className="text-gray-700 hover:text-primary block text-md uppercase font-times"
    >
      <Link to={item.name} className="px-5 relative">
        {item.name}
        <motion.span
          variants={hover}
          animate={crntHoveredItem === idx ? 'visible' : 'hidden'}
          className="h-1 w-3/4 absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-primary"
        />
      </Link>
    </li>
  ));

  return (
    <motion.ul
      {...SlideUpSlideDown}
      className="flex-row justify-center items-center hidden md:flex"
    >
      {navItems}
    </motion.ul>
  );
}
