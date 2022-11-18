import { useSelected } from '@pages/contexts/selected.context';
import BoardType, {
  PinsType,
  PinType,
} from '@pages/interfaces/board.interface';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const PinCol = ({
  pins_c,
  col,
  highlightedPins,
}: {
  pins_c: PinType[];
  col: 'left' | 'right';
  highlightedPins: string[];
}) => {
  const rounded = col === 'right' ? 'rounded-l-full' : 'rounded-r-full';
  const { updateSelected } = useSelected();

  const get_sq_styles = (type: string) => {
    let style_str = '';

    if (type == 'power') {
      style_str += 'bg-red-500';
      style_str += ' rounded-full';
    } else if (type == 'ground') {
      style_str += 'bg-gray-500';
      style_str += ' rounded-full';
    } else if (type == 'digital') {
      style_str += 'bg-blue-500';
    } else if (type == 'analog') {
      style_str += 'bg-yellow-500';
    }

    return style_str;
  };

  const PinSymbol = ({ type }: { type: string }) => {
    return <div className={'h-3 w-3' + ` ${get_sq_styles(type)}`}></div>;
  };

  return (
    <div className="w-full">
      {pins_c.map((pin, idx) => {
        const isHighlighted = highlightedPins.includes(pin.id);

        return (
          <div
            key={idx}
            className={
              'bg-red-200 flex flex-row gap-3 px-3 m-2 p-1 hover:bg-blue-200 cursor-pointer' +
              ` ${rounded}` +
              ` ${isHighlighted ? 'bg-blue-300' : ''}`
            }
            onClick={() => {
              updateSelected(pin.id, pin.type);
            }}
          >
            <div
              className={
                'flex flex-row gap-3 items-center w-full' +
                `${col === 'left' ? ' justify-end' : ''}`
              }
            >
              {col === 'right' && (
                <div className="flex flex-row items-center gap-2">
                  <PinSymbol type={pin.type} />
                  <div className="bg-red-300 rounded-sm px-1">
                    {pin.display_name}
                  </div>
                </div>
              )}

              <div>{pin.names[0]}</div>

              {col === 'left' && (
                <div className="flex flex-row items-center gap-2">
                  <div className="bg-red-300 rounded-sm px-1">
                    {pin.display_name}
                  </div>
                  <PinSymbol type={pin.type} />
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

const PinsInteractive = ({ boardData }: { boardData: BoardType }) => {
  const pins = boardData.pins;
  const router = useRouter();

  const [highlightedPins, setHighlightedPins] = useState<string[]>([]);
  const { type, selected } = useSelected();

  useEffect(() => {
    if (type === 'power' || type === 'ground') {
      setHighlightedPins(
        pins.right
          .filter((pin) => pin.type === type)
          .map((pin) => pin.id)
          .concat(
            pins.left.filter((pin) => pin.type === type).map((pin) => pin.id)
          )
      );
    } else if (type === 'protocol' || type === 'pin') {
      setHighlightedPins(
        boardData.special_pins.find((pin_s) => pin_s.id === selected)?.pins ||
          []
      );
    } else {
      setHighlightedPins([]);
    }
  }, [type, selected, pins.left, pins.right, boardData.special_pins]);

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
