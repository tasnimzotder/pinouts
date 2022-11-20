import { PinFuncType } from '@interfaces/pinFunc.interface';

const Ground: PinFuncType = {
  id: 'ground',
  name: 'Ground',
  description:
    'Ground pins are used to connect the ground of the microcontroller to the ground of the external devices. This is used to prevent the microcontroller from being damaged by a voltage difference between the microcontroller and the external devices. The ground pins are also used to connect the ground of the external power supply.',
  used_for: [
    'Connecting the ground of the microcontroller to the ground of the external devices',
    'Connecting the ground of the external power supply',
  ],
};

export default Ground;
