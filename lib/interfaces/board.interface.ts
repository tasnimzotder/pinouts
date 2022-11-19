type BoardType = {
  id: string;
  name: string;
  description: string;
  image: string;
  pins: PinsType;
  special_pins: Array<SpecialPinsType>;
  operating_voltage?: number;
  supported_protocols?: Array<string>;
  supported_frameworks?: Array<string>;
  pins_counts?: PinsCountsType;
  chip: {
    name: string;
    id: string;
  };
  operation_voltage?: {
    min: number;
    max: number;
  };
  max_current?: number;
  manufacturer?: {
    name: string;
    url: string;
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
  board_pin?: string;
  type: 'digital' | 'analog' | 'power' | 'ground' | 'other';
  special_types?: SpecialTypePin[];
  directions: Array<'in' | 'out'>;
  disabled?: boolean;
  disabled_reason?: string;
  disconnected?: boolean;
  disconnected_reason?: string;
  description?: string;
  note?: string;
  pull_resistor?: 'up' | 'down';
  voltage?: number;
  current?: {
    min: number;
    max: number;
  };
};

type SpecialTypePin =
  | 'SPI'
  | 'I2C'
  | 'UART'
  | 'PWM'
  | 'ADC'
  | 'Power'
  | 'Ground';

type SpecialPinsType = {
  id: string;
  name: string;
  type:
    | 'analog'
    | 'digital'
    | 'power'
    | 'ground'
    | 'protocol'
    | 'pin'
    | 'other';
  pins: Array<string>;
  note?: string;
};

export default BoardType;

export type { BoardType, PinsType, PinType, SpecialPinsType };
