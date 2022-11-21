import BoardsType from '../lib/interfaces/boards.interface';

const boards: BoardsType = [
  {
    id: 'nodemcu-v2',
    name: 'NodeMCU',
    chip: {
      name: 'ESP8266',
      id: 'esp8266',
    },
    manufacturer: {
      name: 'Espressif',
      url: 'https://www.espressif.com/',
    },
  },
  {
    id: 'arduino-uno',
    name: 'Arduino UNO',
    chip: {
      name: 'ATmega328P',
      id: 'atmega328p',
    },
    manufacturer: {
      name: 'Arduino',
      url: 'https://www.arduino.cc/',
    },
  },
  {
    id: 'raspberry-pi-zero-2-w',
    name: 'Raspberry Pi Zero 2 W',
    chip: {
      name: 'ARM Cortex-A53',
      id: 'armcortexa53',
    },
    manufacturer: {
      name: 'Raspberry Pi Foundation',
      url: 'https://www.raspberrypi.org/',
    },
  },
];

export default boards;
