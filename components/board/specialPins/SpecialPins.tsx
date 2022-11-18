import Link from 'next/link';

const SpecialPinsView = ({ special_pins }: { special_pins: string[] }) => {
  return (
    <div>
      {special_pins.map((pin, idx) => {
        return (
          <Link
            href={`/pin/${pin}`}
            key={idx}
            className="bg-blue-400 mx-1 px-1 rounded-sm text-white"
          >
            {pin}
          </Link>
        );
      })}
    </div>
  );
};

export default SpecialPinsView;
