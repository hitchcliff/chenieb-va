import { motion } from 'framer-motion';
import { SlideUpSlideDown } from '../FramerMotion/Slide';

export enum HeadingPattern {
  H1 = 'h1',
  H2 = 'h2',
}

interface HeadingProps {
  children: any;
  heading?: HeadingPattern;
}

export default function Heading({ children, heading }: HeadingProps) {
  return (
    <div>
      {heading === HeadingPattern.H1 && (
        <motion.h1
          {...SlideUpSlideDown}
          className="uppercase text-xl md:text-3xl lg:text-4xl font-bold font-bokka"
        >
          {children}
        </motion.h1>
      )}

      {heading === HeadingPattern.H2 && (
        <motion.h2 {...SlideUpSlideDown} className="uppercase text-xl font-bold">
          {children}
        </motion.h2>
      )}
    </div>
  );
}
