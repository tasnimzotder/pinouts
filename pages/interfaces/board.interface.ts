type BoardType = {
  id: string;
  name: string;
  description: string;
  image: string;
  pins: PinsType;
  special_pins: Array<SpecialPinDescription>;
  operating_voltage?: number;
  supported_protocols?: Array<string>;
  supported_frameworks?: Array<string>;
  pins_counts?: PinsCountsType;
  chip: {
    name: string;
    id: string;
  };
};

type PinsCountsType = {
  gpio?: number;
  analog?: number;
  pwm?: number;
  i2c?: number;
  spi?: number;
  uart?: number;
};

type PinsType = {
  left: Array<PinType>;
  right: Array<PinType>;
};

type PinType = {
  id: string;
  names: string[];
  display_name?: string;
  type: 'digital' | 'analog' | 'power' | 'ground';
  special_types?: SpecialTypePin[];
  directions: Array<'in' | 'out'>;
  operation_voltage?: number;
  max_current?: number;
  manufacturer?: string;
};

type SpecialTypePin =
  | 'SPI'
  | 'I2C'
  | 'UART'
  | 'PWM'
  | 'ADC'
  | 'Power'
  | 'Ground';

type SpecialPinDescription = {
  name: string;
  pins: Array<string>;
  description: string;
};

export default BoardType;

export type { BoardType, PinsType, PinType };
