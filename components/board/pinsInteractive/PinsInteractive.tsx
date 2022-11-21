import { useSelected } from '../../../lib/contexts/selected.context';
import BoardType, {
  PinsType,
  PinType,
} from '../../../lib/interfaces/board.interface';
import { findPinsByType } from '@utils/pin.util';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import PinCol from '../pinCol/PinCol';
import USBConnectorC from '@components/common/connector/usbConnector/USBConnectorC';
import USBConnector from '@components/common/connector/usbConnector/USBConnector';

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

  let connector_flex: string = '';
  let connector_align: string = '';
  let padding: string = '';

  const side = boardData.positions?.power_connector?.side || undefined;
  const alignment = boardData.positions?.power_connector?.align || undefined;

  switch (side) {
    case 'left':
      connector_flex = 'flex-row';
      padding = 'py-[12%]';
      padding = 'py-[12%]';
      break;
    case 'right':
      connector_flex = 'flex-row-reverse';
      padding = 'py-[12%]';
      break;
    case 'top':
      connector_flex = 'flex-col';
      padding = 'px-[12%]';
      break;
    case 'bottom':
      connector_flex = 'flex-col-reverse';
      padding = 'px-[12%]';
      break;

    default:
      break;
  }

  switch (alignment) {
    case 'start':
      connector_align = 'items-start';
      break;
    case 'end':
      connector_align = 'items-end';
      break;
    case 'center':
      connector_align = 'items-center';
      break;

    default:
      break;
  }

  return (
    <div className={'flex m-5 ' + ` ${connector_flex} ${connector_align}`}>
      {/* power connector */}
      <div className={padding}>
        {side && alignment && <USBConnector side={side} />}
      </div>

      <div className="flex flex-row justify-center gap-3">
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
