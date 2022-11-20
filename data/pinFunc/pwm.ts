import { PinFuncType } from '@interfaces/pinFunc.interface';

const PWM: PinFuncType = {
  id: 'pwm',
  name: 'PWM',
  description:
    'PWM (Pulse Width Modulation) is a system that generates a square wave signal with a variable duty cycle. It is used to output analog-like signals (voltage) from a microcontroller. The duty cycle of the signal can be varied to control the output voltage.',
  used_for: [
    'Controlling the brightness of an LED',
    'Controlling the speed of a motor',
    'Controlling the volume of a speaker',
  ],
};

export default PWM;
