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
  className?: string;
}

export default function Socials({ className }: SocialsProps) {
  const socialItems = data.map((item, idx) => (
    <li
      key={idx}
      className="mx-2 bg-white w-8 h-8 rounded-full text-center flex justify-center items-center border-2 border-white shadow-md hover:border-primary hover:bg-primary hover:text-white transition-all cursor-pointer"
    >
      <a href={item.to} rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={item.icon} />
      </a>
    </li>
  ));

  return (
    <motion.section id="socials" className={className}>
      <ul className="flex flex-row items-center text-md">{socialItems}</ul>
    </motion.section>
  );
}
