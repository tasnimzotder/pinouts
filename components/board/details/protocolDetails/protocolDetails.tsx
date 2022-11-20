import { ProtocolType } from '../../../../lib/interfaces/protocol.interface';
import { getProtocolData } from '../../../../lib/services/protocol.service';
import { useEffect, useState } from 'react';
import SemiBoldSpan from '@components/common/utils/SemiBoldSpan';

const ProtocolDetails = ({
  protocol,
  notes,
}: {
  protocol: string;
  notes?: Array<string>;
}) => {
  const [protocolData, setProtocolData] = useState<ProtocolType>();

  useEffect(() => {
    const getProtocolData_l = async () => {
      const data = await getProtocolData(protocol);
      setProtocolData(data);
    };

    getProtocolData_l();
  }, [protocol]);

  return (
    <div className="flex flex-col gap-2">
      <div>
        <span>Protocol: </span>
        <SemiBoldSpan>{protocolData?.name}</SemiBoldSpan>
      </div>

      <div>
        <span>Description: </span>
        <span>{protocolData?.description}</span>
      </div>

      <div>
        <span>Number of wires: </span>
        <SemiBoldSpan>{protocolData?.wires.number_of_wires}</SemiBoldSpan>
      </div>

      <div>
        <span>Clock wire: </span>
        {protocolData?.wires.clock_wire ? (
          <SemiBoldSpan>Yes</SemiBoldSpan>
        ) : (
          <SemiBoldSpan>No</SemiBoldSpan>
        )}
      </div>

      <div>
        <span>Speed: </span>
        <SemiBoldSpan>{protocolData?.speed}</SemiBoldSpan>
      </div>

      {protocolData?.used_for && (
        <div>
          Used For:{' '}
          <ul className="pl-12 list-disc">
            {protocolData?.used_for.map((usedFor, index) => {
              return (
                <li key={index}>
                  <SemiBoldSpan>{usedFor}</SemiBoldSpan>
                </li>
              );
            })}
          </ul>
        </div>
      )}

      {notes && (
        <div>
          Notes:
          <ul className="pl-12 list-disc">
            {notes.map((note, index) => {
              return (
                <li key={index}>
                  <SemiBoldSpan>{note}</SemiBoldSpan>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProtocolDetails;
