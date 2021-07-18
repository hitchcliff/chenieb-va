import { MotionProps } from 'framer-motion';
import { TransitionPowerThree } from './Transitions';

export const SlideUpSlideDown: MotionProps = {
  initial: {
    y: -20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: -20,
    opacity: 0,
  },
  transition: { ...TransitionPowerThree },
};

export const SlideDownSlideUp: MotionProps = {
  initial: {
    y: 20,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
  },
  exit: {
    y: 20,
    opacity: 0,
  },
  transition: { ...TransitionPowerThree },
};

export const SlideLeftSlideRight: MotionProps = {
  initial: {
    x: 20,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: 20,
    opacity: 0,
  },
  transition: { ...TransitionPowerThree },
};

export const SlideRightSlideLeft: MotionProps = {
  initial: {
    x: -20,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
  exit: {
    x: -20,
    opacity: 0,
  },
  transition: { ...TransitionPowerThree },
};
