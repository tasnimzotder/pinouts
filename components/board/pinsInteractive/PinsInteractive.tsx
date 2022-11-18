import { PinsType, PinType } from '@pages/interfaces/board.interface';
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

  const get_sq_styles = (pin: PinType) => {
    let style_str = '';

    if (pin.type == 'power') {
      style_str += 'bg-red-500';
      style_str += ' rounded-full';
    } else if (pin.type == 'ground') {
      style_str += 'bg-gray-500';
      style_str += ' rounded-full';
    } else if (pin.type == 'digital') {
      style_str += 'bg-blue-500';
    } else if (pin.type == 'analog') {
      style_str += 'bg-yellow-500';
    }

    return style_str;
  };

  return (
    <div className="w-full">
      {pins_c.map((pin, idx) => {
        const isHighlighted = highlightedPins.includes(pin.id);

        return (
          <div
            key={idx}
            className={
              'bg-red-200 flex flex-row gap-3 px-3 m-2 p-1 hover:bg-blue-200 items-center cursor-pointer' +
              ` ${rounded}` +
              ` ${isHighlighted ? 'bg-blue-300' : ''}`
            }
            onClick={() => {}}
          >
            <div className={'h-3 w-3' + ` ${get_sq_styles(pin)}`}></div>
            <div className="flex flex-row gap-1">
              <div className="bg-red-300 rounded-sm px-1">
                {pin.display_name}
              </div>
              <div>{pin.names[0]}</div>
            </div>
          </div>
        );
      })}

      {JSON.stringify(highlightedPins)}
    </div>
  );
};

const PinsInteractive = ({ pins }: { pins: PinsType }) => {
  const [selectedPin, setSelectedPin] = useState<string>();
  const [highlightedPins, setHighlightedPins] = useState<string[]>([]);

  const leftPins = pins.left;
  const rightPins = pins.right;

  // test
  useEffect(() => {
    setHighlightedPins(['r4', 'r2', 'l1']);
  }, [rightPins]);

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
