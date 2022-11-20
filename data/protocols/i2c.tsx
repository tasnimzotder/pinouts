import { ProtocolType } from '../../lib/interfaces/protocol.interface';

const I2C: ProtocolType = {
  id: 'i2c',
  name: 'I2C',
  description:
    'I2C (Inter-Integrated Circuit) is a synchronous serial data protocol used by microcontrollers for communicating with one or more peripheral devices over short distances. It is a multi-master, multi-slave, single-ended, serial, synchronous, packet-switched, half-duplex, point-to-point communication protocol. It uses two wires, SDA (serial data) and SCL (serial clock), to communicate between devices.',
  wires: {
    number_of_wires: 2,
    clock_wire: true,
  },
  // speed: '100 Kbps - 5 Mbps',
  used_for: [
    'Communicating with sensors',
    'Communicating with EEPROMs',
    'Accessing real-time clocks',
  ],
};

export default I2C;
