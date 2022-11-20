import HighlightText from '@components/common/utils/HighlightText';
import { useSelected } from '@contexts/selected.context';
import Link from 'next/link';
import { useRouter } from 'next/router';
import BoardType from '../../../../lib/interfaces/board.interface';

const BoardDetails = ({ boardData }: { boardData: BoardType }) => {
  const { updateSelected } = useSelected();

  return (
    <div className="flex flex-col gap-2 text-lg">
      <div>{boardData.description}</div>

      <div>
        Chip:{' '}
        <Link href={`/chip/${boardData.chip.id}`} className="font-semibold">
          {boardData.chip.name}
        </Link>
      </div>

      <div>
        Operating Voltage:{' '}
        <span className="font-semibold">{boardData.operating_voltage}V</span>
      </div>

      {boardData.supported_protocols && (
        <div>
          Supported Protocols:{' '}
          <span>
            {boardData.supported_protocols.map((protocol, key) => {
              return (
                <span
                  key={key}
                  className="font-semibold mx-2 cursor-pointer"
                  onClick={() =>
                    updateSelected(protocol.toLowerCase(), 'protocol')
                  }
                >
                  {protocol}
                </span>
              );
            })}
          </span>
        </div>
      )}

      {boardData.supported_frameworks && (
        <div>
          Supported Frameworks:{' '}
          {boardData.supported_frameworks.map((framework, key) => {
            return (
              <span key={key} className="font-semibold mx-2">
                {framework}
              </span>
            );
          })}
        </div>
      )}

      <div className="px-[5%]">
        <table className="my-3 w-full text-center border-spacing-2 border-blue-200 border-2">
          <thead>
            <tr>
              <th>GPIO</th>
              <th>Analog</th>
              <th>I2C</th>
              <th>SPI</th>
              <th>UART</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{boardData.pins_counts?.gpio}</td>
              <td>{boardData.pins_counts?.analog}</td>
              <td>{boardData.pins_counts?.i2c}</td>
              <td>{boardData.pins_counts?.spi}</td>
              <td>{boardData.pins_counts?.uart}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BoardDetails;
