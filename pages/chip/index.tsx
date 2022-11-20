import ChipList from '@components/common/chipList/ChipList';
import { NextPage } from 'next';
import { Chips } from '@data/chips';

const ChipsPage: NextPage = () => {
  return (
    <div>
      <h1>Chips</h1>
      <ChipList chipsData={Chips} />
    </div>
  );
};

export default ChipsPage;
