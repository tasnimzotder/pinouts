import { PinFuncType } from '@interfaces/pinFunc.interface';

const ADC: PinFuncType = {
  id: 'adc',
  name: 'ADC',
  description:
    'ADC (Analog to Digital Converter) is a system that converts analog signals to digital signals. It is used to convert analog signals from sensors to digital signals that can be read by a microcontroller.',
  used_for: ['Reading analog values from sensors'],
};

export default ADC;
