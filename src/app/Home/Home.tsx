import { motion } from 'framer-motion';
import Showcase from './Showcase/Showcase';
import Introduction from './Introduction/Introduction';
import Experience from './Experience/Experience';
import About from './About/About';

export default function Home() {
  return (
    <motion.div>
      <Showcase />
      <Introduction />
      <About />
      <Experience />
    </motion.div>
  );
}
