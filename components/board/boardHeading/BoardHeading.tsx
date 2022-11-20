import BoardType from '../../../lib/interfaces/board.interface';
import { useSelected } from '../../../lib/contexts/selected.context';

const BoardHeading = ({ boardData }: { boardData: BoardType }) => {
  const { updateSelected } = useSelected();

  return (
    <div
      className="text-2xl font-medium cursor-pointer"
      onClick={() => {
        updateSelected(boardData.id, 'board');
      }}
    >
      <span className="text-gray-600">Board </span>
      <span>{boardData.name}</span>
    </div>
  );
};

export default BoardHeading;
