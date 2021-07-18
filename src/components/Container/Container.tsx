import { motion } from 'framer-motion';

interface ContainerProps {
  children: any;
  className?: string;
  id?: string;
}

export default function Container({ children, className, id }: ContainerProps) {
  return (
    <motion.div
      id={id}
      className={`relative flex flex-col py-10 px-5 md:px-10 lg:px-24 2xl:px-56 ${
        className && className
      }`}
    >
      {children}
    </motion.div>
  );
}
