import { ChipsType } from '@interfaces/chip.interface';
import Link from 'next/link';

const ChipList = ({ chipsData }: { chipsData: ChipsType }) => {
  return (
    <div>
      <div>Chips</div>

      <ul>
        {chipsData.map((chip) => {
          return (
            <li key={chip.id}>
              <Link href={`/chip/${chip.id}`}>{chip.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ChipList;
