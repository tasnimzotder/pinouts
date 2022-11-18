import BoardType from '@interfaces/board.interface';
import { useHighlighted } from '@pages/contexts/highlighted.context';
import BoardHeading from '../boardHeading/BoardHeading';
import SpecialPinsView from '../specialPins/SpecialPins';
import BoardDetails from './boardDetails/BoardDetails';

const BoardDetailsPanel = ({ boardData }: { boardData: BoardType }) => {
  const specialPins = boardData.special_pins.map((pin) => pin.name);
  const { highlighted } = useHighlighted();

  return (
    <div className="bg-red-300 w-1/2">
      <BoardHeading boardData={boardData} />
      <SpecialPinsView special_pins={specialPins} />

      <div>
        <BoardDetails boardData={boardData} />
      </div>

      <div>{JSON.stringify(highlighted)}</div>
    </div>
  );
};

export default BoardDetailsPanel;
