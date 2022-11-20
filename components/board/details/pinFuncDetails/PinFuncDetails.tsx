import SemiBoldSpan from '@components/common/utils/SemiBoldSpan';
import { PinFuncType } from '@interfaces/pinFunc.interface';
import { getPinFuncData } from '@services/pinFunc.service';
import { useEffect, useState } from 'react';

const PinFuncDetails = ({
  pinFuncId,
  notes,
}: {
  pinFuncId: string;
  notes?: Array<string>;
}) => {
  const [pinFuncData, setPinFuncData] = useState<PinFuncType>();

  useEffect(() => {
    const getPinFuncData_l = async () => {
      const data = await getPinFuncData(pinFuncId);
      setPinFuncData(data);
    };

    getPinFuncData_l();
  }, [pinFuncId]);

  return (
    <div className="flex flex-col gap-2">
      {/* {JSON.stringify(pinFuncData)} */}

      <div>
        Name: <SemiBoldSpan>{pinFuncData?.name}</SemiBoldSpan>
      </div>

      <div>
        Description: <SemiBoldSpan>{pinFuncData?.description}</SemiBoldSpan>
      </div>

      {pinFuncData?.used_for && (
        <div>
          Used For:{' '}
          <ul className="pl-12 list-disc">
            {pinFuncData?.used_for.map((usedFor, index) => {
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

export default PinFuncDetails;
