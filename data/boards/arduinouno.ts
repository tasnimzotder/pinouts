import BoardType from '@pages/interfaces/board.interface';

const ArduinoUno: BoardType = {
  id: 'arduinouno',
  name: 'Arduino UNO',
  description: 'Arduino UNO is an open source IoT platform.',
  image: 'arduinouno.png',
  chip: {
    name: 'ATmega328P',
    id: 'atmega328p',
  },
  special_pins: [
    {
      name: 'SPI',
      pins: ['D10', 'D11', 'D12', 'D13'],
      description:
        'SPI is a synchronous serial data protocol used by microcontrollers for communicating with one or more peripheral devices quickly over short distances.',
    },
    {
      name: 'I2C',
      pins: ['D2', 'D3'],
      description:
        'I2C is a synchronous serial data protocol used by microcontrollers for communicating with one or more peripheral devices over short distances.',
    },
  ],
  pins: {
    left: [],
    right: [],
  },
};

export default ArduinoUno;
