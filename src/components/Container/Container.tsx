import { motion } from 'framer-motion';

interface ContainerProps {
  children: any;
  className?: string;
}

export default function Container({ children, className }: ContainerProps) {
  return (
    <motion.div
      className={`relative flex flex-col py-10 px-10 lg:px-24 2xl:px-56 md:flex-row ${
        className && className
      }`}
    >
      {children}
    </motion.div>
  );
}
