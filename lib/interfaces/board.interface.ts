type BoardType = {
  id: string;
  name: string;
  description: string;
  image: string;
  pins: PinsType;
  special_pins: Array<SpecialPinsType>;
  supported_protocols?: Array<string>;
  supported_frameworks?: Array<string>;
  pins_counts?: PinsCountsType;
  chip: {
    name: string;
    id: string;
  };

  manufacturer?: {
    name: string;
    url: string;
  };
  positions?: PositionsType;
  specifications?: SpecificationsType;
};

type SpecificationsType = {
  clock_speed?: string;
  flash_memory?: string;
  sram?: string;
  eeprom?: string;
  operation_voltage?: number;
  input_voltage?: {
    min: number;
    max: number;
  };
  max_current?: number;
  adc_range?: {
    min: number;
    max: number;
  };
  wifi?: {
    protocol: string;
    bands: Array<string>;
  };
  bluetooth?: {
    version: string;
  };
};

type PositionsType = {
  power_connector?: {
    side: 'left' | 'right' | 'top' | 'bottom';
    align: 'start' | 'end' | 'center';
  };
};

type PinsCountsType = {
  GPIO?: number;
  Analog?: number;
  PWM?: number;
  I2C?: number;
  SPI?: number;
  UART?: number;
};

type PinsType = {
  left: Array<PinType>;
  right: Array<PinType>;
};

type PinType = {
  id: string;
  names: string[];
  board_pin?: string;
  type: 'digital' | 'analog' | 'power' | 'ground' | 'reserved' | 'other';
  special_types?: SpecialTypePin[];
  directions?: Array<'in' | 'out'>;
  disabled?: boolean;
  disabled_reason?: string;
  disconnected?: boolean;
  disconnected_reason?: string;
  description?: string;
  notes?: Array<string>;
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
  notes?: Array<string>;
};

export default BoardType;

export type {
  BoardType,
  PinsType,
  PinType,
  SpecialPinsType,
  SpecificationsType,
};
