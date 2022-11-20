import { SpecialPinsType } from '../../../lib/interfaces/board.interface';
import { useSelected } from '../../../lib/contexts/selected.context';

const SpecialPinsView = ({
  special_pins,
}: {
  special_pins: SpecialPinsType[];
}) => {
  const { updateSelected } = useSelected();

  return (
    <div className="my-6 flex flex-row gap-3 flex-wrap">
      {special_pins.map((cat, idx) => {
        return (
          <div
            key={idx}
            onClick={() => {
              updateSelected(cat.id, cat.type);
            }}
            className="bg-blue-400 hover:bg-blue-500 text-white cursor-pointer px-1 rounded-sm w-fit"
          >
            {cat.name}
          </div>
        );
      })}
    </div>
  );
};

export default SpecialPinsView;
