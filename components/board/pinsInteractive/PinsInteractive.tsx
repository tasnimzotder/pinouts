import { useSelected } from '../../../lib/contexts/selected.context';
import BoardType, {
  PinsType,
  PinType,
} from '../../../lib/interfaces/board.interface';
import { findPinsByType } from '@utils/pin.util';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PinCol from '../pinCol/PinCol';

const PinsInteractive = ({ boardData }: { boardData: BoardType }) => {
  const pins = boardData.pins;

  const [highlightedPins, setHighlightedPins] = useState<string[]>([]);

  const { type, selected } = useSelected();

  useEffect(() => {
    if (type === 'power' || type === 'ground') {
      setHighlightedPins(findPinsByType(pins, type));
    } else if (type === 'protocol' || type === 'pin') {
      setHighlightedPins(
        boardData.special_pins.find((pin_s) => pin_s.id === selected)?.pins ||
          []
      );
    } else {
      setHighlightedPins([]);
    }
  }, [
    type,
    selected,
    pins.left,
    pins.right,
    boardData.special_pins,
    boardData,
    pins,
  ]);

  const leftPins = pins.left;
  const rightPins = pins.right;

  return (
    <div>
      <div className="flex flex-row bg-blue-50 justify-center gap-3">
        <PinCol
          pins_c={leftPins}
          col="left"
          highlightedPins={highlightedPins}
        />
        <PinCol
          pins_c={rightPins}
          col="right"
          highlightedPins={highlightedPins}
        />
      </div>
    </div>
  );
};

export default PinsInteractive;
