import { motion } from 'framer-motion';
import Showcase from './Showcase/Showcase';
import Introduction from './Introduction/Introduction';

export default function Home() {
  return (
    <motion.div>
      <Showcase />
      <Introduction />
    </motion.div>
  );
}
