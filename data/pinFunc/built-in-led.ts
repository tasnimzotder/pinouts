import { PinFuncType } from '@interfaces/pinFunc.interface';

const BuiltInLED: PinFuncType = {
  id: 'built-in-led',
  name: 'Built-in LED',
  description:
    'The built-in LED is a LED that is connected to a pin on the microcontroller. The LED is soldered on the board.',
  used_for: [
    'Indicating the state of the microcontroller',
    'Indicating the state of the program',
    'Testing the board',
  ],
};

export default BuiltInLED;
