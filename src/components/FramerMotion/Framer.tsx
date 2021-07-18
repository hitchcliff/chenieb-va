import { Variants } from 'framer-motion';
import { primaryColor } from '../../constants';

export const hover: Variants = {
  hidden: {
    opacity: 0,
    width: 0,
  },
  visible: {
    width: '75%',
    opacity: 1,
  },
};

export const colorHover: Variants = {
  hidden: {
    color: 'white',
  },
  visible: {
    color: primaryColor,
  },
};
