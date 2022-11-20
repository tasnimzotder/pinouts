import BoardType from '../../lib/interfaces/board.interface';

const ArduinoUno: any = {
  id: 'arduinouno',
  name: 'Arduino UNO',
  description: 'Arduino UNO is an open source IoT platform.',
  image: 'arduinouno.png',
  chip: {
    name: 'ATmega328P',
    id: 'atmega328p',
  },
  positions: {
    power_connector: {
      side: 'top',
      align: 'start',
    },
  },
  special_pins: [
    {
      id: 'spi',
      name: 'SPI',
      type: 'protocol',
      pins: [],
    },
    {
      id: 'i2c',
      name: 'I2C',
      type: 'protocol',
      pins: [],
    },
    {
      id: 'uart',
      name: 'UART',
      type: 'protocol',
      pins: ['r17', 'r18'],
    },
    {
      id: 'pwm',
      name: 'PWM',
      type: 'pin',
      pins: ['r7', 'r8', 'r12', 'r13', 'r15'],
    },
    {
      id: 'adc',
      name: 'ADC',
      type: 'pin',
      pins: ['l8', 'l9', 'l10', 'l11', 'l12', 'l13', 'l14', 'l15'],
      key_point: '10 bit Analog to Digital Converter (ADC).',
    },
  ],
  pins: {
    left: [
      {
        id: 'l1',
        board_pin: '_',
        names: [],
        type: 'other',
        directions: [],
      },
      {
        id: 'l2',
        board_pin: 'IOREF',
        names: ['IOREF'],
        type: 'other',
        directions: [],
      },
      {
        id: 'l3',
        board_pin: 'RESET',
        names: ['RESET'],
        type: 'other',
        directions: [],
      },
      {
        id: 'l4',
        board_pin: '3V3',
        names: ['3.3V'],
        type: 'power',
        directions: ['out'],
      },
      {
        id: 'l5',
        board_pin: '5V',
        names: ['5V'],
        type: 'power',
        directions: ['out'],
      },
      {
        id: 'l6',
        board_pin: 'GND',
        names: ['GND'],
        type: 'ground',
        directions: ['out'],
      },
      {
        id: 'l7',
        board_pin: 'GND',
        names: ['GND'],
        type: 'ground',
        directions: ['out'],
      },
      {
        id: 'l8',
        board_pin: 'A0',
        names: ['A0'],
        type: 'analog',
        directions: ['in'],
      },
      {
        id: 'l9',
        board_pin: 'A1',
        names: ['A1'],
        type: 'analog',
        directions: ['in'],
      },
      {
        id: 'l10',
        board_pin: 'A2',
        names: ['A2'],
        type: 'analog',
        directions: ['in'],
      },
      {
        id: 'l11',
        board_pin: 'A3',
        names: ['A3'],
        type: 'analog',
        directions: ['in'],
      },
      {
        id: 'l12',
        board_pin: 'A4',
        names: ['A4'],
        type: 'analog',
        directions: ['in'],
      },
      {
        id: 'l13',
        board_pin: 'A5',
        names: ['A5'],
        type: 'analog',
        directions: ['in'],
      },
    ],
    right: [
      {
        id: 'r1',
        board_pin: '_',
        names: ['I2C - CLK'],
        type: 'digital',
        directions: [],
      },
      {
        id: 'r2',
        board_pin: '_',
        names: ['I2C - DATA'],
        type: 'digital',
        directions: [],
      },
      {
        id: 'r3',
        board_pin: 'AREF',
        names: ['AREF'],
        type: 'other',
        directions: [],
      },
      {
        id: 'r4',
        board_pin: 'GND',
        names: ['GND'],
        type: 'ground',
        directions: ['out'],
      },
      {
        id: 'r5',
        board_pin: '13',
        names: ['D13', 'SCK'],
        type: 'digital',
        directions: ['in', 'out'],
      },
      {
        id: 'r6',
        board_pin: '12',
        names: ['D12', 'MISO'],
        type: 'digital',
        directions: ['in', 'out'],
      },
      {
        id: 'r7',
        board_pin: '11',
        names: ['D11', 'MOSI'],
        type: 'digital',
        directions: ['in', 'out'],
      },
      {
        id: 'r8',
        board_pin: '10',
        names: ['D10', 'SS'],
        type: 'digital',
        directions: ['in', 'out'],
      },
      {
        id: 'r9',
        board_pin: '9',
        names: ['D9'],
        type: 'digital',
        directions: ['in', 'out'],
      },
      {
        id: 'r10',
        board_pin: '8',
        names: ['D8'],
        type: 'digital',
        directions: ['in', 'out'],
      },
      {
        id: 'r11',
        board_pin: '7',
        names: ['D7'],
        type: 'digital',
        directions: ['in', 'out'],
      },
      {
        id: 'r12',
        board_pin: '6',
        names: ['D6'],
        type: 'digital',
        directions: ['in', 'out'],
      },
      {
        id: 'r13',
        board_pin: '5',
        names: ['D5'],
        type: 'digital',
        directions: ['in', 'out'],
      },
      {
        id: 'r14',
        board_pin: '4',
        names: ['D4'],
        type: 'digital',
        directions: ['in', 'out'],
      },
      {
        id: 'r15',
        board_pin: '3',
        names: ['D3'],
        type: 'digital',
        directions: ['in', 'out'],
      },
      {
        id: 'r16',
        board_pin: '2',
        names: ['D2'],
        type: 'digital',
        directions: ['in', 'out'],
      },
      {
        id: 'r17',
        board_pin: '1',
        names: ['D1', 'TX'],
        type: 'digital',
        directions: ['in', 'out'],
      },
      {
        id: 'r18',
        board_pin: '0',
        names: ['D0', 'RX'],
        type: 'digital',
        directions: ['in', 'out'],
      },
    ],
  },
};

export default ArduinoUno;
