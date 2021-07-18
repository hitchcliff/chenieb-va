import { motion } from 'framer-motion';

export enum HeadingPattern {
  H1 = 'h1',
  H2 = 'h2',
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
        <motion.h1 className="uppercase text-xl md:text-3xl lg:text-5xl font-bold font-bokka">
          {children}
        </motion.h1>
      )}

      {heading === HeadingPattern.H2 && (
        <div>
          <motion.h2 className="uppercase text-md italic font-bokka lg:text-3xl font-bold">
            {children}
          </motion.h2>
          <div className="w-1/2 bg-primary h-2 rounded-full mt-5" />
        </div>
      )}
    </div>
  );
}
