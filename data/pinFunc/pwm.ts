import { PinFuncType } from '@interfaces/pinFunc.interface';

const PWM: PinFuncType = {
  id: 'pwm',
  name: 'PWM',
  description: 'Pulse Width Modulation',
  used_for: [
    'Controlling the brightness of an LED',
    'Controlling the speed of a motor',
    'Controlling the volume of a speaker',
  ],
};

export default PWM;
