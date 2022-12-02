import { ProtocolType } from '../../lib/interfaces/protocol.interface';

const UART: ProtocolType = {
  id: 'uart',
  name: 'UART',
  description:
    'UART (Universal Asynchronous Receiver/Transmitter) is a asynchronous serial data protocol. It is a single master, single slave communication protocol. It uses two wires, TXD (transmit data) and RXD (receive data), to communicate between devices. The protocol is used for serial communication between devices such as microcontrollers and computers.',
  wires: {
    number_of_wires: 2,
    clock_wire: false,
  },
  // speed: 'Up to 115200 bps',
  used_for: ['Communicating between microcontrollers and computers'],
};

export default UART;
