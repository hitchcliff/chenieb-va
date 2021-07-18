import { motion } from 'framer-motion';
import Showcase from './Showcase/Showcase';
import Introduction from './Introduction/Introduction';
import Highlights from './Highlights/Highlights';
import Experience from './Experience/Experience';

export default function Home() {
  return (
    <motion.div>
      <Showcase />
      <Introduction />
      <Highlights />
      <Experience />
    </motion.div>
  );
}
