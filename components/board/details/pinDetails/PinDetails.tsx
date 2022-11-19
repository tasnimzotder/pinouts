import BoardType, {
  PinType,
  SpecialPinsType,
} from '../../../../lib/interfaces/board.interface';
import { to_capitalize } from '@utils/textMods.util';
import { check_pwm } from '@utils/pin.util';

const HighlightText = ({ text }: { text: string | undefined }) => {
  return (
    <span className="bg-gray-300 px-1 py-0 rounded-sm font-semibold">
      {text}
    </span>
  );
};

const PinDetails = ({
  pinData,
  specialPins,
}: {
  pinData: PinType;
  specialPins: SpecialPinsType[];
}) => {
  return (
    <div className="bg-blue-50 flex flex-col gap-1 text-lg">
      {/* <div>Pin Details</div> */}

      <div>
        Board Pin: <HighlightText text={pinData.board_pin} />
      </div>

      {/* pin names */}
      <div className="flex flex-row gap-2">
        Other Names:{' '}
        {pinData.names.map((name: string, key) => {
          return <HighlightText text={name} key={key} />;
        })}
      </div>

      {/* pintype */}
      <div>
        Type:
        <span className="font-semibold"> {to_capitalize(pinData.type)}</span>
      </div>

      {/* directions */}
      <div>
        Directions:{' '}
        {pinData.directions.map((direction: string, key) => {
          return (
            <span key={key} className="font-semibold mx-1">
              {direction.toUpperCase()}
            </span>
          );
        })}
      </div>

      {specialPins[0] && (
        <div>
          Supported Protocols:{' '}
          {/* {supportedProtocols.map((protocol) => protocol.name).join(', ')} */}
          {specialPins
            .filter((pins) => pins.type === 'protocol')
            .map((protocol) => {
              return (
                <span key={protocol.name} className="font-semibold mx-1">
                  {protocol.name}
                </span>
              );
            })}
        </div>
      )}

      {/* pwm */}
      {pinData.type === 'digital' && (
        <div>
          PWM:{' '}
          <span className="font-semibold">
            {check_pwm(specialPins, pinData.id) ? 'True' : 'False'}
          </span>
        </div>
      )}
    </div>
  );
};

export default PinDetails;
