import React from 'react';
import styles from '../../styles/Tube.module.scss';

type WaterColor = 'red' | 'green' | 'blue' | 'yellow' | 'purple' | 'orange' | 'pink' | 'cyan';

interface FluidProps {
  color: WaterColor;
  unit: number;
}

const Fluid: React.FC<FluidProps> = ({ color, unit }) => {
  return <div className={`${styles['water-segment']} ${styles[color]}`}></div>;
};

export default Fluid;
