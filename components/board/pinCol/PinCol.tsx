import { useSelected } from '@contexts/selected.context';
import { PinType } from '@interfaces/board.interface';

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
    } else if (type == 'ground') {
      style_str += 'bg-gray-500';
    } else if (type == 'digital') {
      style_str += 'bg-blue-500';
      style_str += ' rounded-full';
    } else if (type == 'analog') {
      style_str += 'bg-yellow-500';
      style_str += ' rounded-full';
    }

    return style_str;
  };

  const PinSymbol = ({ type }: { type: string }) => {
    return <div className={'h-3 w-3' + ` ${get_sq_styles(type)}`}></div>;
  };

  return (
    <div className="w-full my-2">
      {pins_c.map((pin, idx) => {
        const isHighlighted = highlightedPins.includes(pin.id);

        return (
          <div
            key={idx}
            className={
              'bg-gray-200 flex flex-row gap-3 px-3 m-2 p-1 hover:bg-blue-200 hover:text-gray-700 cursor-pointer' +
              ` ${rounded}` +
              ` ${isHighlighted ? 'bg-blue-400 text-white' : ''}`
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
                  <div className="bg-gray-300 text-gray-700 rounded-sm px-1">
                    {pin.board_pin}
                  </div>
                </div>
              )}

              <div>{pin.names[0]}</div>

              {col === 'left' && (
                <div className="flex flex-row items-center gap-2">
                  <div className="bg-gray-300 text-gray-700 rounded-sm px-1">
                    {pin.board_pin}
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

export default PinCol;
