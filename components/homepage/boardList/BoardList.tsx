import Link from 'next/link';
import boards from '@data/boards';
import { useState } from 'react';
import { execArgv } from 'process';

const BoardList = () => {
  return (
    <div>
      {boards.map((board) => {
        return (
          <div key={board.id}>
            <div>
              <Link href={`/board/${board.id}`}>{board.name}</Link>
            </div>
            <div>{board.content}</div>
          </div>
        );
      })}
    </div>
  );
};

export default BoardList;
