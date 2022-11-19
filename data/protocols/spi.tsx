import { ProtocolType } from '../../lib/interfaces/protocol.interface';

const SPI: ProtocolType = {
  id: 'spi',
  name: 'SPI',
  description:
    'SPI is a synchronous serial data protocol used by microcontrollers for communicating with one or more peripheral devices quickly over short distances.',
  wires: {
    number_of_wires: 4,
    clock_wire: true,
  },
  speed: 'Up to 10 MHz',
};

export default SPI;
