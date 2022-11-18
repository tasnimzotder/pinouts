import { PinType, SpecialPinsType } from '@interfaces/board.interface';
import { to_capitalize } from '@utils/textMods.utils';

const PinDetails = ({
  pinData,
  supportedProtocols,
}: {
  pinData: PinType;
  supportedProtocols: SpecialPinsType[];
}) => {
  return (
    <div>
      <div>Pin Details</div>

      <div>Display Name: {pinData.display_name}</div>
      <div>Other Names: {pinData.names.map((name) => name).join(', ')}</div>
      <div>Type: {to_capitalize(pinData.type)}</div>
      <div>
        Directions:{' '}
        {pinData.directions.map((direction) => direction).join(', ')}
      </div>

      {supportedProtocols[0] && (
        <div>
          Supported Protocols:{' '}
          {supportedProtocols.map((protocol) => protocol.name).join(', ')}
        </div>
      )}
    </div>
  );
};

export default PinDetails;
