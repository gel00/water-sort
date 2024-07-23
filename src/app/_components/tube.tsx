import React from 'react';
import Fluid from './fluid';
import styles from '../../styles/Tube.module.scss';

type WaterColor = 'red' | 'green' | 'blue' | 'yellow' | 'purple' | 'orange' | 'pink' | 'cyan';

interface TubeProps {
  id: number;
  colors: WaterColor[];
  maxCapacity: number;
  onClick: (id: number) => void;
}

const Tube: React.FC<TubeProps> = ({ id, colors, maxCapacity, onClick }) => {
  return (
    <div className={styles.tube} onClick={() => onClick(id)}>
      {colors.map((color, index) => (
        <Fluid
          key={`${id}-${index}`}
          color={color}
          unit={1}
        />
      ))}
    </div>
  );
};

export default Tube;
