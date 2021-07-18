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

export default function Socials() {
  const socialItems = data.map((item, idx) => (
    <li
      key={idx}
      className="mx-2 bg-white w-10 h-10 rounded-full text-center flex justify-center items-center border-2 shadow-md hover:opacity-80 hover:border-white hover:bg-black hover:text-white transition-all cursor-pointer"
    >
      <a href={item.to} rel="noreferrer" target="_blank">
        <FontAwesomeIcon icon={item.icon} />
      </a>
    </li>
  ));

  return (
    <motion.section id="socials" className="py-3 mt-5">
      <ul className="flex flex-row items-center text-2xl ">{socialItems}</ul>
    </motion.section>
  );
}
