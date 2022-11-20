import { ProtocolType } from '../../lib/interfaces/protocol.interface';

const SPI: ProtocolType = {
  id: 'spi',
  name: 'SPI',
  description:
    'SPI (Serial Peripheral Interface) is a synchronous serial data protocol used by microcontrollers for communicating with one or more peripheral devices quickly over short distances. It is one master, multiple slave communication protocol. It uses full duplex communication, meaning that data can be sent and received at the same time.It uses three wires, SCK(serial clock), MOSI(master out, slave in), and MISO(master in, slave out), to communicate between devices.',
  wires: {
    number_of_wires: 4,
    clock_wire: true,
  },
  // speed: 'Up to 10 MHz',
  used_for: ['Communicating with sensors'],
};

export default SPI;
