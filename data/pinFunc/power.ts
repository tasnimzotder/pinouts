import { PinFuncType } from '@interfaces/pinFunc.interface';

const Power: PinFuncType = {
  id: 'power',
  name: 'Power',
  description:
    'Power pins are used to power the microcontroller. The external devices can be powered from the microcontroller using the power pins.',
  used_for: ['Powering the microcontroller', 'Powering external devices'],
};

export default Power;
