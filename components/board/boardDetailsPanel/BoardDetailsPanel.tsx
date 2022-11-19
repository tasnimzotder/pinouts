import BoardType, {
  PinType,
  SpecialPinsType,
} from '../../../lib/interfaces/board.interface';
import { useSelected } from '../../../lib/contexts/selected.context';
import BoardHeading from '../boardHeading/BoardHeading';
import SpecialPinsView from '../specialPins/SpecialPins';
import BoardDetails from '../details/boardDetails/BoardDetails';
import PinDetails from '../details/pinDetails/PinDetails';
import ProtocolDetails from '../details/protocolDetails/protocolDetails';
import { findPinFromBoard } from '@utils/pin.util';

const BoardDetailsPanel = ({ boardData }: { boardData: BoardType }) => {
  const specialPins = boardData.special_pins;
  const { selected, type } = useSelected();

  let supportedProtocols: SpecialPinsType[] = boardData.special_pins;

  // if (
  //   type === 'analog' ||
  //   type === 'digital' ||
  //   type === 'power' ||
  //   type === 'ground'
  // ) {
  //   supportedProtocols = boardData.special_pins.filter(
  //     (pin_s) => pin_s.type === 'protocol' && pin_s.pins.includes(selected)
  //   );
  // }

  return (
    <div className="bg-red-300 w-1/2 px-5 py-3">
      <BoardHeading boardData={boardData} />
      <SpecialPinsView special_pins={specialPins} />

      <div>{type === 'board' && <BoardDetails boardData={boardData} />}</div>

      <div>
        {type === 'protocol' && <ProtocolDetails protocol={selected} />}
      </div>

      <div>
        {type === 'pin' && (
          <div>
            {type} {selected}
            {
              boardData.special_pins.find((pin_s) => pin_s.id === selected)
                ?.note
            }
          </div>
        )}
      </div>

      <div>
        {type === 'analog' ||
        type === 'digital' ||
        type === 'power' ||
        type === 'ground' ? (
          <PinDetails
            pinData={findPinFromBoard(boardData, selected)}
            specialPins={supportedProtocols}
          />
        ) : null}
      </div>
    </div>
  );
};;

export default BoardDetailsPanel;
