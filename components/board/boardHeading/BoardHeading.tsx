import BoardType from '@interfaces/board.interface';
import { useSelected } from '@pages/contexts/selected.context';

const BoardHeading = ({ boardData }: { boardData: BoardType }) => {
  const { updateSelected } = useSelected();

  return (
    <div
      className="text-2xl font-medium px-[5%] cursor-pointer"
      onClick={() => {
        updateSelected(boardData.id, 'board');
      }}
    >
      {`Board ${boardData.name}`}
    </div>
  );
};

export default BoardHeading;
