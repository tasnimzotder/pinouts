import { SpecialPinsType } from '@interfaces/board.interface';
import { useSelected } from '@pages/contexts/selected.context';

const SpecialPinsView = ({
  special_pins,
}: {
  special_pins: SpecialPinsType[];
}) => {
  const { updateSelected } = useSelected();

  return (
    <div className="my-6 flex flex-row gap-3">
      {special_pins.map((cat, idx) => {
        return (
          <div
            key={idx}
            onClick={() => {
              updateSelected(cat.id, cat.type);
            }}
            className="bg-red-200 hover:bg-blue-200 cursor-pointer px-1 rounded-sm w-fit"
          >
            {cat.name}
          </div>
        );
      })}
    </div>
  );
};

export default SpecialPinsView;
