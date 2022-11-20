import { PinFuncType } from '@interfaces/pinFunc.interface';

const getPinFuncData = async (pinFuncId: string) => {
  const data = await import(`@data/pinFunc/${pinFuncId}`).catch((err) => {
    console.error(err);
  });

  return data.default as PinFuncType;
};

export { getPinFuncData };
