"use client"
import React, { useState } from 'react';
import Board from '../_components/board';
import Tube from '../_components/tube';

export interface IGameProps {
}

export default function Page (props: IGameProps) {
  const [tubes, setTubes] = useState([
    { id: 1, colors: ['red', 'green', 'blue'], maxCapacity: 4 },
    { id: 2, colors: ['yellow', 'yellow', 'purple'], maxCapacity: 4 },
    { id: 3, colors: ['yellow', 'red', 'purple'], maxCapacity: 4 },
    { id: 4, colors: [], maxCapacity: 4 },
  ]);

  const handleTubeClick = (id: number) => {
    console.log(`Tube ${id} clicked`);
    // Implement game logic here
  };

  return (
    <Board>
      {tubes.map(tube => (
        <Tube
          key={tube.id}
          id={tube.id}
          colors={tube.colors}
          maxCapacity={tube.maxCapacity}
          onClick={handleTubeClick}
        />
      ))}
    </Board>
  );
}
