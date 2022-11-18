import { ProtocolType } from '@interfaces/protocol.interface';

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

const UART: ProtocolType = {
  id: 'uart',
  name: 'UART',
  description:
    'UART is a synchronous serial data protocol used by microcontrollers for communicating with one or more peripheral devices over short distances.',
  wires: {
    number_of_wires: 2,
    clock_wire: true,
  },
  speed: 'Up to 115200 bps',
};

const protocols: Array<ProtocolType> = [SPI, I2C, UART];

export type { ProtocolType };
export default protocols;
