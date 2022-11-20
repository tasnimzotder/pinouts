type ProtocolType = {
  id: string;
  name: string;
  description: string;
  used_for?: Array<string>;
  wires: {
    number_of_wires: number;
    clock_wire: boolean;
  };
  speed?: string;
};

export type { ProtocolType };
