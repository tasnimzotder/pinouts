import HighlightText from '@components/common/utils/HighlightText';
import SemiBoldSpan from '@components/common/utils/SemiBoldSpan';
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

      {/* technical specifications */}
      {boardData.specifications?.clock_speed && (
        <div>
          Clock Speed:{' '}
          <SemiBoldSpan>{boardData.specifications.clock_speed}</SemiBoldSpan>
        </div>
      )}

      {boardData.specifications?.flash_memory && (
        <div>
          Flash Memory:{' '}
          <SemiBoldSpan>{boardData.specifications.flash_memory}</SemiBoldSpan>
        </div>
      )}

      {boardData.specifications?.sram && (
        <div>
          SRAM: <SemiBoldSpan>{boardData.specifications.sram}</SemiBoldSpan>
        </div>
      )}

      {boardData.specifications?.eeprom && (
        <div>
          EEPROM: <SemiBoldSpan>{boardData.specifications.eeprom}</SemiBoldSpan>
        </div>
      )}

      {boardData.specifications?.operation_voltage && (
        <div>
          Operation Voltage:{' '}
          <SemiBoldSpan>
            {boardData.specifications.operation_voltage}V
          </SemiBoldSpan>
        </div>
      )}

      {boardData.specifications?.input_voltage && (
        <div>
          Input Voltage:{' '}
          <SemiBoldSpan>
            {boardData.specifications.input_voltage.min}V
          </SemiBoldSpan>
          {'-'}
          <SemiBoldSpan>
            {boardData.specifications.input_voltage.max}V
          </SemiBoldSpan>
        </div>
      )}

      {boardData.specifications?.max_current && (
        <div>
          Max Current:{' '}
          <SemiBoldSpan>{boardData.specifications.max_current}</SemiBoldSpan>
        </div>
      )}

      {boardData.specifications?.adc_range && (
        <div>
          ADC Range:{' '}
          <SemiBoldSpan>{boardData.specifications.adc_range.min}V</SemiBoldSpan>
          {'-'}
          <SemiBoldSpan>{boardData.specifications.adc_range.max}V</SemiBoldSpan>
        </div>
      )}

      {boardData.specifications?.wifi && (
        <div>
          WiFi:{' '}
          <SemiBoldSpan>
            {boardData.specifications.wifi.protocol} (
            {boardData.specifications.wifi.bands})
          </SemiBoldSpan>
        </div>
      )}

      {boardData.specifications?.bluetooth && (
        <div>
          Bluetooth:{' '}
          <SemiBoldSpan>
            {boardData.specifications.bluetooth.version}
          </SemiBoldSpan>
        </div>
      )}

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

      {boardData.pins_counts && (
        <div className="px-[5%]">
          <PinsCountView pinsCount={boardData.pins_counts} />
        </div>
      )}
    </div>
  );
};

const PinsCountView = ({
  pinsCount,
}: {
  pinsCount: {
    [key: string]: number;
  };
}) => {
  return (
    <div>
      <table className="my-3 w-full text-center border-spacing-2 border-blue-200 border-2">
        <thead>
          <tr>
            {Object.keys(pinsCount).map((key, index) => {
              return <th key={index}>{key}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.values(pinsCount).map((value, index) => {
              return <td key={index}>{value}</td>;
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BoardDetails;
