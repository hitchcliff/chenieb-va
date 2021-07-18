import { motion } from 'framer-motion';

export enum HeadingPattern {
  H1 = 'h1',
  H2 = 'h2',
  H3 = 'h3',
  H4 = 'h4',
  H5 = 'h5',
}

interface HeadingProps {
  children: any;
  heading?: HeadingPattern;
  className?: string;
}

export default function Heading({ children, heading, className }: HeadingProps) {
  return (
    <div className={className}>
      {heading === HeadingPattern.H1 && (
        <motion.h1 className="text-xl md:text-3xl lg:text-5xl font-bold font-times">
          {children}
        </motion.h1>
      )}

      {heading === HeadingPattern.H2 && (
        <div>
          <motion.h2 className="uppercase text-2xl italic font-times lg:text-3xl font-bold">
            {children}
          </motion.h2>
          <div className="w-1/2 mx-auto md:mx-0 primary-gradient h-2 rounded-full mt-5" />
        </div>
      )}

      {heading === HeadingPattern.H4 && (
        <div className="text-center">
          <motion.h4 className="uppercase text-md text-white font-times lg:text-xl font-bold">
            {children}
          </motion.h4>
          <div className="w-1/4 mx-auto bg-white h-2 rounded-full mt-2" />
        </div>
      )}

      {heading === HeadingPattern.H5 && (
        <div>
          <motion.h4 className="uppercase text-md font-times lg:text-xl font-bold">
            {children}
          </motion.h4>
        </div>
      )}
    </div>
  );
}
