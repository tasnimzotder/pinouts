import { PinFuncType } from '@interfaces/pinFunc.interface';

const ADC: PinFuncType = {
  id: 'adc',
  name: 'ADC',
  description: 'Analog to Digital Converter',
  used_for: ['Reading analog values from sensors'],
};

export default ADC;
