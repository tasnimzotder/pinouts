import BoardType, {
  PinType,
  SpecialPinsType,
} from '../../../../lib/interfaces/board.interface';
import { to_capitalize } from '@utils/textMods.util';
import { check_pwm } from '@utils/pin.util';
import HighlightText from '@components/common/utils/HighlightText';

const PinDetails = ({
  pinData,
  specialPins,
}: {
  pinData: PinType;
  specialPins: SpecialPinsType[];
}) => {
  const supportedProtocols = specialPins
    .filter(
      (pins) => pins.type === 'protocol' && pins.pins.includes(pinData.id)
    )
    .map((protocol) => {
      return (
        <span key={protocol.name} className="font-semibold mx-2">
          {protocol.name}
        </span>
      );
    });

  return (
    <div className="flex flex-col gap-1 text-lg">
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
      {supportedProtocols[0] && (
        <div>Supported Protocols: {supportedProtocols}</div>
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

      {/* note */}
      {pinData.notes && (
        <div>
          Notes: <span>{pinData.notes}</span>
        </div>
      )}
    </div>
  );
};

export default PinDetails;
