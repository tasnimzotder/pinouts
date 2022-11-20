import BoardDetailsPanel from '@components/board/boardDetailsPanel/BoardDetailsPanel';
import PinsInteractive from '@components/board/pinsInteractive/PinsInteractive';
import { useSelected } from '../../lib/contexts/selected.context';
import BoardType from '../../lib/interfaces/board.interface';
import { getBoardData } from '../../lib/services/board.service';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const BoardPageSingle = ({ boardData }: { boardData: BoardType }) => {
  return (
    <div>
      <div className="flex flex-row justify-evenly mx-auto px-[5%] py-5">
        <PinsInteractive boardData={boardData} />
        <BoardDetailsPanel boardData={boardData} />
      </div>
    </div>
  );
};

// const getBoardData = async (board: string) => {
//   const data = await import(`@data/boards/${board}`);
//   return data.default;
// };

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: {
    board: string;
  };
}) => {
  let boardData: BoardType = await getBoardData(params.board);

  return {
    props: {
      boardData: boardData,
    },
  };
};

export default BoardPageSingle;
