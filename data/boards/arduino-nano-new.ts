import BoardType, { PinType } from '@interfaces/board.interface';

const leftPins: PinType[] = [
  {
    id: 'l1',
    board_pin: 'D13',
    names: ['LED_BUILTIN'],
    type: 'digital',
  },
  {
    id: 'l2',
    board_pin: '3V3',
    names: ['3V3'],
    type: 'power',
    voltage: 3.3,
  },
  {
    id: 'l3',
    board_pin: 'AREF',
    names: ['AREF'],
    type: 'other',
  },
  {
    id: 'l4',
    board_pin: 'A0',
    names: ['D14', 'ADC0'],
    type: 'analog',
  },
  {
    id: 'l5',
    board_pin: 'A1',
    names: ['D15', 'ADC1'],
    type: 'analog',
  },
  {
    id: 'l6',
    board_pin: 'A2',
    names: ['D16', 'ADC2'],
    type: 'analog',
  },
  {
    id: 'l7',
    board_pin: 'A3',
    names: ['D17', 'ADC3'],
    type: 'analog',
  },
  {
    id: 'l8',
    board_pin: 'A4',
    names: ['D18', 'ADC4'],
    type: 'analog',
  },
  {
    id: 'l9',
    board_pin: 'A5',
    names: ['D19', 'ADC5'],
    type: 'analog',
  },
  {
    id: 'l10',
    board_pin: 'A6',
    names: ['ADC6'],
    type: 'analog',
  },
  {
    id: 'l11',
    board_pin: 'A7',
    names: ['ADC7'],
    type: 'analog',
  },
  {
    id: 'l12',
    board_pin: '5V',
    names: ['5V'],
    type: 'power',
    voltage: 5,
  },
  {
    id: 'l13',
    board_pin: 'RST',
    names: ['RESET'],
    type: 'digital',
  },
  {
    id: 'l14',
    board_pin: 'GND',
    names: ['GND'],
    type: 'ground',
  },
  {
    id: 'l15',
    board_pin: 'VIN',
    names: ['VIN'],
    type: 'power',
  },
];

const rightPins: PinType[] = [
  {
    id: 'r1',
    board_pin: 'D12',
    names: ['D12', 'CIPO'],
    type: 'digital',
  },
  {
    id: 'r2',
    board_pin: 'D11',
    names: ['D11', 'COPI'],
    type: 'digital',
  },
  {
    id: 'r3',
    board_pin: 'D10',
    names: ['D10'],
    type: 'digital',
  },
  {
    id: 'r4',
    board_pin: 'D9',
    names: ['D9'],
    type: 'digital',
  },
  {
    id: 'r5',
    board_pin: 'D8',
    names: ['D8'],
    type: 'digital',
  },
  {
    id: 'r6',
    board_pin: 'D7',
    names: ['D7'],
    type: 'digital',
  },
  {
    id: 'r7',
    board_pin: 'D6',
    names: ['D6'],
    type: 'digital',
  },
  {
    id: 'r8',
    board_pin: 'D5',
    names: ['D5'],
    type: 'digital',
  },
  {
    id: 'r9',
    board_pin: 'D4',
    names: ['D4'],
    type: 'digital',
  },
  {
    id: 'r10',
    board_pin: 'D3',
    names: ['D3'],
    type: 'digital',
  },
  {
    id: 'r11',
    board_pin: 'D2',
    names: ['D2'],
    type: 'digital',
  },
  {
    id: 'r12',
    board_pin: 'GND',
    names: ['GND'],
    type: 'ground',
  },
  {
    id: 'r13',
    board_pin: 'RST',
    names: ['RESET'],
    type: 'digital',
  },
  {
    id: 'r14',
    board_pin: 'RXD',
    names: ['D0', 'RX'],
    type: 'digital',
  },
  {
    id: 'r15',
    board_pin: 'TXD',
    names: ['D1', 'TX'],
    type: 'digital',
  },
];

const ArduinoNanoNew: BoardType = {
  id: 'arduino-nano-new',
  name: 'Arduino Nano',
  description:
    'Arduino Nano is a small, complete, and breadboard-friendly board based on the ATmega328 (Arduino Nano 3.x). It works with a Mini-B USB cable instead of a standard one.',
  chip: {
    name: 'ATmega328P',
    id: 'atmega328p',
  },
  manufacturer: {
    name: 'Arduino',
    url: 'https://www.arduino.cc/',
  },
  documents: {
    datasheet:
      'https://docs.arduino.cc/static/6acf8897b0c0199bc52f2f8e5e5b4c5e/A000005-datasheet.pdf',
  },
  positions: {
    power_connector: {
      side: 'top',
      align: 'center',
    },
  },
  specifications: {
    clock_speed: '16 MHz',
    flash_memory: '32 KB',
    sram: '2 KB',
    eeprom: '1 KB',
    input_voltage: {
      min: 6,
      max: 20,
    },
  },
  pins_counts: {
    Analog: 8,
    Digital: 22,
    PWM: 6,
  },
  special_pins: [
    {
      id: 'power',
      name: 'Power',
      type: 'pin',
      pins: ['l2', 'l12', 'l15'],
    },
    {
      id: 'ground',
      name: 'Ground',
      type: 'pin',
      pins: ['l14', 'r12'],
    },
    {
      id: 'pwm',
      name: 'PWM',
      type: 'pin',
      pins: ['r2', 'r3', 'r4', 'r7', 'r8', 'r10'],
    },
  ],
  pins: {
    left: leftPins,
    right: rightPins,
  },
};

export default ArduinoNanoNew;
