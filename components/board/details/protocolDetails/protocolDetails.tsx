import { ProtocolType } from '../../../../lib/interfaces/protocol.interface';
import { getProtocolData } from '../../../../lib/services/protocol.service';
import { useEffect, useState } from 'react';

const ProtocolDetails = ({ protocol }: { protocol: string }) => {
  const [protocolData, setProtocolData] = useState<ProtocolType>();

  useEffect(() => {
    const getProtocolData_l = async () => {
      const data = await getProtocolData(protocol);
      setProtocolData(data);
    };

    getProtocolData_l();
  }, [protocol]);

  return (
    <div>
      <div>Protocol: {protocolData?.name}</div>

      <div>Protocol Details</div>

      <div>{protocolData?.description}</div>

      <div>Number of wires: {protocolData?.wires.number_of_wires}</div>

      <div>Clock wire: {protocolData?.wires.clock_wire ? 'Yes' : 'No'}</div>

      <div>Speed: {protocolData?.speed}</div>
    </div>
  );
};

export default ProtocolDetails;
