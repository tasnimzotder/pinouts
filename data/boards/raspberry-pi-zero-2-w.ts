import BoardType from '@interfaces/board.interface';
import RPiBoardPins from './common/raspberry-pi-board-pins';

const RaspberryPiZero2W: BoardType = {
  id: 'raspberry-pi-zero-2-w',
  name: 'Raspberry Pi Zero 2 W',
  description:
    'Raspberry Pi is a series of small single-board computers developed in the United Kingdom by the Raspberry Pi Foundation to promote teaching of basic computer science in schools and in developing countries.',
  image: 'raspberrypi.png',
  supported_protocols: ['SPI', 'I2C', 'UART'],
  chip: {
    name: 'ARM Cortex-A53',
    id: 'armcortexa53',
  },
  documents: {
    datasheet:
      'https://datasheets.raspberrypi.com/rpizero2/raspberry-pi-zero-2-w-product-brief.pdf',
    schematic:
      'https://datasheets.raspberrypi.com/rpizero2/raspberry-pi-zero-2-w-reduced-schematics.pdf',
  },
  positions: {
    power_connector: {
      side: 'left',
      align: 'end',
    },
  },
  pins_counts: {
    GPIO: 26,
    PWM: 4,
  },
  specifications: {
    operation_voltage: 5,
    clock_speed: '1 GHz',
    input_voltage: {
      min: 4.75,
      max: 5.2,
    },
    wifi: {
      protocol: '802.11b/g/n',
      bands: ['2.4 GHz'],
    },
    bluetooth: {
      version: '4.2',
    },
  },
  special_pins: [
    {
      id: 'i2c',
      name: 'I2C',
      type: 'protocol',
      pins: ['l2', 'l3', 'l14', 'r14'],
    },
    {
      id: 'uart',
      name: 'UART',
      type: 'protocol',
      pins: [
        'l2',
        'l3',
        'l4',
        'l6',
        'l10',
        'l11',
        'l12',
        'l14',
        'l15',
        'l16',
        'l17',
        'r4',
        'r5',
        'r12',
        'r13',
        'r14',
        'r16',
        'r18',
      ],
    },
    {
      id: 'spi',
      name: 'SPI',
      type: 'protocol',
      pins: [
        'l6',
        'l10',
        'l11',
        'l12',
        'l18',
        'r6',
        'r12',
        'r13',
        'r18',
        'r19',
        'r20',
      ],
    },
    {
      id: 'pwm',
      name: 'PWM',
      type: 'pin',
      pins: ['l17', 'l18', 'r6', 'r16'],
    },
    {
      id: 'power',
      name: 'Power',
      type: 'pin',
      pins: ['l1', 'l9', 'r1', 'r2'],
    },
    {
      id: 'ground',
      name: 'Ground',
      type: 'pin',
      pins: ['l5', 'l13', 'l20', 'r3', 'r7', 'r10', 'r15', 'r17'],
    },
  ],
  pins: RPiBoardPins,
};

export default RaspberryPiZero2W;
