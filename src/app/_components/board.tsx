import React, { ReactNode } from 'react';
import styles from '../../styles/Bord.module.scss';

interface IBoardProps {
  children?: ReactNode;
}

const Board: React.FC<IBoardProps> = ({ children }) => {
  return (
    <div className={styles['board-container']}>
      {children}
    </div>
  );
}

export default Board