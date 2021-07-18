import { motion, Variants } from 'framer-motion';
import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { primaryColor } from '../../constants';
import { TransitionPowerThree } from '../FramerMotion/Transitions';

const variant3: Variants = {
  active: {
    position: 'absolute',
    rotate: -45,
    margin: 0,
  },
  inactive: {
    position: 'static',
    rotate: 0,
  },
};

const variant2: Variants = {
  active: {
    opacity: 0,
    transition: {
      delay: 0.3,
      ...TransitionPowerThree,
    },
  },
  inactive: {
    opacity: 100,
    transition: {
      delay: 0.6,
      ...TransitionPowerThree,
    },
  },
};

const variant1: Variants = {
  active: {
    position: 'absolute',
    rotate: 45,
  },
  inactive: {
    position: 'static',
    rotate: 0,
  },
};

const Line = styled(motion.div)`
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.6);
  width: 1.5rem;
  height: 0.2rem;
  border-radius: 5px;
  background: white;
`;

interface BurgerProps {
  setIsBurgerActive: Dispatch<SetStateAction<boolean>>;
  isBurgerActive: boolean;
}

export default function Burger({ setIsBurgerActive, isBurgerActive }: BurgerProps) {
  function handleClick() {
    setIsBurgerActive(!isBurgerActive);
  }

  return (
    <button
      onClick={handleClick}
      className="relative flex flex-col justify-center items-center outline-none primary-gradient rounded-full shadow-md h-16 w-16 focus:outline-none"
    >
      <Line
        animate={isBurgerActive ? 'active' : 'inactive'}
        variants={variant1}
        transition={{ delay: 0.6 }}
        className=""
      />
      <Line
        animate={isBurgerActive ? 'active' : 'inactive'}
        variants={variant2}
        transition={{ delay: 0.2 }}
        className="mt-1"
      />
      <Line
        animate={isBurgerActive ? 'active' : 'inactive'}
        variants={variant3}
        transition={{ delay: 0.6 }}
        className="mt-1"
      />
    </button>
  );
}
