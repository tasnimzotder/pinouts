type ProtocolType = {
  id: string;
  name: string;
  description: string;
  wires: {
    number_of_wires: number;
    clock_wire: boolean;
  };
  speed: string;
};

export type { ProtocolType };
