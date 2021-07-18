import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { motion, Variants } from 'framer-motion';
import { data } from './SocialsData';

const variant: Variants = {
  hidden: {
    opacity: 0,
    y: -30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

interface SocialsProps {
  isActive?: boolean;
}

export default function Socials({ isActive }: SocialsProps) {
  const socialItems = data.map((item, idx) => (
    <li
      key={idx}
      className="mx-2 bg-white w-10 h-10 rounded-full text-center flex justify-center items-center border-2 hover:opacity-80 hover:border-white hover:bg-black hover:text-white transition-all"
    >
      <a href={item.to} rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={item.icon} />
      </a>
    </li>
  ));

  return (
    <motion.section
      variants={variant}
      animate={isActive ? 'visible' : 'hidden'}
      id="socials"
      className="py-3"
    >
      <ul className="text-black flex flex-row justify-center items-center text-2xl">
        {socialItems}
      </ul>
    </motion.section>
  );
}
