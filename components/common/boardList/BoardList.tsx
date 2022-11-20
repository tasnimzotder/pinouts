import Link from 'next/link';
// import boards from '@data/boards';
import BoardsType from '@interfaces/boards.interface';
import { useEffect, useState } from 'react';

const BoardListTable = ({ boards }: { boards: BoardsType }) => {
  return (
    <table className="table w-full max-w-3xl mx-auto font-normal">
      <thead className="text-left border-b-2 border-blue-300">
        <th>Board</th>
        <th>Chip</th>
        <th>Manufacturer</th>
      </thead>

      <tbody>
        {boards.map((board, idx) => {
          return (
            <tr key={idx}>
              <td>
                <Link href={`/board/${board.id}`} className="text-blue-800">
                  {board.name}
                </Link>
              </td>
              <td>
                <Link href={`/chip/${board.chip.id}`}>{board.chip.name}</Link>
              </td>
              <td>
                <Link href={`${board.manufacturer.url}`} target="_blank">
                  {board.manufacturer.name}
                </Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const BoardList = () => {
  const [boards, setBoards] = useState<BoardsType>([]);

  useEffect(() => {
    const getBoards = async () => {
      const data = await import('@data/boards');
      setBoards(data.default);
    };

    getBoards();
  }, []);

  return (
    <div className="text-lg my-5">
      {boards[0] && <BoardListTable boards={boards} />}
    </div>
  );
};

export default BoardList;
