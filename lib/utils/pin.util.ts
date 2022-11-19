import BoardType, {
  PinsType,
  PinType,
  SpecialPinsType,
} from '../../lib/interfaces/board.interface';

const findPinFromBoard = (board: BoardType, pin_id: string) => {
  let pin_data: PinType;

  board.pins.left.find((pin) => {
    if (pin.id === pin_id) {
      pin_data = pin;
      return true;
    }
  });

  board.pins.right.find((pin) => {
    if (pin.id === pin_id) {
      pin_data = pin;
      return true;
    }
  });

  // @ts-ignore
  return pin_data;
};

const findPinsByType = (pins: PinsType, type: string) => {
  let pins_r: Array<string> = [];

  pins.left.filter((pin) => {
    if (pin.type === type) {
      pins_r.push(pin.id);
    }
  });

  pins.right.filter((pin) => {
    if (pin.type === type) {
      pins_r.push(pin.id);
    }
  });

  return pins_r;
};

const check_pwm = (specialPins: SpecialPinsType[], pin_id: string) => {
  const pwm_pins = specialPins.find((pins) => pins.id === 'pwm')?.pins || [];

  return pwm_pins.includes(pin_id);
};

export { findPinFromBoard, findPinsByType, check_pwm };
