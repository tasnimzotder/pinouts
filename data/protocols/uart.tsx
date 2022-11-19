import { ProtocolType } from '../../lib/interfaces/protocol.interface';

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

export default UART;
