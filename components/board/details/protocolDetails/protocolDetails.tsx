import { ProtocolType } from '@interfaces/protocol.interface';
import { useEffect, useState } from 'react';

const ProtocolDetails = ({ protocol }: { protocol: string }) => {
  const [protocolData, setProtocolData] = useState<ProtocolType>();

  useEffect(() => {
    try {
      import(`@data/protocols/${protocol}`)
        .then((data) => {
          setProtocolData(data.default);
        })
        .catch((err) => {
          console.error(err);
        });
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div>
      <div>Protocol Details</div>
      <div>Protocol: {protocol}</div>

      {protocolData && <div>{JSON.stringify(protocolData, null, 2)}</div>}
    </div>
  );
};

export default ProtocolDetails;
