import { PinFuncType } from '@interfaces/pinFunc.interface';

const BuiltInLED: PinFuncType = {
  id: 'built-in-led',
  name: 'Built-in LED',
  description: 'The built-in LED on the ESP32',
  used_for: ['Indicating the status of the ESP32'],
};

export default BuiltInLED;
