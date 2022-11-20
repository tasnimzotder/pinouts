import { PinFuncType } from '@interfaces/pinFunc.interface';

const GPIO: PinFuncType = {
  id: 'gpio',
  name: 'GPIO',
  description:
    'GPIO (General Purpose Input/Output) is a pin that can be used for input or output. It can be used to read the state of a input device or to control an output device. ',
  used_for: [
    'Connecting to external devices',
    'Controlling an external device',
    'Reading sensors',
  ],
};

export default GPIO;
