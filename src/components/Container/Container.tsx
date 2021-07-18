import { motion } from 'framer-motion';

interface ContainerProps {
  children: any;
}

export default function Container({ children }: ContainerProps) {
  return (
    <motion.div className="relative flex flex-col justify-center items-center py-10 px-10 lg:px-24 2xl:px-56 md:flex-row">
      {children}
    </motion.div>
  );
}
