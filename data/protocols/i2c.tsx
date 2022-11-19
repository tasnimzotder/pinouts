import { ProtocolType } from '../../lib/interfaces/protocol.interface';

const I2C: ProtocolType = {
  id: 'i2c',
  name: 'I2C',
  description:
    'I2C is a synchronous serial data protocol used by microcontrollers for communicating with one or more peripheral devices over short distances.',
  wires: {
    number_of_wires: 2,
    clock_wire: true,
  },
  speed: 'Up to 400 kHz',
};

export default I2C;
